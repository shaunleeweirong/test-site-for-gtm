'use client'

import Link from 'next/link'
import { 
  UserPlus, 
  Target, 
  Headphones, 
  Megaphone, 
  BarChart, 
  ShoppingCart,
  Building2,
  Store,
  CreditCard,
  Heart,
  GraduationCap,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const useCaseSolutions = [
  {
    icon: UserPlus,
    title: "Customer Onboarding",
    description: "Streamline new user experiences with guided workflows and interactive tutorials.",
    benefits: ["Reduce time-to-value", "Increase activation rates", "Personalized journeys"]
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Capture and convert prospects with intelligent forms and automated follow-ups.",
    benefits: ["Higher conversion rates", "Qualified lead scoring", "Automated nurturing"]
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Enhance help desk capabilities with self-service portals and smart routing.",
    benefits: ["Faster resolution times", "Reduced support costs", "24/7 availability"]
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    description: "Automate and personalize marketing workflows across multiple channels.",
    benefits: ["Targeted messaging", "Multi-channel reach", "Campaign optimization"]
  },
  {
    icon: BarChart,
    title: "Data & Analytics",
    description: "Transform customer insights into actionable strategies with advanced reporting.",
    benefits: ["Real-time insights", "Predictive analytics", "Custom dashboards"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Optimize online shopping experiences with personalized recommendations.",
    benefits: ["Increased sales", "Better user experience", "Cart abandonment recovery"]
  }
]

const industrySolutions = [
  {
    icon: Building2,
    title: "SaaS & Technology",
    description: "Scale your software business with customer success automation"
  },
  {
    icon: Store,
    title: "E-commerce & Retail",
    description: "Drive online sales with personalized shopping experiences"
  },
  {
    icon: CreditCard,
    title: "Financial Services",
    description: "Build trust with secure, compliant customer interactions"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Improve patient engagement with HIPAA-compliant solutions"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Enhance learning outcomes with interactive educational tools"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Streamline client relationships and project delivery"
  }
]

const successMetrics = [
  {
    metric: "87%",
    description: "Average increase in customer engagement"
  },
  {
    metric: "3.2x",
    description: "Faster time-to-value for new customers"
  },
  {
    metric: "45%",
    description: "Reduction in support ticket volume"
  },
  {
    metric: "92%",
    description: "Customer satisfaction score"
  }
]

export default function SolutionsPage() {
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
                <Link href="/features" className="text-muted-foreground hover:text-foreground">Features</Link>
                <Link href="/solutions" className="text-foreground">Solutions</Link>
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
            Solutions Built for Every Business Challenge
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your customer engagement with tailored solutions designed for your specific industry and use case. From onboarding to analytics, we have the tools to drive your business forward.
          </p>
        </AnimatedGroup>

        {/* Solutions by Use Case */}
        <section className="mb-20">
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
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Solutions by Use Case</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the solution that matches your specific business needs and objectives.
            </p>
          </AnimatedGroup>

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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {useCaseSolutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={index} className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </AnimatedGroup>
        </section>

        {/* Industry Solutions */}
        <section className="mb-20">
          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
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
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for your industry's unique requirements and compliance needs.
            </p>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8,
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industrySolutions.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div key={index} className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </div>
              )
            })}
          </AnimatedGroup>
        </section>

        {/* Success Stories */}
        <section className="mb-20">
          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.0,
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
            className="bg-muted/50 rounded-2xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how our solutions have transformed businesses across industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedGroup>
        </section>

        {/* Implementation Approach */}
        <section className="mb-20">
          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.2,
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Implementation Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 3-step process to get you from setup to success quickly.
            </p>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 1.4,
                  },
                },
              },
              item: {
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.8,
                  },
                },
              },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Assess</h3>
              <p className="text-muted-foreground">
                We analyze your current processes and identify optimization opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Customize</h3>
              <p className="text-muted-foreground">
                Tailor our solutions to match your specific business requirements and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Deploy</h3>
              <p className="text-muted-foreground">
                Implement with minimal disruption and provide ongoing support for success.
              </p>
            </div>
          </AnimatedGroup>
        </section>

        {/* Call to Action */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.6,
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
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your customer engagement? Let's discuss which solution is right for your business.
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
                Speak with Expert
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </main>
    </div>
  )
}