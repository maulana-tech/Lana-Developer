'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import { TechCategory, techStackData } from '@/data/techStack';

export function TechStack() {
  const categories = techStackData;
  
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
              <div
                key={index}
                className="group animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center">
                        {tech.svg ? (
                          <Image 
                            src={tech.svg} 
                            alt={tech.name} 
                            width={48} 
                            height={48}
                            className="max-w-full max-h-full"
                            loading="lazy"
                          />
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
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}