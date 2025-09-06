import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable for base URL or fallback to production URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://anyawe-optimize.vercel.app'
  const currentDate = new Date().toISOString()
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/tema`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/locations/golf-city`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/graphic-design`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/mobile-apps`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/video-editing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/social-media`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic blog posts
  let blogPosts: MetadataRoute.Sitemap = []
  
  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    
    if (fs.existsSync(postsDirectory)) {
      const filenames = fs.readdirSync(postsDirectory)
      
      blogPosts = filenames
        .filter(name => name.endsWith('.md'))
        .map(name => {
          const filePath = path.join(postsDirectory, name)
          const fileContents = fs.readFileSync(filePath, 'utf8')
          
          // Check if the file content is not commented out
          if (!fileContents.trim().startsWith('<!--')) {
            try {
              const { data } = matter(fileContents)
              const slug = name.replace(/\.md$/, '')
              
              return {
                url: `${baseUrl}/blog/${slug}`,
                lastModified: data.date ? new Date(data.date).toISOString() : currentDate,
                changeFrequency: 'monthly' as const,
                priority: 0.6,
              }
            } catch (error) {
              console.warn(`Error parsing blog post ${name}:`, error)
              return null
            }
          }
          return null
        })
        .filter(Boolean) as MetadataRoute.Sitemap
    }
  } catch (error) {
    console.warn('Error reading blog posts for sitemap:', error)
  }

  return [...staticPages, ...blogPosts]
}