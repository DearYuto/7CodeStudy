import React from 'react';

interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.5)] rounded-full cursor-pointer'
    >
      {icon}
    </div>
  );
};

export default IconButton;
