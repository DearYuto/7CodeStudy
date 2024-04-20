'use client';

import React from 'react';
import Image from 'next/image';
import { MdMoreVert } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

import { getRandomElementFromArray } from '@/lib/utils';
import { Playlist, Song } from '@/types';
import IconButton from './elements/IconButton';

interface Props {
  playlist: Playlist;
}

const PlayListCard = ({ playlist }: Props) => {
  const { push } = useRouter();
  const { id, playlistName, owner, songList } = playlist;
  const imgSrc = (getRandomElementFromArray(songList) as Song).imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  const onClickPlay = () => {};

  return (
    <article className='h-[240px] cursor-pointer group'>
      <section onClick={onClickCard} className='relative h-[136px]'>
        <Image
          src={imgSrc}
          alt='thumbnail'
          className='object-cover rounded-md'
          fill
        />

        <div className='group-hover:block hidden relative bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]'>
          <div className='absolute top-4 right-4'>
            <IconButton onClick={onClickPlay} icon={<MdMoreVert size={20} />} />
          </div>
          <div className='w-[45px] h-[45px] pl-[1.5px] rounded-full hover:bg-[rgba(0,0,0,0.9)] absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)]'>
            <FiPlay size={20} />
          </div>
        </div>
      </section>

      <section className='mt-2'>
        <div>{playlistName}</div>
        <div className='text-neutral-500'>{`${owner} - 트랙 ${songList.length}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
