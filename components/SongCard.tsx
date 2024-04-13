import React from 'react';
import { TopSong } from '@/types';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from 'react-icons/fi';
import IconButton from './elements/IconButton';

interface Props {
  children?: React.ReactNode;
  song: TopSong;
}

const SongCard = ({ song }: Props) => {
  return (
    <section className='flex gap-4 w-full relative group'>
      <div className='w-[48px] h-[48px] relative'>
        <Image src={song.imageSrc} alt='img' fill className='object-cover' />
        <div className='absolute top-0 cursor-pointer bg-[rgba(0,0,0,0.8)] hidden group-hover:flex  w-[48px] h-[48px] justify-center items-center'>
          <FiPlayCircle size={20} />
        </div>
      </div>

      <div>
        {song.rank === song.prevRank ? (
          <FaCircle size={10} />
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp size={10} color='#3CA63F' />
        ) : (
          <AiOutlineCaretDown size={10} color='FF0000' />
        )}
        <div>{song.rank + 1}</div>
      </div>

      <div>
        <div>{song.name}</div>
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

export default SongCard;
