'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';

const Category = () => {
  const libraryCategory = ['재생목록', '팟캐스트', '노래', '앨범', '아티스트'];

  const [showActivityBar, setShowActivityBar] = useState(false);

  return (
    <div className='flex justify-between items-center gap-4'>
      <ul className='flex gap-4'>
        {libraryCategory.map((item) => {
          return (
            <li
              className={cn(
                'h-[38px] min-w-fit px-3 flex justify-center items-center border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer'
              )}
              key={item}
            >
              {item}
            </li>
          );
        })}
        <li></li>
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='w-[162px] h-[42px] flex justify-between items-center p-4 bg-neutral-700 rounded-3xl text-[14px] border'>
              <p>최근 활동</p>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-[300px] bg-neutral-800'>
            <DropdownMenuLabel className='p-4'>정렬 기준</DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-neutral-700' />
            <DropdownMenuGroup>
              <DropdownMenuCheckboxItem
                className='p-4'
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                <span className='min-w-[40px]'>
                  <FiCheck size={20} />
                </span>
                최근 활동
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem
                className='p-4'
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                <span className='min-w-[40px]'>
                  <FiCheck size={20} />
                </span>
                최근에 저장됨
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem
                className='p-4'
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                <span className='min-w-[40px]'>
                  <FiCheck size={20} />
                </span>
                최근 재생한 음악
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Category;
