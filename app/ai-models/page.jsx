'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { 
  Brain, 
  Bot, 
  Star, 
  Zap,
  MessageSquare,
  FileText,
  Search,
  Target,
  RefreshCw,
  Shield,
  ArrowRight,
  Play,
  BarChart3,
  Clock,
  Plug,
  TrendingUp,
  Check,
  Sparkles,
  Cpu,
  Building2,
  ShoppingCart,
  Code
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const aiModels = [
  {
    name: "GPT-4",
    icon: Brain,
    description: "Advanced language understanding and generation",
    features: ["Natural conversation", "Code generation", "Complex reasoning"]
  },
  {
    name: "Claude",
    icon: Bot,
    description: "Constitutional AI with safety and reasoning focus", 
    features: ["Safety-first", "Long context", "Analytical thinking"]
  },
  {
    name: "Gemini",
    icon: Star,
    description: "Multimodal AI with fast response times",
    features: ["Text & images", "Fast inference", "Google integration"]
  },
  {
    name: "LLaMA",
    icon: Zap,
    description: "Open-source foundation models",
    features: ["Open source", "Customizable", "Cost-effective"]
  },
  {
    name: "Custom Models",
    icon: Cpu,
    description: "Bring your own trained models",
    features: ["Full control", "Domain-specific", "Private deployment"]
  }
]

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "Intelligent Chat Support",
    description: "Deploy AI-powered customer support that understands context and provides accurate, helpful responses 24/7.",
    benefits: ["Instant responses", "Context awareness", "Multi-language support"]
  },
  {
    icon: FileText,
    title: "Dynamic Content Generation",
    description: "Automatically generate personalized content, emails, and responses tailored to each customer's needs.",
    benefits: ["Personalized messaging", "Brand consistency", "Scale content creation"]
  },
  {
    icon: Search,
    title: "Predictive Analytics",
    description: "Leverage AI to predict customer behavior, identify trends, and recommend next-best actions.",
    benefits: ["Behavior prediction", "Trend analysis", "Action recommendations"]
  },
  {
    icon: Target,
    title: "Smart Personalization",
    description: "Create dynamic, AI-driven user experiences that adapt in real-time based on customer interactions.",
    benefits: ["Real-time adaptation", "Increased engagement", "Higher conversions"]
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    description: "Automate complex workflows with AI decision-making to reduce manual work and improve efficiency.",
    benefits: ["Automated decisions", "Reduced manual work", "Improved efficiency"]
  },
  {
    icon: Shield,
    title: "AI Safety & Monitoring",
    description: "Built-in safety guards, content filtering, and monitoring to ensure responsible AI deployment.",
    benefits: ["Content filtering", "Safety monitoring", "Compliance ready"]
  }
]

const useCases = [
  {
    icon: Building2,
    title: "Enterprise",
    metric: "40% reduction in support costs",
    description: "Large organizations use AI to handle complex customer inquiries while maintaining high service quality.",
    company: "GlobalCorp"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    metric: "35% increase in conversions",
    description: "Online retailers leverage AI for personalized product recommendations and intelligent customer support.",
    company: "ShopTech"
  },
  {
    icon: Code,
    title: "SaaS Platforms",
    metric: "60% faster user onboarding",
    description: "Software companies use AI to guide users through complex features and accelerate time-to-value.",
    company: "StartupX"
  }
]

const techSpecs = [
  {
    icon: Zap,
    title: "High Performance",
    features: ["Sub-100ms response time", "99.9% uptime SLA", "Edge computing", "Global load balancing"]
  },
  {
    icon: Plug,
    title: "Easy Integration",
    features: ["5-minute setup", "RESTful APIs", "SDKs available", "No ML expertise required"]
  },
  {
    icon: TrendingUp,
    title: "Enterprise Scale",
    features: ["Auto-scaling", "Multi-region deployment", "Dedicated infrastructure", "Custom SLAs"]
  }
]


export default function AIModelsPage() {
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
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</Link>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground">Demo</Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span><strong>NEW:</strong> GPT-4, Claude, and Gemini integration now available in beta</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

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
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Supercharge Your Customer Engagement with Intelligent AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Integrate powerful AI models directly into your customer engagement platform. From GPT-4 to Claude, deploy cutting-edge AI to enhance every customer interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="px-8"
              onClick={() => sendGTMEvent({ 
                event: 'click',
                event_category: 'engagement',
                event_action: 'click',
                event_label: 'Try AI Features',
                page_location: '/ai-models',
                click_element: 'hero_primary_cta'
              })}
            >
              <Link href="/demo">
                Try AI Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="px-8"
              onClick={() => sendGTMEvent({ 
                event: 'click',
                event_category: 'engagement',
                event_action: 'click',
                event_label: 'Watch Demo',
                page_location: '/ai-models',
                click_element: 'hero_secondary_cta'
              })}
            >
              <Link href="#demo">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </AnimatedGroup>

        {/* Supported AI Models */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Choose Your AI Model</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Work with industry-leading AI models or bring your own. Our platform supports all major models with seamless switching.
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
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {aiModels.map((model, index) => {
              const Icon = model.icon
              return (
                <div key={index} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{model.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs">
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </AnimatedGroup>
        </section>

        {/* AI Features */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform every aspect of customer engagement with intelligent automation and personalization.
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-card border rounded-2xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </AnimatedGroup>
        </section>

        {/* Interactive Demo */}
        <section className="mb-20" id="demo">
          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
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
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">See AI Models in Action</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of AI integration with our interactive demo. See real-time responses and performance metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="px-8"
                onClick={() => sendGTMEvent({ 
                  event: 'click',
                  event_category: 'engagement',
                  event_action: 'click',
                  event_label: 'Start Interactive Demo',
                  page_location: '/ai-models',
                  click_element: 'demo_section_primary'
                })}
              >
                <Link href="/demo">
                  <Play className="mr-2 w-4 h-4" />
                  Start Interactive Demo
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="px-8"
                onClick={() => sendGTMEvent({ 
                  event: 'click',
                  event_category: 'engagement',
                  event_action: 'click',
                  event_label: 'View Performance Metrics',
                  page_location: '/ai-models',
                  click_element: 'demo_section_secondary'
                })}
              >
                <Link href="#metrics">
                  <BarChart3 className="mr-2 w-4 h-4" />
                  View Performance Metrics
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </section>

        {/* Use Cases */}
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
            <h2 className="text-3xl font-bold mb-4">Real-World Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how businesses across industries are using AI to transform their customer engagement.
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
                    delayChildren: 1.4,
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
            className="grid md:grid-cols-3 gap-8"
          >
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="bg-card border rounded-xl p-8 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{useCase.metric}</div>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="text-sm text-muted-foreground">- {useCase.company}</div>
                </div>
              )
            })}
          </AnimatedGroup>
        </section>

        {/* Technical Details */}
        <section className="mb-20" id="metrics">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Infrastructure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for scale, security, and performance. Our AI infrastructure meets the demands of enterprise customers.
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
                    delayChildren: 1.8,
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
            className="grid md:grid-cols-3 gap-8"
          >
            {techSpecs.map((spec, index) => {
              const Icon = spec.icon
              return (
                <div key={index} className="bg-card border rounded-xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{spec.title}</h3>
                  <ul className="space-y-3">
                    {spec.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </AnimatedGroup>
        </section>


        {/* Final CTA */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 2.0,
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
          <h2 className="text-3xl font-bold mb-4">Ready to Add AI to Your Platform?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our free trial and see how AI can transform your customer engagement. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="px-8"
              onClick={() => sendGTMEvent({ 
                event: 'click',
                event_category: 'engagement',
                event_action: 'click',
                event_label: 'Start Free Trial',
                page_location: '/ai-models',
                click_element: 'final_cta_primary'
              })}
            >
              <Link href="/demo">
                <Sparkles className="mr-2 w-4 h-4" />
                Start Free Trial
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="px-8"
              onClick={() => sendGTMEvent({ 
                event: 'click',
                event_category: 'engagement',
                event_action: 'click',
                event_label: 'View Pricing',
                page_location: '/ai-models',
                click_element: 'final_cta_secondary'
              })}
            >
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </main>
    </div>
  )
}