import AgendaBox from '@/components/agenda-box'
import Details from '@/components/details'
import FollowBox from '@/components/follow-box'
import SearchComponent from '@/components/search'
import Header from '@/components/header'
import { getUsers } from '@/services/data'
import { cookies } from 'next/headers'

export const metadata = {
    title: 'Keşfet / X | Next.js Twitter Clone',
    description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

async function ExplorePage() {
    const users = await getUsers()
    const cookieStore = cookies()
    const userCookie = cookieStore.get('user')
    return (
        <>
            <Header userCookie={userCookie} users={users} />
            <main>
                <SearchComponent isMain={'isMain'} />
                <AgendaBox isMain={'isMain'} />
            </main>
            <aside>
                <FollowBox />
                <Details />
            </aside>
        </>
    )
}

export default ExplorePage