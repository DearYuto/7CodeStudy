import Category from './components/Category';
import PagePadding from '@/components/elements/PagePadding';
import UserIcon from '@/components/elements/UserIcon';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';

const HomePage = async () => {
  const dummyPlaylists = [...dummyPlaylistArray];

  return (
    <PagePadding>
      <main className='min-h-[600px]'>
        <div className='mt-9'></div>
        <Category />
        <div className='mt-12'></div>
        <PlayListCarousel
          title='다시 듣기'
          subTitle='유토'
          Thumbnail={<UserIcon size='lg' />}
          playlistArray={[...dummyPlaylists]}
        />
      </main>
    </PagePadding>
  );
};

export default HomePage;
