"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import {
  Monitor,
  Clock,
  Shield,
  DollarSign,
  CheckCircle,
  Phone,
  CalendarIcon,
  ArrowRight,
  Cpu,
  HardDisk,
  ShieldAlert,
  Wrench,
  Laptop,
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

export default function WindowsRepairsPage() {
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
      deviceBrand: "Windows PC / Laptop",
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

  const windowsServices = [
    { icon: Monitor, title: "Screen Replacement", desc: "Repair cracked, damaged or malfunctioning laptop displays." },
    { icon: Cpu, title: "Hardware Upgrades", desc: "Improve compatible computers with suitable hardware upgrades." },
    { icon: Wrench, title: "Software Troubleshooting", desc: "Diagnose and resolve common Windows software issues and errors." },
    { icon: ShieldAlert, title: "Virus Removal", desc: "Get assistance removing malware and unwanted software safely." },
    { icon: HardDisk, title: "Data Recovery", desc: "Explore options for recovering accessible data from a faulty or damaged storage device." },
    { icon: Laptop, title: "Performance Optimisation", desc: "Address slow performance, clean up junk and improve system responsiveness." },
  ]

  const supportedBrands = ["Dell", "HP", "Lenovo", "ASUS", "Acer", "MSI"]

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
              💻 Professional Windows Laptop & PC Repair
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Windows Repairs <span className="text-blue-600">Auckland</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Looking for reliable Windows repairs in Auckland? Fone Fixer provides professional laptop and PC repair services for hardware and software problems. Whether your computer has a cracked screen, runs slowly, or has a virus, we can help.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
              <p className="text-blue-900 font-semibold text-lg">
                Affordable Pricing: Repairs range from <span className="text-blue-700 font-bold">NZ$69 to NZ$249</span> depending on model & issue.
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
                  Book Windows Repair
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[350px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/windwos.webp"
              alt="Windows Repairs Auckland"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Complete Windows Services Grid */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="text-blue-600">Windows Repair Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A faulty computer can interrupt your work, studies and everyday activities. Fone Fixer offers a range of repair and maintenance services to help restore your Windows laptop or PC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {windowsServices.map((service, index) => (
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
            Laptop & PC Brands <span className="text-blue-600">We Support</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Fone Fixer provides repair services for a selection of popular laptop and computer brands:
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
            *Repair availability depends on your computer model, the fault and parts availability. Contact us to confirm.
          </p>
        </div>
      </section>

      {/* Why Choose Fone Fixer for Windows Repairs */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-blue-200 bg-blue-50/50">
              <CardContent className="p-0">
                <DollarSign className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Typical repair price range is <strong>NZ$69–NZ$249</strong>, depending on the repair required and your device. Clear pricing guidance with no surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-purple-200 bg-purple-50/50">
              <CardContent className="p-0">
                <Clock className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">45–90 Min Turnaround</h3>
                <p className="text-gray-600 text-sm">
                  Many standard repairs take approximately <strong>45–90 minutes</strong>. Complex hardware faults or data recovery requests may require additional time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-green-200 bg-green-50/50">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
                <p className="text-gray-600 text-sm">
                  Warranty is included with our repair services. Contact Fone Fixer to confirm applicable warranty terms and coverage for your specific repair.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Book Windows Repairs Today</h2>
            <p className="text-xl mb-8">
              Don&apos;t let a faulty computer slow you down. Contact Fone Fixer to discuss your laptop or PC problem and arrange your service!
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Book Your Windows Repair Service</h3>
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
                    <Label htmlFor="deviceModel">Laptop/PC Model</Label>
                    <Input id="deviceModel" name="deviceModel" placeholder="e.g., Lenovo ThinkPad / HP Pavilion" required />
                  </div>
                  <div>
                    <Label htmlFor="serviceTypeSelect">Service Type</Label>
                    <Select name="serviceTypeSelect" required onValueChange={(val) => setFormData({ ...formData, serviceType: val })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-store">Visit Store (Drop off)</SelectItem>
                        <SelectItem value="courier">Courier Service</SelectItem>
                        <SelectItem value="home-service">Home Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="issueDescription">Describe the issue?</Label>
                  <Textarea id="issueDescription" name="issueDescription" placeholder="e.g., Cracked screen, slow performance, virus issue" required />
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

                <div>
                  <Label htmlFor="address">Service Address</Label>
                  <Textarea id="address" name="address" placeholder="Enter your full address" rows={3} required />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Book Windows Repair Service"}
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
                Auckland’s trusted phone & tech repair store. Visit us in-store for fast, professional repairs.
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
                <li><Link href="/services/mac-repairs">Mac Repairs</Link></li>
                <li><Link href="/services/windows-repairs">Windows Repairs</Link></li>
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
