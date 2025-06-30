'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';
import Image from 'next/image';

export function GitHubActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex items-center mb-6">
            <IconBrandGithub size={24} className="mr-2" />
            <h3 className="text-xl font-semibold">GitHub Contributions</h3>
          </div>
          
          <div className="relative w-full h-auto" style={{ aspectRatio: '6 / 1' }}>
            <Image
              src="https://ghchart.rshah.org/maulana-tech?theme=dark"
              alt="GitHub Contributions Chart"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}