'use client';
import React from 'react';
import Image from 'next/image';

import { Song } from '@/types';

import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from 'react-icons/fi';
import IconButton from './elements/IconButton';
import { useRouter } from 'next/navigation';

interface Props {
  children?: React.ReactNode;
  song: Song;
}

const SongCardRowExpand = ({ song }: Props) => {
  const { channel, channelId } = song;

  const { push } = useRouter();

  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  return (
    <section className='flex gap-4 w-full relative group'>
      <div className='w-[48px] h-[48px] relative'>
        <Image src={song.imageSrc} alt='img' fill className='object-cover' />
        <div className='absolute top-0 cursor-pointer bg-[rgba(0,0,0,0.8)] hidden group-hover:flex  w-[48px] h-[48px] justify-center items-center'>
          <FiPlayCircle size={20} />
        </div>
      </div>

      <div className='flex gap-4 justify-between basis-1/3'>
        <div className='w-[130px] truncate'>{song.name}</div>
        <div
          onClick={onClickChannel}
          className='text-neutral-500 hover:underline cursor-pointer'
        >
          {channel}
        </div>
      </div>

      <div>
        <section className='group-hover:flex hidden  w-full h-[48px] absolute right-0 top-0 justify-end'>
          <IconButton icon={<FiThumbsDown size={20} />} />
          <IconButton icon={<FiThumbsUp size={20} />} />
          <IconButton icon={<FiMoreVertical size={20} />} />
        </section>
      </div>
    </section>
  );
};

export default SongCardRowExpand;
