'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { 
  Check, 
  X, 
  ArrowRight, 
  Star,
  Users,
  Zap,
  Shield,
  Headphones,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: "$49",
    period: "/month",
    yearlyPrice: "$39",
    popular: false,
    features: [
      { name: "Up to 5 team members", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Standard integrations", included: true },
      { name: "Email support", included: true },
      { name: "5GB storage", included: true },
      { name: "Advanced reporting", included: false },
      { name: "Custom branding", included: false },
      { name: "Priority support", included: false },
      { name: "Advanced security", included: false },
      { name: "Custom integrations", included: false }
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$149",
    period: "/month", 
    yearlyPrice: "$119",
    popular: true,
    features: [
      { name: "Up to 25 team members", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "All standard integrations", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "50GB storage", included: true },
      { name: "Advanced reporting", included: true },
      { name: "Custom branding", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced security", included: false },
      { name: "Custom integrations", included: false }
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: "Custom",
    period: "",
    yearlyPrice: "Custom",
    popular: false,
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Enterprise analytics suite", included: true },
      { name: "All integrations + custom", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Unlimited storage", included: true },
      { name: "Advanced reporting", included: true },
      { name: "White-label solution", included: true },
      { name: "Priority support", included: true },
      { name: "Enterprise security", included: true },
      { name: "Custom integrations", included: true }
    ]
  }
]

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
  },
  {
    question: "What's included in the free trial?",
    answer: "All plans come with a 14-day free trial that includes full access to all features in your selected plan. No credit card required."
  },
  {
    question: "Do you offer annual discounts?",
    answer: "Yes! You can save up to 20% by choosing annual billing. The discounted prices are shown when you toggle to yearly billing."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for Starter plans, priority email and chat for Professional plans, and 24/7 dedicated support for Enterprise customers."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your plan remains active until the end of your billing period."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, our Enterprise plan is fully customizable. We can tailor features, integrations, and support to meet your specific business requirements."
  }
]

const testimonials = [
  {
    quote: "Tailark transformed our customer engagement strategy. The ROI was evident within the first month.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechFlow Inc."
  },
  {
    quote: "The analytics insights have helped us make data-driven decisions that improved our conversion by 40%.",
    author: "Michael Rodriguez", 
    role: "Head of Growth",
    company: "StartupVenture"
  },
  {
    quote: "Outstanding support and incredibly powerful features. Exactly what our enterprise team needed.",
    author: "Emily Watson",
    role: "Director of Operations",
    company: "GlobalCorp"
  }
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
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
                <Link href="/features" className="text-muted-foreground hover:text-foreground">Features</Link>
                <Link href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</Link>
                <Link href="/pricing" className="text-foreground">Pricing</Link>
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
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. Start with a 14-day free trial, no credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </AnimatedGroup>

        {/* Pricing Cards */}
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
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all ${
                plan.popular ? 'border-primary shadow-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                  {isYearly && plan.price !== "Custom" && (
                    <div className="text-sm text-muted-foreground mt-1">
                      <span className="line-through">{plan.price}/month</span>
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                  onClick={() => sendGTMEvent({ 
                    event: 'click',
                    event_category: 'engagement',
                    event_action: 'click',
                    event_label: plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial',
                    page_location: '/pricing',
                    click_element: `pricing_tier_${plan.name.toLowerCase()}`,
                    plan_name: plan.name
                  })}
                >
                  <Link href="/demo">
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? '' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </AnimatedGroup>

        {/* Testimonials */}
        <section className="mb-20">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our customers are saying about their experience with Tailark.
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
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
            </p>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
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
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
          className="bg-card border rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Tailark to improve their customer engagement. Start your free trial today.
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
                page_location: '/pricing',
                click_element: 'final_cta_primary'
              })}
            >
              <Link href="/demo">
                Start Free Trial
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
                event_label: 'Contact Sales',
                page_location: '/pricing',
                click_element: 'final_cta_secondary'
              })}
            >
              <Link href="/demo">
                Contact Sales
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </main>
    </div>
  )
}