import { useCallback, useEffect, useState } from 'react';

type UseDarkMode = () => {
  dark: boolean;
  toggle: () => void;
};

export const useDarkMode: UseDarkMode = () => {
  const [dark, setDark] = useState(false);
  const toggle = useCallback(() => setDark((state) => !state), []);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'dark';
    }
  }, [dark]);

  return { dark, toggle };
};