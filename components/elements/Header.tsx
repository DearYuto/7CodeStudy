import Image from 'next/image';
import React from 'react';
import UserIcon from './UserIcon';
import PagePadding from './PagePadding';

import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className='relative overflow-y-auto w-full h-full'>
      <section className='absolute top-0 w-full'>
        <div className='relative h-[400px] w-full'>
          <Image
            className='object-cover'
            fill
            alt='bg'
            src='https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <div className='absolute top-0 bg-black opacity-40 w-full h-full'></div>
          <div className='absolute top-0 bg-gradient-to-t from-black w-full h-full'></div>
        </div>
      </section>
      {/* searchSection */}
      <section className='sticky'>
        <PagePadding>
          <div className='flex justify-between items-center h-[64px]'>
            <article className='flex gap-4 items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px]'>
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className='h-full w-full bg-transparent'
                type='text'
                placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'
              />
            </article>
            <article className='flex gap-6 items-center'>
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className='relative'>{children}</section>
    </header>
  );
};

export default Header;
