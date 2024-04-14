import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { chunkArray } from '@/lib/utils';
import GenreCard from './GenreCard';

interface Props {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  genreList?: string[];
}

const GenreColumn = ({ genreList }: { genreList: string[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {genreList.map((genre) => {
        return <GenreCard key={genre} genre={genre} />;
      })}
    </div>
  );
};

const GenreListCarousel = ({
  title,
  subTitle,
  Thumbnail,
  genreList,
}: Props) => {
  const chunkedGenreList = chunkArray(genreList as string[], 4);

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
          {chunkedGenreList?.map((genre, idx) => {
            return (
              <CarouselItem className='basis-1/3 lg:basis=1/4' key={idx}>
                <GenreColumn genreList={genre as string[]} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;