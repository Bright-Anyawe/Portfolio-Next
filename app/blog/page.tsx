import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Parser from 'rss-parser';

const postsDirectory = path.join(process.cwd(), 'posts');

function getLocalPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      source: 'local',
      link: `/blog/${slug}`,
    };
  });
}

async function getMediumPosts() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://medium.com/feed/@brightanyawe5');
    return { posts: feed.items.map((item) => ({
      slug: item.guid || item.link,
      title: item.title || '',
      date: item.pubDate || '',
      description: item.contentSnippet || '',
      link: item.link,
      source: 'medium',
    })), error: false };
  } catch (error) {
    // If Medium API fails (rate limit, etc), return empty array and log error
    console.error('Failed to fetch Medium posts:', error);
    return { posts: [], error: true };
  }
}

export default async function BlogPage() {
  const localPosts = getLocalPosts();
  const mediumResult = await getMediumPosts();
  const mediumPosts = mediumResult.posts;
  const allPosts = [...localPosts, ...mediumPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>
      {mediumResult.error && (
        <div className="mb-6 p-4 rounded bg-yellow-100 border border-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700 flex items-center justify-between">
          <span>
            Unable to load Medium posts right now. You can still read my articles on{' '}
            <a
              href="https://medium.com/@brightanyawe5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-700 dark:text-blue-300"
            >
              Medium
            </a>.
          </span>
        </div>
      )}
      <div className="grid gap-6">
        {allPosts.map((post) => (
          <div key={post.slug} className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                <a href={post.link} target={post.source === 'medium' ? '_blank' : undefined} rel={post.source === 'medium' ? 'noopener noreferrer' : undefined} className="hover:underline text-blue-700 dark:text-blue-400">
                  {post.title}
                </a>
              </h2>
              {post.source === 'medium' && (
                <span className="ml-2 px-2 py-1 text-xs bg-yellow-400 text-black rounded">Medium</span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{post.description}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </main>
  );
}