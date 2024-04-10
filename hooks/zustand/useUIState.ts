import { create } from 'zustand';

interface UIState {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImageSrc: (src: string) => void;
}

const useUIState = create<UIState>((set) => ({
  homeCategory: '',
  headerImageSrc:
    'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  setHomeCategory: (value: string) => set({ homeCategory: value }),
  setHeaderImageSrc: (src: string) => set({ headerImageSrc: src }),
}));

export default useUIState;
