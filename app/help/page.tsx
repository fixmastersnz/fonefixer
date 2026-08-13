"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle, Send, Headphones, Users, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import FloatingSocial from "@/components/floating-social"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HelpPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean; message: string} | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message || 'Message sent successfully!' })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          urgency: "",
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our repair experts",
      value: "027 415 2897",
      action: "Call Now",
      available: "7 Days a Week, 8AM - 8PM",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat for instant support",
      value: "027 415 2897",
      action: "Chat Now",
      available: "24/7 Response",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us detailed questions",
      value: "fonefixernz@gmail.com",
      action: "Send Email",
      available: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Onsite Service",
      description: "We come to your location",
      value: "Auckland Wide",
      action: "Book Service",
      available: "Same Day Available",
    },
  ]

  const faqItems = [
    {
      question: "How quickly can you repair my device?",
      answer: "Most repairs are completed within 30-60 minutes onsite. Complex repairs may take up to 2 hours.",
    },
    {
      question: "Do you provide warranty on repairs?",
      answer: "Yes! We provide warranty on all repairs using genuine parts. Warranty period varies by repair type.",
    },
    {
      question: "What areas do you service in Auckland?",
      answer:
        "We service all areas of Auckland including CBD, North Shore, West Auckland, South Auckland, and East Auckland.",
    },
    {
      question: "How much does a typical repair cost?",
      answer:
        "Repair costs vary by device and issue. Phone screen repairs start from $49, while laptop repairs start from $69.",
    },
    {
      question: "Do you repair water-damaged devices?",
      answer: "Yes, we specialize in water damage repair. Success depends on how quickly you bring the device to us.",
    },
    {
      question: "Can you repair devices that are out of warranty?",
      answer: "We repair devices regardless of warranty status, often at a fraction of manufacturer costs.",
    },
  ]

  const supportFeatures = [
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Certified technicians ready to help",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick response times for all inquiries",
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Trusted by 500+ satisfied customers",
    },
    {
      icon: Users,
      title: "Friendly Team",
      description: "Professional and approachable staff",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <FloatingSocial />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">🆘 Help & Support</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Need Help?</span>
              <br />
              <span className="text-purple-600">We're Here for You!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant support from Auckland's phone repair experts. Whether you need a quick fix or have questions
              about our services, we're ready to help!
            </p>

            {/* Emergency Call Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/640274152897" 
                target="_blank" 
                rel="noopener noreferrer"
                className="max-w-7xl"
              >
                <Button
                  size="lg"
                  className="max-w-7xl bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 2.126.549 4.125 1.513 5.865L.056 24l6.32-1.652c1.746.943 3.72 1.444 5.837 1.444 6.627 0 12-5.373 12-12S18.627 0 12 0zm6.5 17.292c-.32.9-1.78 1.647-2.912 1.85-.69.122-1.6.22-4.63-1.12-3.7-1.63-6.08-5.37-6.27-5.62-.19-.25-1.59-2.03-1.59-3.88 0-1.82.98-2.71 1.34-3.09.32-.34.7-.53 1.11-.53.14 0 .27.01.4 0 .39-.01.75.14 1.08.64.34.51 1.18 1.73 1.28 1.86.1.12.2.29.06.46-.13.17-.2.28-.4.45-.2.17-.39.37-.56.5-.17.13-.36.29-.15.56.21.27.94 1.2 2.02 1.88 1.37.88 2.49 1.15 2.91 1.28.42.13.67.11.91-.1.25-.2 1.06-1.02 1.35-1.37.28-.35.57-.4.88-.3.3.1 1.92.91 2.25 1.07.33.17.55.25.63.4.08.15.07.86-.25 1.69z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </a>
              <p className="text-sm text-gray-600">Available 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Multiple Ways</span> to Reach Us
            </h2>
            <p className="text-xl text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <method.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <div className="text-lg font-semibold text-blue-600 mb-3">{method.value}</div>
                  <p className="text-sm text-gray-500 mb-4">{method.available}</p>
                  <Button 
                    className="w-full" 
                    variant={index === 0 ? "default" : "outline"} 
                    asChild
                  >
                    {index === 0 ? (
                      <a href="tel:0274152897">{method.action}</a>
                    ) : index === 1 ? (
                      <a href="https://wa.me/640274152897" target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    ) : index === 2 ? (
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fonefixernz@gmail.com" target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    ) : (
                      <a href="/#cta">
                        {method.action}
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a <span className="text-purple-600">Message</span>
            </h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="027 XXX XXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Need help soon</SelectItem>
                        <SelectItem value="high">High - Urgent repair needed</SelectItem>
                        <SelectItem value="emergency">Emergency - Device critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please describe your issue or question in detail..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="tel:0274152897">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 027 415 2897
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 px-4 md:px-6 bg-blue-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our <span className="text-yellow-300">Support</span> is Different
            </h2>
            <p className="text-xl opacity-90">We're committed to providing exceptional customer service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 px-4 md:px-6 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">Emergency</span> Device Repair?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Device completely broken? Need it fixed urgently? Call our emergency line for same-day service!
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Hotline</h3>
            <div className="text-4xl font-bold text-red-600 mb-4">027 415 2897</div>
            <p className="text-gray-600 mb-6">Available 7 days a week for urgent repairs</p>
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" asChild>
              <a href="tel:0274152897">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-center space-x-2 mb-4">
                <img src="/fonefixer_logo.png" alt="Fone Fixer Logo" className="rounded-full w-10 h-10" />
                <h3 className="text-2xl font-bold">Fone Fixer</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Auckland's premier onsite phone repair service. Fast, reliable, and affordable.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Help</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services#emergency-repairs">Emergency Repairs</a></li>
                <li><a href="/services#free-diagnosis">Free Diagnosis</a></li>
                <li><a href="/services#warranty-claims">Warranty Claims</a></li>
                <li><a href="/services#technical-support">Technical Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
              <li><a href="/services#mobile-phone-repairs">Mobile Phone Repairs</a></li>
                <li><a href="/services#mac-repairs">Mac Repairs</a></li>
                <li><a href="/services#windows-repairs">Windows Repairs</a></li>
                <li><a href="/services#screen-replacements">Screen Replacements</a></li>
                <li><a href="/services#battery-replacements">Battery Replacements</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
              <li>027 415 2897</li>
                <li>fonefixernz@gmail.com</li>
                <li>Auckland, New Zealand</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>Fone Fixer All Rights Reserved © 2024 | Powered by DigitronCX®</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
