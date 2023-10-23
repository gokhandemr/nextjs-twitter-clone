// services and Cookie
import { getPosts, getUsers } from '@/services/data'
import { cookies } from 'next/headers'
// components header
import Header from '@/components/header'
// components main
import MainTop from '@/components/main-top'
import MainForm from '@/components/form/index'
import PostComponent from '@/components/post'
// components aside
import SearchComponent from '@/components/search/index'
import SubscribeBox from '@/components/subscribe-box'
import AgendaBox from '@/components/agenda-box'
import FollowBox from '@/components/follow-box'
import Details from '@/components/details'
import LoginPage from '@/components/login-page'


async function MainComponent() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()])

  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')

  return (
    <>
      {userCookie
        ?
        <>
          <Header userCookie={userCookie} users={users} />
          <main>
            <MainTop />
            <MainForm />
            <PostComponent posts={posts} users={users} />
          </main>
          <aside>
            <SearchComponent />
            <SubscribeBox />
            <AgendaBox />
            <FollowBox />
            <Details />
          </aside>
        </>
        :
        <LoginPage />
      }
    </>
  )
}

export default MainComponent