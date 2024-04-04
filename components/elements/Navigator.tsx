'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { GoHome } from 'react-icons/go';
import { FiPlus, FiMusic, FiCompass } from 'react-icons/fi';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { dummyPlaylistArray } from './../../lib/dummyData';
import PlaylistNav from './PlaylistNav';

const ICON_SIZE = 24;

const Navigator = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={ICON_SIZE} />,
        label: '홈',
        isActive: pathname === '/',
        href: '/',
      },
      {
        icon: <FiCompass size={ICON_SIZE} />,
        label: '둘러보기',
        isActive: pathname === '/explore',
        href: '/explore',
      },
      {
        icon: <FiMusic size={ICON_SIZE} />,
        label: '보관함',
        isActive: pathname === '/library',
        href: '/library',
      },
    ];
  }, [pathname]);

  return (
    <>
      <ul className='flex flex-col gap-2 p-4'>
        {routes.map((route) => {
          return (
            <li
              className={cn(
                'flex cursor-pointer items-center gap-4 text-[16px] p-2 rounded-lg hover:bg-neutral-700',
                route.isActive && 'bg-neutral-800'
              )}
              key={route.label}
            >
              <span>{route.icon}</span>
              <Link className='w-full' href={route.href}>
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='px-6'>
        <div className='f-full h-[1px] bg-neutral-100'></div>
      </div>
      <div className='px-6'>
        <div className='flex items-center f-full h-[1px] bg-neutral-700 my-6 rounded-3xl p-4 font-[200] justify-center gap-2 cursor-pointer hover:bg-neutral-600'>
          <FiPlus size={ICON_SIZE} />
          <span>새 재생목록</span>
        </div>
      </div>
      <div>
        <ul className='flex flex-col'>
          {dummyPlaylistArray.map((playlist) => {
            return <PlaylistNav key={playlist.id} playlist={playlist} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Navigator;
