import React from 'react';
import { FiBarChart, FiMusic } from 'react-icons/fi';

interface CategoryMenuProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryMenu = ({ icon, label }: CategoryMenuProps) => {
  return (
    <div className='w-full h-[56px] hover:bg-neutral-800 transition py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm'>
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div className='flex flex-col gap-4 w-full lg:flex-row '>
      <CategoryMenu icon={<FiMusic color='#AAAAAA' />} label={'최신음악'} />
      <CategoryMenu icon={<FiBarChart color='#AAAAAA' />} label={'차트'} />
      <CategoryMenu icon={<FiMusic />} label={'분위기 및 장르'} />
      <CategoryMenu icon={<FiMusic />} label={'최신음악'} />
    </div>
  );
};

export default Category;
