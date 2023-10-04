import MainTop from "@/components/main-top"
// aside
import AgendaBox from "@/components/agenda-box"
import Details from "@/components/details"
import FollowBox from "@/components/follow-box"
import SearchComponent from "@/components/search"

export const metadata = {
    title: 'Bildirimler / X | Next.js Twitter Clone',
    description: 'Next.js kullanarak hazırladığım twitter clone uygulaması',
}

function NotificationsPage() {
    return (
        <>
            <main>
                <MainTop isNP={'isNP'} isMain={'isMain'} />
                <div style={{ width: '336px', margin: '40px auto' }}>
                    <h3 style={{ fontSize: '31px', marginBottom: '10px' }}>Burada görecek bir şey yok. Henüz...</h3>
                    <p style={{ color: '#777' }}>Beğeniler, yeniden gönderiler ve çok daha fazlası burada gerçekleşir.</p>
                </div>
            </main>
            <aside>
                <SearchComponent />
                <AgendaBox />
                <FollowBox />
                <Details />
            </aside>
        </>
    )
}

export default NotificationsPage
