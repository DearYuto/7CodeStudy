import React from 'react';
import { IoMdPlayCircle } from 'react-icons/io';
import { dummyAllSongList } from '@/lib/dummyData';


interface Props {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: typeof dummyAllSongList;
  };
}

const PlaylistNav = ({ playlist }: Props) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {
    // TODO
  };

  return (
    <li className='group flex mx-3 p-2 px-4 justify-between items-center hover:bg-neutral-700 rounded-lg'>
      <div className='flex flex-col'>
        <span className='text-[14px]'>{playlistName}</span>
        <span className='text-[12px] text-neutral-500'>{owner}</span>
      </div>
      <div
        onClick={onClickPlay}
        className='hidden group-hover:block cursor-pointer'
      >
        <IoMdPlayCircle size={30} />
      </div>
    </li>
  );
};

export default PlaylistNav;
