'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconCode, IconGitCommit, IconStar, IconGitPullRequest } from '@tabler/icons-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export function GitHubActivity() {
  const username = 'maulana-tech';
  
  const statsUrls = {
    generalStats: `https://github-readme-stats-sepia-six-64.vercel.app/api?username=${username}&theme=dark&hide_border=false&include_all_commits=true&count_private=true`,
    topLanguages: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact`
  };

  // GitHub stats data (based on the external context)
  const githubData = {
    totalCommits: '1.9k',
    totalPRs: '392',
    totalIssues: '2',
    totalStars: '0',
    contributedRepos: '11',
    rank: 'B',
    topLanguages: [
      { name: 'Jupyter Notebook', percentage: '78.71%', color: 'bg-orange-500' },
      { name: 'TypeScript', percentage: '8.70%', color: 'bg-blue-500' },
      { name: 'JavaScript', percentage: '4.76%', color: 'bg-yellow-500' },
      { name: 'PHP', percentage: '2.73%', color: 'bg-purple-500' },
      { name: 'HTML', percentage: '2.66%', color: 'bg-red-500' },
      { name: 'CSS', percentage: '2.45%', color: 'bg-blue-400' },
    ]
  };

  return (
    <div className="space-y-8">
      {/* Stats Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <CardContent className="pt-6 pb-4">
              <div className="flex items-center justify-center mb-2">
                <IconGitCommit className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-500">{githubData.totalCommits}</div>
              <p className="text-sm text-muted-foreground">Total Commits</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <CardContent className="pt-6 pb-4">
              <div className="flex items-center justify-center mb-2">
                <IconGitPullRequest className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-500">{githubData.totalPRs}</div>
              <p className="text-sm text-muted-foreground">Pull Requests</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <CardContent className="pt-6 pb-4">
              <div className="flex items-center justify-center mb-2">
                <IconStar className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-yellow-500">{githubData.totalStars}</div>
              <p className="text-sm text-muted-foreground">Total Stars</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <CardContent className="pt-6 pb-4">
              <div className="flex items-center justify-center mb-2">
                <IconCode className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-500">{githubData.contributedRepos}</div>
              <p className="text-sm text-muted-foreground">Repositories</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main GitHub Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <IconBrandGithub size={20} className="mr-2" />
                <h3 className="text-lg font-semibold">GitHub Statistics</h3>
                <span className="ml-auto px-2 py-1 text-xs font-medium bg-secondary rounded-full">
                  Rank {githubData.rank}
                </span>
              </div>
              
              <div className="flex justify-center">
                <ImageWithFallback
                  src={statsUrls.generalStats}
                  alt="Lana's GitHub Statistics"
                  width={495}
                  height={195}
                  className="rounded-lg"
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                  fallbackSrc="https://placehold.co/495x195/1a1b27/ffffff?text=GitHub+Stats"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <IconCode size={20} className="mr-2" />
                <h3 className="text-lg font-semibold">Most Used Languages</h3>
              </div>
              
              <div className="flex justify-center mb-4">
                <ImageWithFallback
                  src={statsUrls.topLanguages}
                  alt="Most Used Programming Languages"
                  width={495}
                  height={195}
                  className="rounded-lg"
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                  fallbackSrc="https://placehold.co/495x195/1a1b27/ffffff?text=Top+Languages"
                  priority
                />
              </div>
              
              {/* Language breakdown */}
              <div className="space-y-2">
                {githubData.topLanguages.slice(0, 4).map((language, index) => (
                  <div key={language.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${language.color} mr-2`}></div>
                      <span>{language.name}</span>
                    </div>
                    <span className="font-medium">{language.percentage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <IconBrandGithub size={20} className="mr-2" />
          View Full GitHub Profile
        </a>
      </motion.div>
    </div>
  );
}
