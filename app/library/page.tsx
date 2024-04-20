import React from 'react';

import { Playlist } from '@/types';

import PagePadding from '@/components/elements/PagePadding';
import Category from './components/Category';
import PlayListCard from '@/components/PlayListCard';

import { getRandomElementFromArray } from '@/lib/utils';
import { dummyPlaylistArray } from '@/lib/dummyData';


const LibraryPage = () => {
  return (
    <PagePadding>
      <div className='mt-9'></div>
      <Category />
      <div className='mt-12'></div>
      <section className='grid grdi-col gap-6 md:grid-cols-4 xl:grid-colos-3 2xl:grid-cols-6'>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray) as Playlist}
        />
      </section>
    </PagePadding>
  );
};

export default LibraryPage;
