'use client';

import React, { useEffect } from 'react';

import useUIState from '@/hooks/zustand/useUIState';

interface Props {
  imageSrc: string;
}

const HeaderBgChanger = ({ imageSrc }: Props) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) {
      setHeaderImageSrc(imageSrc);
    }
  }, [imageSrc, setHeaderImageSrc]);

  return <div></div>;
};

export default HeaderBgChanger;
