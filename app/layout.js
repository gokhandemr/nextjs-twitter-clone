import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anasayfa / X | Next.js Twitter Clone',
  description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

export default function RootLayout({ children }) {

  return (
    <html lang="tr">
      <body className={`${inter.className}`}>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
