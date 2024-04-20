'use client';

import React from 'react';
import IconButton from './elements/IconButton';
import { FiFolder, FiMoreVertical, FiPlay } from 'react-icons/fi';
import { Playlist, Song } from '@/types';
import { getRandomElementFromArray } from '@/lib/utils';
import Image from 'next/image';
import DarkButton from './elements/DarkButton';
import WhiteButton from './elements/WhiteButton';

interface Props {
  playlist: Playlist;
}

const PlayListHead = ({ playlist }: Props) => {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList) as Song;

  return (
    <section>

      <div className='flex gap-[50px]'>
      <div className='relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]'>
        <Image alt='songImg' fill src={randomSong.imageSrc} />
      </div>
        <article className='flex flex-col justify-center'>
          <div className='font-bold text-[28px]'>{playlistName}</div>
          <div className='text-neutral-400 mt-4 text-[14px]'>
            <div>{`EP ˙ ${owner} ˙ 2019`}</div>
            <div>{`${songList.length}곡 ˙ 15분`}</div>
          </div>
          <ul className='hidden lg:flex gap-4 mt-4'>
            <WhiteButton
              className='w-[95px] text-[14px]'
              icon={<FiPlay />}
              label='재생'
            />
            <DarkButton
              className='w-[150px] text-[14px]'
              icon={<FiFolder />}
              label='보관함에 저장'
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>

      <ul className='flex gap-4 mt-4 lg:hidden'>
        <WhiteButton
          className='w-[95px] text-[14px]'
          icon={<FiPlay />}
          label='재생'
        />
        <DarkButton
          className='w-[150px] text-[14px]'
          icon={<FiFolder />}
          label='보관함에 저장'
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;
