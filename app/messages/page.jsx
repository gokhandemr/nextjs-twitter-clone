import MessagesComponent from '@/components/messages'
import Header from '@/components/header'
import { getUsers } from '@/services/data'
import { cookies } from 'next/headers'
export const metadata = {
    title: 'Mesajlar / X | Next.js Twitter Clone',
    description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

async function MessagesPage() {
    const users = await getUsers()
    const cookieStore = cookies()
    const userCookie = cookieStore.get('user')
    return (
        <>
            <Header userCookie={userCookie} users={users} />
            <main style={{ width: '980px', marginRight: '0px' }}>
                <MessagesComponent />
            </main>
        </>

    )
}

export default MessagesPage