"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import FloatingSocial from "@/components/floating-social"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function BlogsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <FloatingSocial />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              📚 Tech Tips & Repair Guides
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Expert Tips</span> &<br />
              <span className="text-purple-600">Repair Guides</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest tech tips, repair guides, and device maintenance advice from Auckland's
              phone repair experts.
            </p>
          </div>
        </div>
      </section>

      {/* Soro Blog Embed Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div id="soro-blog"></div>
          <Script
            src="https://app.trysoro.com/api/embed/096427f8-1a69-4ed6-ada6-06c901f84a96"
            strategy="lazyOnload"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Tech Tips</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest repair guides, device tips, and exclusive offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
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
                Auckland’s trusted phone & tech repair store. Visit us in-store for fast, professional repairs. Onsite repair available for selected services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Topics</h4>
              <ul className="space-y-2 text-gray-300">
                <li>iPhone Repair Tips</li>
                <li>Mac Troubleshooting</li>
                <li>Device Protection</li>
                <li>Repair Costs</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Repair Guides</li>
                <li>Prevention Tips</li>
                <li>Cost Guides</li>
                <li>Tech News</li>
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
