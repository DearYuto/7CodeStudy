import Category from './components/Category';
import PagePadding from '@/components/elements/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { Carousel } from '@/components/ui/carousel';

const HomePage = async () => {
  return (
    <PagePadding>
      <main className='min-h-[600px]'>
        <div className='mt-9'></div>
        <Category />
        <div className='mt-12'></div>
        <PlayListCarousel />
      </main>
    </PagePadding>
  );
};

export default HomePage;
