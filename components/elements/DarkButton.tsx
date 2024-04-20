'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  icon: React.ReactNode;
  label: string;
  className: string;
}

const DarkButton = ({ icon, label, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'bg-black border border-neutral-700 cursor-pointer hover:bg-neutral-700 text-white rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-4',
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
