import { TopSong } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getRandomInt = (min: number, max: number) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

export const getRandomElementFromArray = (arr: unknown[]) => {
  const len = arr.length;

  return arr[getRandomInt(0, len - 1)];
};

export const chunkArray = (arr: unknown[], chunkSize: number) => {
  const results: unknown[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    results.push(chunk);
  }

  return results;
};

export const genRandomHex = () => {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')} `;
};
