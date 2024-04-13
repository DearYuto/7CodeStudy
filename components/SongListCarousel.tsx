import React from 'react';

import { Playlist, TopSong } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { chunkArray } from '@/lib/utils';
import SongCard from './SongCard';

interface Props {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10?: TopSong[];
}

const SongColumn = ({ songList }: { songList: TopSong[] }) => {
  return (
    <>
      {songList.map((song) => {
        return <SongCard key={song.src} song={song} />;
      })}
    </>
  );
};

const SongListCarousel = ({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
}: Props) => {
  const chunkedTop10SongList = chunkArray(songListTop10 as TopSong[], 4);

  return (
    <div className='w-full'>
      <Carousel>
        <div className='flex justify-between items-end my-2'>
          <article className='flex gap-3'>
            {Thumbnail}
            <div className='flex flex-col justify-center'>
              <div>
                {subTitle && <div className='text-neutral-500'>{subTitle}</div>}
              </div>
              <div className='text-[34px] font-bold leading-[34px]'>
                {title}
              </div>
            </div>
          </article>
          <div className='relative left-[45px]'>
            <div className='absolute bottom-[20px]'>
              <CarouselPrevious className='right-2' />
              <CarouselNext className='left-2' />
            </div>
          </div>
        </div>
        <CarouselContent>
          {chunkedTop10SongList?.map((topSongs, idx) => {
            return (
              <CarouselItem className='basis-1 lg:basis-1/3' key={idx}>
                <SongColumn songList={topSongs} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
