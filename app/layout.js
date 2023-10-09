import './globals.css'
import Header from '@/components/header'
import LoginPage from '@/components/login-page'
import { getUsers } from '@/services/data'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anasayfa / X | Next.js Twitter Clone',
  description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

export default async function RootLayout({ children }) {
  
  const users = await getUsers()
  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')
  const usersFiltered = userCookie && users.filter(user => user["login"].uuid === userCookie.value)


  return (
    <html lang="tr">
      <body className={`${inter.className}`}>
        <div className='container'>
          {
            usersFiltered
              ?
              <>
                <Header user={usersFiltered && usersFiltered} />
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
