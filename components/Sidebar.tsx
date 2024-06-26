import React from 'react';
import Logo from './elements/Logo';
import Navigator from './elements/Navigator';

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props) => {
  return (
    <div className='flex h-full'>
      <nav className='hidden lg:block min-w-[240px] border-r-[1px] border-neutral-600'>
        <div className='p-[24px]'>
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className='w-full lg:w-[calc(100%-240px)]'>{children}</div>
    </div>
  );
};

export default Sidebar;
