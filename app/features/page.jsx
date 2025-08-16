'use client'

import Link from 'next/link'
import { Check, Zap, Shield, Palette, BarChart3, Users, Cog, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized components deliver exceptional speed and responsiveness across all devices and browsers."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security features and compliance standards to protect your data and users."
  },
  {
    icon: Palette,
    title: "Complete Customization",
    description: "Fully customizable design system with theming support for perfect brand alignment."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights and reporting to track user engagement and business metrics."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with role-based access, real-time collaboration, and workflow management."
  },
  {
    icon: Cog,
    title: "Easy Integration",
    description: "Seamless integration with existing systems through robust APIs and webhook support."
  }
]

export default function FeaturesPage() {
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
                <Link href="/features" className="text-foreground">Features</Link>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground">Demo</Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero Section */}
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
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build exceptional customer experiences. From lightning-fast performance to enterprise-grade security, Tailark provides the tools your team needs to succeed.
          </p>
        </AnimatedGroup>

        {/* Features Grid */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-card border rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </AnimatedGroup>

        {/* Call to Action */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
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
          className="bg-card border rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how these features work together to create exceptional user experiences. Request a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/demo">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/">
                Learn More
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </main>
    </div>
  )
}