'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  // After mounting, we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9" />;
  }
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.15 }}
        key={resolvedTheme}
      >
        {resolvedTheme === 'dark' ? (
          <IconMoon size={20} className="text-yellow-300" />
        ) : (
          <IconSun size={20} className="text-yellow-500" />
        )}
      </motion.div>
    </Button>
  );
}