'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 = no contributions, 4 = many contributions
}

export function GitHubActivity() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/github-activity');
        if (!response.ok) {
          throw new Error(`API request failed: ${response.statusText}`);
        }
        const data = await response.json();
        // Assuming the API returns data in the ContributionDay[] format
        // You might need to transform the data from the API to match this format
        setContributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivity();
  }, []);

  // Group contributions by week for display
  const contributionWeeks = [];
  if (contributions) {
    for (let i = 0; i < contributions.length; i += 7) {
      contributionWeeks.push(contributions.slice(i, i + 7));
    }
  }


  // Get total contributions for the year
  const totalContributions = contributions?.reduce((sum, day) => sum + day.count, 0) ?? 0;

  // Get current streak
  let currentStreak = 0;
  if (contributions) {
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <IconBrandGithub size={24} className="mr-2" />
              <h3 className="text-xl font-semibold">GitHub Contributions</h3>
            </div>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="font-medium">{totalContributions}</span> contributions in the last year
              </div>
              <div>
                <span className="font-medium">{currentStreak}</span> day streak
              </div>
            </div>
          </div>
          
          {isLoading ? (
            <div className="h-32 flex items-center justify-center">
              <div className="animate-spin h-6 w-6 border-2 border-green-500 border-t-transparent rounded-full"></div>
            </div>
          ) : error ? (
            <div className="h-32 flex items-center justify-center text-muted-foreground">
              {error}
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col gap-1" style={{ minWidth: '730px' }}>
                <div className="flex text-xs text-muted-foreground justify-end pr-2 mb-1">
                  <div className="grid grid-cols-7 gap-1 w-full max-w-[730px]">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {contributionWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`w-3 h-3 rounded-sm ${
                            day.level === 0
                              ? 'bg-gray-100 dark:bg-gray-800'
                              : day.level === 1
                              ? 'bg-green-100'
                              : day.level === 2
                              ? 'bg-green-300'
                              : day.level === 3
                              ? 'bg-green-500'
                              : 'bg-green-700'
                          }`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end mt-2 text-xs text-muted-foreground">
                  <span className="mr-1">Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-100"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-300"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-700"></div>
                  </div>
                  <span className="ml-1">More</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
