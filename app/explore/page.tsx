import React from 'react';
import Category from './components/Category';
import { getAllPlaylist } from '@/lib/dummyData';
import PagePadding from '@/components/elements/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import SongListCarousel from '@/components/SongListCarousel';
import { getSongListTop10 } from './../../lib/dummyData';

const ExplorePage = async () => {
  const [playlistArray, songlistTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className='mt-4'></div>
      <Category />
      <div className='mt-20'></div>
      <PlayListCarousel
        title='새 앨범 및 싱글'
        playlistArray={[...playlistArray]}
      />
      <div className='mt-20'></div>
      <SongListCarousel title='인기곡' songListTop10={songlistTop10} />
      <div className='mt-80'></div>
    </PagePadding>
  );
};

export default ExplorePage;
