import AgendaBox from '@/components/agenda-box'
import Details from '@/components/details'
import FollowBox from '@/components/follow-box'
import SearchComponent from '@/components/search'

export const metadata = {
    title: 'Keşfet / X | Next.js Twitter Clone',
    description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}


function ExplorePage() {
    return (
        <>
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