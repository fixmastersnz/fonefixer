"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Laptop,
  Monitor,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Wrench,
  Battery,
  Wifi,
  Camera,
  Speaker,
  Zap,
} from "lucide-react"
import Navigation from "@/components/navigation"
import FloatingSocial from "@/components/floating-social"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const mainServices = [
    {
      icon: Smartphone,
      title: "Mobile Phone Repairs",
      description: "Complete repair services for all smartphone brands and models",
      features: [
        "Screen & Display Replacement",
        "Battery Replacement",
        "Charging Port Repair",
        "Camera Repair",
        "Speaker & Microphone Fix",
        "Water Damage Repair",
        "Software Troubleshooting",
      ],
      priceRange: "$49NZD - $199NZD",
      timeRange: "30-60 minutes",
      brands: ["iPhone", "Samsung", "Google", "Huawei", "OnePlus", "Xiaomi"],
    },
    {
      icon: Laptop,
      title: "Mac Repairs",
      description: "Professional MacBook and iMac repair services",
      features: [
        "Screen Replacement",
        "Keyboard Repair",
        "Logic Board Repair",
        "Battery Service",
        "Hard Drive Replacement",
        "RAM Upgrade",
        "macOS Installation",
      ],
      priceRange: "$89NZD - $299NZD",

      timeRange: "45-90 minutes",
      brands: ["MacBook Air", "MacBook Pro", "iMac", "Mac Mini"],
    },
    {
      icon: Monitor,
      title: "Windows Repairs",
      description: "Comprehensive Windows laptop and PC repair services",
      features: [
        "Screen Replacement",
        "Hardware Upgrades",
        "Software Issues",
        "Virus Removal",
        "Data Recovery",
        "Performance Optimization",
        "Windows Installation",
      ],
      priceRange: "$69NZD - $249NZD",
      timeRange: "45-90 minutes",
      brands: ["Dell", "HP", "Lenovo", "Asus", "Acer", "MSI"],
    },
  ]

  const commonIssues = [
    {
      icon: Smartphone,
      issue: "Cracked Screen",
      solution: "Professional screen replacement with premium quality parts",
      // price: "From $49",
    },
    {
      icon: Battery,
      issue: "Battery Drain",
      solution: "Battery replacement and optimization for extended life",
      // price: "From $59",
    },
    {
      icon: Zap,
      issue: "Won't Charge",
      solution: "Charging port cleaning and replacement if needed",
      // price: "From $39",
    },
    {
      icon: Camera,
      issue: "Camera Issues",
      solution: "Camera module replacement and software fixes",
      // price: "From $69",
    },
    {
      icon: Speaker,
      issue: "No Sound",
      solution: "Speaker and audio component repair or replacement",
      // price: "From $49",
    },
    {
      icon: Wifi,
      issue: "Connectivity Problems",
      solution: "Network troubleshooting and antenna repair",
      // price: "From $59",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Book Service",
      description: "Call us or book online with your device details and preferred time",
    },
    {
      step: "2",
      title: "We Come to You",
      description: "Our technician arrives at your location with all necessary tools",
    },
    {
      step: "3",
      title: "Diagnosis",
      description: "Free diagnosis and upfront pricing before any work begins",
    },
    {
      step: "4",
      title: "Repair",
      description: "Professional repair using high-quality parts and tools",
    },
    {
      step: "5",
      title: "Testing",
      description: "Thorough testing to ensure everything works perfectly",
    },
    {
      step: "6",
      title: "Warranty",
      description: "Warranty provided on all repairs for your peace of mind",
    },
  ]
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <FloatingSocial />
      <WhatsAppFloat />

      {/* Hero Section */}
      <div id="emergency-repairs" style={{ position: 'relative', top: '-80px' }}></div>
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">🔧 Professional Repair Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Expert Device</span>
              <br />
              <span className="text-purple-600">Repair Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional onsite repair services for phones, laptops, and computers. We bring the expertise to your
              doorstep!
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Book Repair Now: 021 270 3663
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Repair Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive repair solutions for all your devices with onsite convenience
            </p>
          </div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow" id={
                service.title === "Mobile Phone Repairs"
                  ? "mobile-phone-repairs"
                  : service.title === "Mac Repairs"
                  ? "mac-repairs"
                  : service.title === "Windows Repairs"
                  ? "windows-repairs"
                  : undefined
              }>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <service.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Additional Services:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(4).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{service.priceRange}</div>
                          <div className="text-sm text-gray-600">Price Range</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{service.timeRange}</div>
                          <div className="text-sm text-gray-600">Repair Time</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">Warranty</div>
                          <div className="text-sm text-gray-600">Included</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Supported Brands:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.brands.map((brand, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {brand}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Book {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 lg:p-12 flex items-center justify-center">
                      <img
                        src={
                          service.title === "Mobile Phone Repairs"
                            ? "/images/mobile%20phone.webp"
                            : service.title === "Mac Repairs"
                            ? "/images/mackbook.webp"
                            : service.title === "Windows Repairs"
                            ? "/images/windwos.webp"
                            : "/images/placeholder.svg"
                        }
                        alt={service.title}
                        className="rounded-lg shadow-lg max-w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Add anchor targets for screen and battery replacements */}
          <div id="screen-replacements" style={{ position: 'relative', top: '-80px' }}></div>
          <div id="battery-replacements" style={{ position: 'relative', top: '-80px' }}></div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common <span className="text-purple-600">Device Issues</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We fix the most common device problems quickly and affordably
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <issue.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{issue.issue}</h3>
                  <p className="text-gray-600 mb-4">{issue.solution}</p>
                  {/* <div className="text-2xl font-bold text-blue-600 mb-4">{issue.price}</div> */}
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Fix This Issue
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div id="free-diagnosis" style={{ position: 'relative', top: '-80px' }}></div>
      <div id="warranty-claims" style={{ position: 'relative', top: '-80px' }}></div>
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Repair Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and convenient - here's how we fix your device
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div id="technical-support" style={{ position: 'relative', top: '-80px' }}></div>
      <section className="py-20 px-4 md:px-6 bg-blue-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="text-yellow-300">Repair Services?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="opacity-90">Most repairs completed in 30-60 minutes</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="opacity-90">Premium parts with warranty included</p>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="opacity-90">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Onsite Convenience</h3>
              <p className="opacity-90">We come to you - home, office, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Device Fixed Today?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - book your onsite repair service now and get back to what matters most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 021 270 3663
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Book Online Service
              <ArrowRight className="ml-2 h-5 w-5" />
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
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Book Service</li>
                <li>Pricing</li>
                <li>Warranty</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
              <li>021 270 3663</li>
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
