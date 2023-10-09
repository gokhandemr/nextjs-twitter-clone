// services
import { getPosts, getUsers } from '@/services/data'

// components main
import Header from '@/components/header'
import LoginPage from '@/components/login-page'
import MainTop from '@/components/main-top'
import MainForm from '@/components/form/index'
import PostComponent from '@/components/post'

// components aside
import SearchComponent from '@/components/search/index'
import SubscribeBox from '@/components/subscribe-box'
import AgendaBox from '@/components/agenda-box'
import FollowBox from '@/components/follow-box'
import Details from '@/components/details'
import { cookies } from 'next/headers'


async function MainComponent() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()])
  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')
  const usersFiltered = userCookie && users.filter(user => user["login"].uuid === userCookie.value)
  return (
    <>
      {
        usersFiltered
          ?
          <>
            <Header user={usersFiltered && usersFiltered} />
            <>
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
          </>
          :
          <LoginPage />
      }
    </>
  )
}

export default MainComponent