"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import {
  Smartphone,
  Clock,
  Shield,
  DollarSign,
  MapPin,
  Star,
  CheckCircle,
  Phone,
  CalendarIcon,
  ArrowRight,
  Zap,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import Navigation from "@/components/navigation"
import FloatingSocial from "@/components/floating-social"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  const [date, setDate] = useState<Date>()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ serviceType: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const form = e.currentTarget
    const formDataObj = new FormData(form)

    const emailData = {
      firstName: formDataObj.get("firstName") as string,
      lastName: formDataObj.get("lastName") as string,
      phone: formDataObj.get("phone") as string,
      email: formDataObj.get("email") as string,
      deviceBrand: formDataObj.get("deviceBrand") as string,
      deviceModel: formDataObj.get("deviceModel") as string,
      issueDescription: formDataObj.get("issueDescription") as string,
      serviceDate: date ? date.toISOString().split("T")[0] : "",
      serviceType: formData.serviceType,
      address: formDataObj.get("address") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage(result.message)
        form.reset()
        setDate(undefined)
        setFormData({ serviceType: "" })
      } else {
        setSubmitMessage(result.error || "Failed to send booking request")
      }
    } catch {
      setSubmitMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      image: "/images/mobile phone.webp",
      title: "Mobile Phone Repairs",
      description: "Screen replacements, battery fixes, charging port repairs, and more",
      href: "/services#mobile-phone-repairs",
    },
    {
      image: "/images/mackbook.webp",
      title: "Mac Repairs",
      description: "MacBook screen repairs, keyboard replacements, logic board fixes",
      href: "/services#mac-repairs",
    },
    {
      image: "/images/windwos.webp",
      title: "Windows Repairs",
      description: "Laptop screen repairs, hardware upgrades, software troubleshooting",
      href: "/services#windows-repairs",
    },
  ]

  const features = [
    { icon: MapPin, title: "Onsite Service", description: "We come to you - home, office, or anywhere in Auckland" },
    { icon: Clock, title: "Fast Turnaround", description: "Most repairs completed within 30-60 minutes" },
    { icon: Shield, title: "Quality Guarantee", description: "High-quality parts with warranty on all repairs" },
    { icon: DollarSign, title: "Affordable Pricing", description: "Unbeatable prices without compromising on quality" },
  ]

  const testimonials = [
    {
      name: "Samuel Tu'itahi",
      rating: 5,
      text: "I'm never going anywhere else! UK was super friendly and fixed my phone on the spot in under 10 minutes. He used genuine parts and kept me in the loop the whole time. Highly recommend supporting this awesome local business.",
    },
    {
      name: "Louie Edillor",
      rating: 5,
      text: "UK is very professional and he knows what he is doing. His rates are affordable as well. Fone Fixer will be our go-to from now on.",
    },
    {
      name: "Ruma Miah",
      rating: 5,
      text: "Fantastic experience with FoneFixer. My phone screen was completely shattered and they repaired it quickly and professionally. Fast turnaround, fair prices, and top-quality service.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <FloatingSocial />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-12 w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center w-full min-h-[400px]">
          <div className="w-full md:w-1/2 text-left md:pr-12 z-10 max-w-3xl md:max-w-none mx-auto">
            <div className={cn("transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🔧 Auckland Device Repair Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-600">Fast & Reliable</span>
                <br />
                Device Repairs
                <br />
                <span className="text-purple-600">Done Right, Every Time</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl">
                Professional phone, tablet, and computer repairs in Auckland. Contact our experienced team for fast service, clear advice, and an upfront quote.
              </p>
              <a
                href="https://share.google/MZ5HZLCU25QechYSF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-6 group"
              >
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-4 group-hover:underline">20/170 Wairau Road, Wairau Valley, Auckland 0627</span>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <a href="tel:0212703663">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 021 270 3663
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent"
              >
                <a href="#cta">
                  Book Online Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-[500px] relative flex-shrink-0">
            <Image
              src="/images/ourstory.jpg"
              alt="Fone Fixer Workshop"
              fill
              priority
              className="object-cover rounded-md object-center md:object-right"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 px-4 md:px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have a <span className="text-blue-600">Broken Screen?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don&apos;t let a damaged device slow you down. We fix it fast, right where you are!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cracked Screen?</h3>
                <p className="text-gray-600">We replace screens on-site with premium quality parts</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Battery Dead?</h3>
                <p className="text-gray-600">Quick battery replacements to get you powered up</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Software Issues?</h3>
                <p className="text-gray-600">Expert troubleshooting and software repairs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Expert Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair services for all your devices, delivered right to your doorstep
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-end items-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Fone Fixer?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Fone Fixer, we offer affordable device repair solutions without compromising quality. Our certified technicians provide top-notch repairs backed by warranty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600">No hidden fees, no surprises - just honest, affordable pricing</p>
          </div>
          <div className="flex justify-center">
            <Card className="border-2 border-blue-400 hover:border-blue-600 transition-colors max-w-md w-full">
              <CardContent className="p-8 text-center">
                <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Repairs</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Starting From $39 NZD</div>
                <ul className="text-left space-y-2 mb-6">
                  {["Same-Day Service", "Certified Technicians", "No Fix, No Fee", "Quality Parts & Warranty"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Hear directly from our satisfied local customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="font-semibold text-gray-900">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form CTA */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600" id="cta">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Fix Your Device?</h2>
            <p className="text-xl mb-8">
              Book your onsite repair service now and get your device fixed at your convenience!
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Book Your Repair Service</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {submitMessage}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="027 XXX XXXX" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deviceBrand">Device Brand</Label>
                    <Select name="deviceBrand" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="huawei">Huawei</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="deviceModel">Device Model</Label>
                    <Input id="deviceModel" name="deviceModel" placeholder="e.g., iPhone 14 Pro" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="issueDescription">Describe the issue?</Label>
                  <Textarea id="issueDescription" name="issueDescription" placeholder="Provide a brief description of the issue" required />
                </div>

                <div>
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="mb-6">
                  <Label className="block text-sm font-medium text-gray-700 mb-3">Service Type *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: "in-store", label: "Visit Store", desc: "Drop off at our location" },
                      { id: "courier", label: "Courier Service", desc: "Send your device to us" },
                      { id: "home-service", label: "Home Service", desc: "We come to you" },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                        <input
                          type="radio"
                          name="serviceType"
                          value={item.id}
                          checked={formData.serviceType === item.id}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Service Address</Label>
                  <Textarea id="address" name="address" placeholder="Enter your full address" rows={3} required />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Book My Repair Service"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-300">Devices Repaired</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30min</div>
              <div className="text-gray-300">Average Repair Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/fonefixer_logo.png" alt="Fone Fixer Logo" width={40} height={40} className="rounded-full" />
                <h3 className="text-2xl font-bold">Fone Fixer</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Auckland&apos;s premier onsite phone repair service. Fast, reliable, and affordable.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:0212703663">
                    <Phone className="h-4 w-4 mr-2" />
                    021 270 3663
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services#mobile-phone-repairs">Mobile Phone Repairs</Link></li>
                <li><Link href="/services#mac-repairs">Mac Repairs</Link></li>
                <li><Link href="/services#windows-repairs">Windows Repairs</Link></li>
                <li><Link href="/services#screen-replacements">Screen Replacements</Link></li>
                <li><Link href="/services#battery-replacements">Battery Replacements</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Auckland CBD</li>
                <li>North Shore</li>
                <li>West Auckland</li>
                <li>South Auckland</li>
                <li>East Auckland</li>
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
            <p>
              Fone Fixer All Rights Reserved © {new Date().getFullYear()} | Powered by{" "}
              <a href="https://www.digitroncx.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">
                DigitronCX
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
