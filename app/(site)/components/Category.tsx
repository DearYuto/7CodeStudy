'use client';

import React from 'react';
import useUIState from '@/hooks/zustand/useUIState';
import { homeCategoryList } from '@/lib/dummyData';
import { cn } from '@/lib/utils';

const Category = () => {
  const { homeCategory, headerImageSrc, setHeaderImageSrc, setHomeCategory } =
    useUIState();

  const onClickCategory = (item: { src: string; label: string }) => () => {
    if (homeCategory === item.label) {
      setHeaderImageSrc('');
      changeCategory('');
      return;
    }

    changeSrc(item.src);
    changeCategory(item.label);
  };

  const changeCategory = (label: string) => {
    setHomeCategory(label);
  };

  const changeSrc = (src: string) => {
    setHeaderImageSrc(src);
  };

  return (
    <ul className='flex gap-4'>
      {homeCategoryList.map((item) => {
        return (
          <li
            onClick={onClickCategory(item)}
            className={cn(
              'h-[38px] min-w-fit px-3 flex justify-center items-center border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer',
              item.label === homeCategory &&
                'bg-white text-black hover:bg-white'
            )}
            key={item.label}
          >
            {item.label}
          </li>
        );
      })}
      <li></li>
    </ul>
  );
};

export default Category;
