'use client';

import { motion } from 'framer-motion';

export function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Check out some of my recent projects that showcase my skills and expertise.
      </p>
    </motion.div>
  );
}
