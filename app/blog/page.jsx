'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Learn how to create scalable and performant web applications using the latest features in Next.js 14.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
    category: "Development"
  },
  {
    id: 2,
    title: "The Future of Customer Engagement",
    excerpt: "Discover how AI and modern technologies are reshaping the way businesses interact with their customers.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    category: "Business"
  },
  {
    id: 3,
    title: "Design Systems That Scale",
    excerpt: "Best practices for creating and maintaining design systems that grow with your organization.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558655146-364adfc90919?w=800&q=80",
    category: "Design"
  }
]

export default function BlogPage() {
  const handleReadMore = (postTitle) => {
    sendGTMEvent({ event: 'blog_post_click', post_title: postTitle })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Tailark
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                <Link href="/blog" className="text-foreground">Blog</Link>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground">Demo</Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 0.8,
                },
              },
            },
          }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, design, and customer engagement.
          </p>
        </AnimatedGroup>

        {/* Blog Posts Grid */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 0.8,
                },
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                {/* Post Image */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                    onClick={() => handleReadMore(post.title)}
                  >
                    Read more →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </AnimatedGroup>

        {/* Newsletter Signup */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 0.8,
                },
              },
            },
          }}
          className="mt-24 bg-muted/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={() => sendGTMEvent({ event: 'newsletter_signup_click' })}
              className="px-8 py-3 rounded-xl"
            >
              Subscribe
            </Button>
          </div>
        </AnimatedGroup>
      </main>
    </div>
  )
}