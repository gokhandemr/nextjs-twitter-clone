import './globals.css'
import LeftBar from '@/components/leftbar'
import RightBar from '@/components/rightbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Twitter Clone',
  description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className='container'>
          <LeftBar />
          <main>
            {children}
          </main>
          <RightBar />
        </div>
      </body>
    </html>
  )
}
