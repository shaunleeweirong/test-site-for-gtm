'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Send GTM event
    sendGTMEvent({ 
      event: 'demo_request_submit',
      form_data: {
        company: formData.company,
        role: formData.role,
        interest: formData.interest
      }
    })

    // Simulate form submission
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: '',
        message: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <AnimatedGroup
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            },
            item: {
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 0.8
                }
              }
            }
          }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Request Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest. We&apos;ll get back to you within 24 hours.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </AnimatedGroup>
      </div>
    )
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
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
                <Link href="/demo" className="text-foreground">Demo</Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
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
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Request a Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Tailark can transform your customer engagement. Fill out the form below and we&apos;ll show you a personalized demo.
          </p>
        </AnimatedGroup>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
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
          >
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO</option>
                      <option value="cto">CTO</option>
                      <option value="marketing">Marketing Manager</option>
                      <option value="sales">Sales Manager</option>
                      <option value="product">Product Manager</option>
                      <option value="developer">Developer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    What interests you most? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Choose an option</option>
                    <option value="customer-engagement">Customer Engagement</option>
                    <option value="analytics">Analytics & Insights</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="integration">System Integration</option>
                    <option value="customization">Custom Solutions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your specific needs or goals..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-3 text-base"
                  onClick={() => sendGTMEvent({ 
                    event: 'click',
                    event_category: 'engagement',
                    event_action: 'click',
                    event_label: 'Request Demo',
                    page_location: '/demo',
                    click_element: 'demo_form_submit'
                  })}
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </AnimatedGroup>

          {/* Benefits */}
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
                hidden: { opacity: 0, x: 20 },
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">What You&apos;ll Get</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Personalized Demo",
                    description: "A 30-minute tailored demonstration of our platform based on your specific needs."
                  },
                  {
                    title: "Custom Implementation Plan",
                    description: "Detailed roadmap showing how Tailark integrates with your existing systems."
                  },
                  {
                    title: "ROI Analysis",
                    description: "Comprehensive analysis showing potential returns on your investment."
                  },
                  {
                    title: "Q&A Session",
                    description: "Direct access to our technical experts to answer all your questions."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6">
              <h4 className="font-medium mb-3">Quick Response</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We typically respond to demo requests within 24 hours and can schedule your demo as early as the next business day.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">Available today</span>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </main>
    </div>
  )
}