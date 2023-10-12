import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '이힛차트',
  description: '올바른 배움을 주는 이힛차트',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
