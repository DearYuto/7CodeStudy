import Header from '@/components/elements/Header';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className='w-full h-full'>
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
