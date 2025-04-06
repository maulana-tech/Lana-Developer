'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechCategory, getTechStackCategories } from '@/data/techStack';

export function TechStack() {
  const categories = getTechStackCategories();
  
  return (
    <Tabs defaultValue={categories[0].id} className="max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {category.items.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        {tech.icon ? (
                          <Image src={tech.icon} alt={tech.name} width={30} height={30} />
                        ) : (
                          <span className="text-xl" style={{ color: tech.color }}>
                            {tech.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}