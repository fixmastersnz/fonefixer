"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const phoneNumber = "64274152897"
  const message = "Hi! I'd like to book a phone repair service."

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 top-[62%] -translate-y-1/2 z-50 flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  )
}
