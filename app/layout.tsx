import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://fonefixer.co.nz'),
  icons: '/images/logo_bg.png',
  title: 'Fone Fixer | Mobile, Laptop & Device Repair NZ',
  description: 'Fone Fixer offers fast, reliable mobile, laptop, and device repair services in New Zealand. Book your repair online and get expert service.',
  generator: 'Digitroncx',
  keywords: [
    'fone fixer',
    'mobile repair',
    'laptop repair',
    'device repair',
    'phone repair',
    'screen replacement',
    'battery replacement',
    'New Zealand',
    'Auckland',
    'Digitroncx',
    'booking',
    'electronics service'
  ],
  authors: [{ name: 'Fone Fixer', url: 'https://fonefixer.co.nz' }],
  openGraph: {
    title: 'Fone Fixer | Mobile, Laptop & Device Repair NZ',
    description: 'Book your device repair with Fone Fixer. Fast, reliable service for mobiles, laptops, and more in New Zealand.',
    url: 'https://fonefixer.co.nz',
    siteName: 'Fone Fixer',
    images: [
      {
        url: '/images/fone-fixer-logo.png',
        width: 600,
        height: 315,
        alt: 'Fone Fixer Logo'
      }
    ],
    locale: 'en_NZ',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fone Fixer | Mobile, Laptop & Device Repair NZ',
    description: 'Book your device repair with Fone Fixer. Fast, reliable service for mobiles, laptops, and more in New Zealand.',
    site: '@fonefixernz',
    images: ['/images/fone-fixer-logo.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
