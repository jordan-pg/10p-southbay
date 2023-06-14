import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '10th Planet South Bay',
  description: '10th Planet South Bay Jiu-jitsu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: 0}} className={inter.className}>{children}</body>
    </html>
  )
}
