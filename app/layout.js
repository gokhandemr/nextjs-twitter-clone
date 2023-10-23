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
  const cookieStore = await cookies()
  const userCookie = await cookieStore.get('user')
  const usersFiltered = await users.filter(user => userCookie && user["login"].uuid === userCookie.value)

  return (
    <html lang="tr">
      <body className={`${inter.className}`}>
        <div className='container'>
          {usersFiltered.length <= 0
            ?
            <LoginPage />
            :
            <>
              <Header user={usersFiltered} />
              {children}
            </>
          }

        </div>
      </body>
    </html>
  )
}