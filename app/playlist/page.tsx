import PagePadding from '@/components/elements/PagePadding';
import HeaderBgChanger from '@/components/HeaderBgChanger';
import PlayListHead from '@/components/PlayListHead';
import SongCardRowExpand from '@/components/SongCardRowExpand';
import { getPlaylistById } from '@/lib/dummyData';
import { getRandomElementFromArray } from '@/lib/utils';
import { Playlist, Song } from '@/types';
import { permanentRedirect } from 'next/navigation';
import React from 'react';

interface PlaylistPageProps {
  searchParams: {
    list: string;
  };
}

const PlaylistPage = async (props: PlaylistPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) {
    permanentRedirect('/');
  }

  const imageSrc = (getRandomElementFromArray(playlist.songList) as Song)
    ?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className='mt-12'></div>

      <PlayListHead playlist={playlist} />
      <div className='mt-12'></div>

      <section className='flex flex-col gap-2'>
        {playlist.songList.map((song, idx) => {
          return <SongCardRowExpand song={song} key={idx} />;
        })}
      </section>
    </PagePadding>
  );
};

export default PlaylistPage;
