import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const username = 'LanaZeto'; // Ganti dengan nama pengguna GitHub Anda
  const token = process.env.GITHUB_TOKEN; // Simpan token di environment variable

  try {
    const response = await fetch(`https://api.github.com/users/${username}/events`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.statusText}`);
    }

    const data = await response.json();

    // Filter and process events (example: take last 5 PushEvents)
    const pushEvents = data
      .filter((event: any) => event.type === 'PushEvent')
      .slice(0, 5)
      .map((event: any) => ({
        id: event.id,
        repo: event.repo.name,
        commits: event.payload.commits.map((commit: any) => ({
          sha: commit.sha,
          message: commit.message,
          url: commit.url.replace('api.github.com/repos', 'github.com').replace('/commits/', '/commit/'),
        })),
        createdAt: event.created_at,
      }));

    return NextResponse.json(pushEvents);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching GitHub activity' }, { status: 500 });
  }
}
