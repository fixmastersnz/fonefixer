"use client"

import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
      <Button size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg" asChild>
        <a
          href="https://www.facebook.com/profile.php?id=61573843852574"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </Button>

      <Button
        size="icon"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg"
        asChild
      >
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
      </Button>

      <Button size="icon" className="bg-black hover:bg-gray-800 rounded-full shadow-lg" asChild>
        <a
          href="https://tiktok.com/@fone.fixer.nz%3F_t%3DZS-8uRvLOFtaR0%26_r%3D1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
      </Button>

      <Button size="icon" className="bg-white hover:bg-gray-100 rounded-full shadow-lg border border-gray-200" asChild>
        <a
          href="https://www.google.com/search?sca_esv=6d2215782c6bedf0&rlz=1CDGOYI_enNZ1150NZ1150&hl=en-GB&kgmid=%2Fg%2F11vyxm16w7&q=FoneFixer&shndl=30&shem=lsptbc&source=sh%2Fx%2Floc%2Fact%2Fm1%2F3&kgs=90d51e79a31b9546"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </a>
      </Button>
    </div>
  )
}
