import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Genius',
  description: 'The Best AI Tool for SaaS (Software as a Service)',
  openGraph: {
    title: 'Genius',
    description: 'The Best AI Tool for SaaS (Software as a Service)',
    images: '/cover.png'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
