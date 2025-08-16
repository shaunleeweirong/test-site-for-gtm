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
  const [formStartTime, setFormStartTime] = useState(null)
  const [fieldTimes, setFieldTimes] = useState({})
  const [fieldFocusTime, setFieldFocusTime] = useState(null)
  const [validationErrors, setValidationErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: null }))
    }
    
    // Track form progress
    const newFormData = { ...formData, [name]: value }
    const completedFields = Object.values(newFormData).filter(val => val.trim() !== '').length
    const totalRequiredFields = 5 // name, email, company, role, interest
    const completionPercentage = Math.round((completedFields / totalRequiredFields) * 100)
    
    sendGTMEvent({
      event: 'form_progress',
      form_name: 'demo_request',
      field_name: name,
      fields_completed: completedFields,
      total_fields: totalRequiredFields,
      completion_percentage: completionPercentage,
      page_location: '/demo'
    })
  }

  const handleFieldFocus = (fieldName) => {
    if (!formStartTime) {
      setFormStartTime(Date.now())
    }
    setFieldFocusTime(Date.now())
    
    sendGTMEvent({
      event: 'form_field_focus',
      field_name: fieldName,
      form_name: 'demo_request',
      page_location: '/demo'
    })
  }

  const handleFieldBlur = (fieldName, value) => {
    if (fieldFocusTime) {
      const timeSpent = Date.now() - fieldFocusTime
      setFieldTimes(prev => ({ ...prev, [fieldName]: timeSpent }))
    }
    
    const isCompleted = value && value.trim() !== ''
    
    sendGTMEvent({
      event: 'form_field_blur',
      field_name: fieldName,
      field_completed: isCompleted,
      form_name: 'demo_request',
      time_spent: fieldFocusTime ? Date.now() - fieldFocusTime : 0,
      page_location: '/demo'
    })
  }

  const handleSelectChange = (fieldName, value, options) => {
    sendGTMEvent({
      event: 'form_select_option',
      field_name: fieldName,
      selected_value: value,
      form_name: 'demo_request',
      page_location: '/demo'
    })
  }

  const validateField = (name, value) => {
    let error = null
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'required_field'
        else if (value.trim().length < 2) error = 'too_short'
        break
      case 'email':
        if (!value.trim()) error = 'required_field'
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'invalid_format'
        break
      case 'company':
        if (!value.trim()) error = 'required_field'
        break
      case 'role':
        if (!value) error = 'required_field'
        break
      case 'interest':
        if (!value) error = 'required_field'
        break
    }
    
    if (error) {
      setValidationErrors(prev => ({ ...prev, [name]: error }))
      sendGTMEvent({
        event: 'form_validation_error',
        field_name: name,
        error_type: error,
        form_name: 'demo_request',
        page_location: '/demo'
      })
    }
    
    return !error
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all required fields
    const fieldsToValidate = ['name', 'email', 'company', 'role', 'interest']
    let isValid = true
    
    fieldsToValidate.forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false
      }
    })
    
    if (!isValid) {
      sendGTMEvent({
        event: 'form_submit_failed',
        form_name: 'demo_request',
        validation_errors: Object.keys(validationErrors).length,
        page_location: '/demo'
      })
      return
    }
    
    // Calculate total form completion time
    const totalTime = formStartTime ? Math.round((Date.now() - formStartTime) / 1000) : 0
    
    // Send enhanced GTM event with analytics data
    sendGTMEvent({ 
      event: 'demo_request_submit',
      form_data: {
        company: formData.company,
        role: formData.role,
        interest: formData.interest
      },
      form_analytics: {
        total_time_seconds: totalTime,
        field_times: fieldTimes,
        completion_percentage: 100,
        validation_errors_count: 0
      },
      page_location: '/demo'
    })
    
    // Send form completion time tracking
    sendGTMEvent({
      event: 'form_completion_time',
      form_name: 'demo_request',
      total_time: totalTime,
      field_times: fieldTimes,
      page_location: '/demo'
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
      setFormStartTime(null)
      setFieldTimes({})
      setValidationErrors({})
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
                      onFocus={() => handleFieldFocus('name')}
                      onBlur={(e) => handleFieldBlur('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 ${
                        validationErrors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                      }`}
                      placeholder="John Doe"
                    />
                    {validationErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {validationErrors.name === 'required_field' ? 'Name is required' : 'Name must be at least 2 characters'}
                      </p>
                    )}
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
                      onFocus={() => handleFieldFocus('email')}
                      onBlur={(e) => handleFieldBlur('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 ${
                        validationErrors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                      }`}
                      placeholder="john@company.com"
                    />
                    {validationErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {validationErrors.email === 'required_field' ? 'Email is required' : 'Please enter a valid email address'}
                      </p>
                    )}
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
                      onFocus={() => handleFieldFocus('company')}
                      onBlur={(e) => handleFieldBlur('company', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 ${
                        validationErrors.company ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                      }`}
                      placeholder="Acme Corp"
                    />
                    {validationErrors.company && (
                      <p className="text-red-500 text-sm mt-1">Company name is required</p>
                    )}
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
                      onChange={(e) => {
                        handleInputChange(e)
                        handleSelectChange('role', e.target.value)
                      }}
                      onFocus={() => handleFieldFocus('role')}
                      onBlur={(e) => handleFieldBlur('role', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 ${
                        validationErrors.role ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                      }`}
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
                    {validationErrors.role && (
                      <p className="text-red-500 text-sm mt-1">Please select your role</p>
                    )}
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
                    onChange={(e) => {
                      handleInputChange(e)
                      handleSelectChange('interest', e.target.value)
                    }}
                    onFocus={() => handleFieldFocus('interest')}
                    onBlur={(e) => handleFieldBlur('interest', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 ${
                      validationErrors.interest ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                    }`}
                  >
                    <option value="">Choose an option</option>
                    <option value="customer-engagement">Customer Engagement</option>
                    <option value="analytics">Analytics & Insights</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="integration">System Integration</option>
                    <option value="customization">Custom Solutions</option>
                  </select>
                  {validationErrors.interest && (
                    <p className="text-red-500 text-sm mt-1">Please select what interests you most</p>
                  )}
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
                    onFocus={() => handleFieldFocus('message')}
                    onBlur={(e) => handleFieldBlur('message', e.target.value)}
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