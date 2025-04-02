'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.15 }}
        key={theme}
      >
        {theme === 'dark' ? (
          <IconMoon size={20} className="text-yellow-300" />
        ) : (
          <IconSun size={20} className="text-yellow-500" />
        )}
      </motion.div>
    </Button>
  );
}