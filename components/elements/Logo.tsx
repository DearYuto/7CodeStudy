'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconButton from './IconButton';

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push('/');
  };

  const onClickIcon = () => {};

  return (
    <section className='flex items-center gap-3'>
      <IconButton icon={<RxHamburgerMenu size={24} />} onClick={onClickIcon} />
      <div className='cursor-pointer ' onClick={onClickLogo}>
        <Image src={'/main-logo.svg'} width={100} height={30} alt='logo' />
      </div>
    </section>
  );
};

export default Logo;
