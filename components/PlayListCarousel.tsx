import React from 'react';

import { Playlist } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import PlayListCard from './PlayListCard';

interface Props {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}: Props) => {
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
          {playlistArray?.map((playlist) => {
            return (
              <CarouselItem
                className='basis-1/2 md:basis-1/3 lg:basis-1/4'
                key={playlist.id}
              >
                <PlayListCard playlist={playlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
