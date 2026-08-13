"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Shield, CheckCircle, Phone, Heart, Target } from "lucide-react"
import Navigation from "@/components/navigation"
import FloatingSocial from "@/components/floating-social"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We use only premium parts and provide warranties on all our repair services",
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "We respect your time and strive to complete repairs as quickly as possible",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Honest pricing, clear communication, and no hidden fees - ever",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Technician",
      experience: "8+ years",
      specialty: "iPhone & Mac Repairs",
    },
    {
      name: "Sarah Chen",
      role: "Mobile Specialist",
      experience: "6+ years",
      specialty: "Android & Samsung",
    },
    {
      name: "Mike Wilson",
      role: "Windows Expert",
      experience: "10+ years",
      specialty: "Laptop & PC Repairs",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "98%", label: "Success Rate" },
    { number: "30min", label: "Avg Repair Time" },
    { number: "3 Years", label: "In Business" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <FloatingSocial />
      <WhatsAppFloat />

      {/* Hero Section */}
      <div id="about-us" style={{ position: 'relative', top: '-80px' }}></div>
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">🏆 About Fone Fixer</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted <span className="text-blue-600">Phone Repair</span>
              <br />
              <span className="text-purple-600">Experts in Auckland</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're passionate about bringing your devices back to life with professional, convenient onsite repair
              services that you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2021, Fone Fixer was born from a simple idea: phone repairs shouldn't be inconvenient or
                overpriced. We noticed that people were struggling with broken devices, having to take time off work or
                travel across the city just to get a simple screen replacement.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                That's when we decided to bring the repair shop to you. Our team of certified technicians provides
                professional, high-quality repairs right at your doorstep, whether you're at home, work, or anywhere in
                Auckland.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we've helped over 500 customers get their devices back to perfect working condition, and we're
                just getting started!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Get Your Device Fixed Today
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/ourstory.jpg"
                alt="Phone repair technician"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Devices Repaired</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and ensure you receive the best possible service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div id="our-team" style={{ position: 'relative', top: '-80px' }}></div>
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our certified technicians have years of experience and are passionate about fixing your devices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.experience} Experience</p>
                  <p className="text-sm text-gray-500">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-6 bg-blue-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-yellow-300">Achievements</span>
            </h2>
            <p className="text-xl opacity-90">Numbers that speak for our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-purple-600">Fone Fixer?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Onsite Convenience</h3>
                    <p className="text-gray-600">We come to you - no need to leave your home or office</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Certified professionals with years of experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                    <p className="text-gray-600">Premium quality replacement parts with warranty</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees, upfront pricing you can trust</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/why.jpeg"
                alt="Professional repair service"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="careers" style={{ position: 'relative', top: '-80px' }}></div>
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust Fone Fixer for their device repairs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 027 415 2897
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Book Online Service
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div id="contact" style={{ position: 'relative', top: '-80px' }}></div>
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
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about#about-us">About Us</a></li>
                <li><a href="/about#our-team">Our Team</a></li>
                <li><a href="/about#careers">Careers</a></li>
                <li><a href="/about#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
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
