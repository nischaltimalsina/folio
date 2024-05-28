'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CircleIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <CircleIcon className='h-5 w-5' />;

  if (resolvedTheme === 'dark') {
    return (
      <SunIcon
        className='h-5 w-5 hover:text-primary transition-colors duration-300'
        onClick={() => setTheme('light')}
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <MoonIcon
        className='h-5 w-5 hover:text-primary transition-colors duration-300'
        onClick={() => setTheme('dark')}
      />
    );
  }
}
