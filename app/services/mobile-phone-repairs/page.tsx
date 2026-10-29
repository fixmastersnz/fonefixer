"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import {
  Smartphone,
  Clock,
  Shield,
  DollarSign,
  CheckCircle,
  Phone,
  CalendarIcon,
  ArrowRight,
  Zap,
  Battery,
  Camera,
  Volume2,
  Droplets,
  Cpu,
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

export default function MobilePhoneRepairsPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({ serviceType: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

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
        setSubmitMessage(result.message || "Booking request submitted successfully!")
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

  const repairServices = [
    { icon: Smartphone, title: "Screen & Display Replacement", desc: "Repair cracked, damaged or malfunctioning phone displays." },
    { icon: Battery, title: "Battery Replacement", desc: "Resolve battery issues and help restore reliable battery performance." },
    { icon: Zap, title: "Charging Port Repair", desc: "Get assistance with phones that charge intermittently or fail to connect properly." },
    { icon: Camera, title: "Camera Repair", desc: "Address camera problems affecting photos and videos." },
    { icon: Volume2, title: "Speaker & Microphone Fixes", desc: "Get help with sound, call audio and microphone issues." },
    { icon: Droplets, title: "Water Damage Repair", desc: "Have your device assessed following accidental liquid exposure." },
    { icon: Cpu, title: "Software Troubleshooting", desc: "Get assistance with common software faults and operating issues." },
  ]

  const supportedBrands = ["iPhone", "Samsung", "Google", "Huawei", "OnePlus", "Xiaomi"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <FloatingSocial />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-12 w-full">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-left">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              📱 Fast & Reliable Smartphone Repairs
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mobile Phone Repairs <span className="text-blue-600">in Auckland</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Looking for reliable mobile phone repairs in Auckland? Fone Fixer provides professional smartphone repair services for popular brands and models. Whether you have a cracked screen, weak battery, or charging problem, we have the right solution for you.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
              <p className="text-blue-900 font-semibold text-lg">
                Affordable Pricing: Repairs range from <span className="text-blue-700 font-bold">NZ$49 to NZ$199</span> depending on issue & model.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <a href="tel:0212703663">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 021 270 3663
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent">
                <a href="#cta">
                  Book Repair Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/mobile phone.webp"
              alt="Mobile Phone Repairs Auckland"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Complete Repair Services Grid */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="text-blue-600">Mobile Phone Repair Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A damaged phone can interrupt your work, communication and everyday activities. Fone Fixer offers a comprehensive range of repair services to address common smartphone problems quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smartphone Brands <span className="text-blue-600">We Support</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Fone Fixer provides mobile phone repair services for a selection of popular smartphone brands:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {supportedBrands.map((brand, i) => (
              <div key={i} className="bg-white border border-gray-200 px-8 py-4 rounded-xl shadow-sm text-lg font-bold text-gray-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                {brand}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            *Repair availability depends on your particular model, fault, and parts availability. Contact us to confirm.
          </p>
        </div>
      </section>

      {/* Why Choose Fone Fixer & Pricing Highlights */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-blue-200 bg-blue-50/50">
              <CardContent className="p-0">
                <DollarSign className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Our typical repair price range is <strong>NZ$49–NZ$199</strong>, depending on the required repair and smartphone model. Clear, upfront pricing guidance with no surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-purple-200 bg-purple-50/50">
              <CardContent className="p-0">
                <Clock className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast 30–60 Min Turnaround</h3>
                <p className="text-gray-600 text-sm">
                  Many standard repairs can be completed in approximately <strong>30–60 minutes</strong>. Complex issues are handled promptly with clear timeline estimates.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-green-200 bg-green-50/50">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
                <p className="text-gray-600 text-sm">
                  All repair services come with warranty coverage for peace of mind. Contact our team to confirm applicable warranty terms for your repair.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form CTA */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600" id="cta">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Book Your Mobile Phone Repair Today</h2>
            <p className="text-xl mb-8">
              Don&apos;t let a damaged smartphone disrupt your day. Contact Fone Fixer to check repair availability and arrange your service!
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
                        <SelectItem value="oneplus">OnePlus</SelectItem>
                        <SelectItem value="xiaomi">Xiaomi</SelectItem>
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
                  <Textarea id="issueDescription" name="issueDescription" placeholder="e.g., Cracked screen, battery draining fast" required />
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
                Auckland’s trusted phone & tech repair store. Visit us in-store for fast, professional repairs. Onsite repair available for selected services.
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
                <li><Link href="/services/mobile-phone-repairs">Mobile Phone Repairs</Link></li>
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
