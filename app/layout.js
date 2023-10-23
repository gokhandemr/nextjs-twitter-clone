import './globals.css'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { getUsers } from '@/services/data'

// components
import Header from '@/components/header'
import LoginPage from '@/components/login-page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anasayfa / X | Next.js Twitter Clone',
  description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

export default async function RootLayout({ children }) {
  const users = await getUsers()

  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')

  return (
    <html lang="tr">
      <body className={`${inter.className}`}>
        <div className='container'>
          {userCookie
            ?
            <>
              <Header userCookie={userCookie} users={users} />
              {children}
            </>
            :
            <LoginPage />
          }

        </div>
      </body>
    </html>
  )
}