"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  Smartphone,
  Laptop,
  Shield,
  Zap,
  Wrench,
  TrendingUp,
} from "lucide-react"
import Navigation from "@/components/navigation"
import FloatingSocial from "@/components/floating-social"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function BlogsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your iPhone Battery Needs Replacement",
      excerpt: "Learn the warning signs that indicate your iPhone battery is failing and how to extend its lifespan.",
      category: "iPhone Tips",
      author: "Alex Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 2,
      title: "MacBook Screen Flickering: Causes and Solutions",
      excerpt: "Troubleshoot common MacBook screen issues and learn when professional repair is needed.",
      category: "Mac Repair",
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 3,
      title: "How to Protect Your Phone from Water Damage",
      excerpt: "Essential tips to prevent water damage and what to do if your phone gets wet.",
      category: "Prevention Tips",
      author: "Mike Wilson",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 4,
      title: "Android vs iPhone: Repair Cost Comparison",
      excerpt: "Compare repair costs between Android and iPhone devices to make informed decisions.",
      category: "Cost Guide",
      author: "Alex Johnson",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 5,
      title: "DIY vs Professional Phone Repair: What You Need to Know",
      excerpt: "When to attempt DIY repairs and when to call the professionals for your device.",
      category: "Repair Guide",
      author: "Sarah Chen",
      date: "2024-01-05",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 6,
      title: "Windows Laptop Running Slow? Here's How to Fix It",
      excerpt: "Simple steps to speed up your Windows laptop and improve performance.",
      category: "Windows Tips",
      author: "Mike Wilson",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  const categories = [
    { name: "All", count: blogPosts.length, icon: TrendingUp },
    { name: "iPhone Tips", count: 2, icon: Smartphone },
    { name: "Mac Repair", count: 1, icon: Laptop },
    { name: "Prevention Tips", count: 1, icon: Shield },
    { name: "Cost Guide", count: 1, icon: Zap },
    { name: "Repair Guide", count: 1, icon: Wrench },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">📚 Tech Tips & Repair Guides</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Expert Tips</span> &<br />
              <span className="text-purple-600">Repair Guides</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest tech tips, repair guides, and device maintenance advice from Auckland's
              phone repair experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 md:px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Featured</span> Articles
              </h2>
              <p className="text-xl text-gray-600">Our most popular and helpful repair guides</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === "All" ? "Latest" : selectedCategory}{" "}
              <span className="text-purple-600">Articles</span>
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No articles found matching your search.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
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
