import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'



export const metadata: Metadata = {
  title: 'Ryan Wilson Developer',
  description: 'Ryan Wilson portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
