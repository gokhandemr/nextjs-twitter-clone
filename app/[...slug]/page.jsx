import { notFound } from 'next/navigation';
import { getPosts, getUsers } from '@/services/data';
import { cookies } from 'next/headers';

// aside components
import AgendaBox from '@/components/agenda-box';
import Details from '@/components/details';
import FollowBox from '@/components/follow-box';
// main components - lists
import SearchComponent from '@/components/search';
import PinnedLists from '@/components/pinned-lists';
// main components - profile page
import MainTop from '@/components/main-top';
import ProfilePageDetails from '@/components/profile-page-details';
import PostComponent from '@/components/post';
import ProfilePageNav from '@/components/profile-page-nav';
import MainForm from '@/components/form';
import Header from '@/components/header';

export async function generateMetadata({ params }) {
    const users = await getUsers()
    const userFiltered = users.filter(user => user["login"].username === params.slug[0])
    if (userFiltered.length <= 0) {
        notFound()
    } else if (params.slug[1] && params.slug[1] !== 'lists' && params.slug[1] !== 'status') {
        notFound()
    } else if (params.slug.length > 3) {
        notFound()
    }

    return {
        title: params.slug[1] === 'status'
            ?
            `X'te ${userFiltered[0].firstname}`
            :
            params.slug[1] === 'lists'
                ?
                `@${userFiltered[0].firstname} tarafından oluşturulan Listeler / X`
                :
                `${userFiltered[0].firstname} (@${userFiltered[0]["login"].username}) / X`
    }
}

async function page({ params }) {
    const [users, posts] = await Promise.all([getUsers(), getPosts()])
    const cookieStore = cookies()
    const userCookie = cookieStore.get('user')
    const userFiltered = users.filter(user => user["login"].username === params.slug[0])

    return (
        <>
            <Header userCookie={userCookie} users={users} />
            <main style={{ padding: `${params.slug[1] === 'status' && '0 16px'}` }}>
                {
                    params.slug[1] === 'status'
                        ?
                        <>
                            <MainTop isStatus={'isStatus'} />
                            <PostComponent posts={posts} users={users} isStatus={params.slug[2]} />
                            <MainForm isStatus={'isStatus'} />
                        </>
                        :
                        params.slug[1] === 'lists'
                            ?
                            <>
                                <SearchComponent isMain={'isMain'} isLists={'isLists'} />
                                <PinnedLists isOther={userFiltered[0]} params={params.slug[0]} userCookie={userCookie && userCookie.value} />
                            </>
                            :
                            <>
                                <MainTop name={userFiltered[0].firstname} isUserPage={'isUserPage'} />
                                <ProfilePageDetails {...userFiltered[0]} userCookie={userCookie && userCookie.value} />
                                <ProfilePageNav />
                                <PostComponent posts={posts} users={users} profilePage={userFiltered[0]} />
                            </>
                }
            </main>
            <aside>
                {
                    params.slug[1] === 'status'
                        ?
                        <>
                            <SearchComponent />
                            <AgendaBox />
                            <Details />

                        </>
                        :
                        params.slug[1] === 'lists'
                            ?
                            <>
                                <SearchComponent />
                                <AgendaBox />
                                <FollowBox />
                                <Details />
                            </>
                            :
                            <>
                                <SearchComponent />
                                <FollowBox />
                                <AgendaBox />
                                <Details />
                            </>
                }
            </aside>
        </>
    )
}

export default page