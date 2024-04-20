'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  icon: React.ReactNode;
  label: string;
  className: string;
}

const WhiteButton = ({ icon, label, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'bg-white hover:bg-neutral-200 cursor-pointer text-black rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-4',
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;
