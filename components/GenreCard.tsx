import React from 'react';
import { genRandomHex } from '@/lib/utils';

interface Props {
  genre: string;
}

const GenreCard = ({ genre }: Props) => {
  const hex = genRandomHex();

  return (
    <div className='flex  h-[48px] w-full cursor-pointer bg-neutral-800 rounded-l-lg rounded-r-lg '>
      <div
        className='h-full w-2 rounded-l-lg'
        style={{ backgroundColor: hex }}
      ></div>
      <div className='flex justify-center items-center px-4'>{genre}</div>
    </div>
  );
};

export default GenreCard;
