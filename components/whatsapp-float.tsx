"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const phoneNumber = "64274152897"
  const message = "Hi! I'd like to book a phone repair service."

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg animate-pulse" asChild>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <MessageCircle className="h-6 w-6 mr-2" />
          WhatsApp
        </a>
      </Button>
    </div>
  )
}
