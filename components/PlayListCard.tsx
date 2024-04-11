import { getRandomElementFromArray } from '@/lib/utils';
import { Playlist, Song } from '@/types';
import Image from 'next/image';
import React from 'react';

interface Props {
  playlist: Playlist;
}

const PlayListCard = ({ playlist }: Props) => {
  const { playlistName, owner, songList } = playlist;
  const imgSrc = (getRandomElementFromArray(songList) as Song).imageSrc;

  return (
    <article>
      <section className='relative h-[136px]'>
        <Image src={imgSrc} alt='thumbnail' className='object-cover' fill />
      </section>
      <section className='mt-2'>
        <div>{playlistName}</div>
        <div className='text-neutral-500'>{`${owner} - 트랙 ${songList.length}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
