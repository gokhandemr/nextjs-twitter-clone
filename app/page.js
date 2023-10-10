// services and Cookie
import { getPosts, getUsers } from '@/services/data'

// components main
import Header from '@/components/header'
import MainTop from '@/components/main-top'
import MainForm from '@/components/form/index'
import PostComponent from '@/components/post'

// components aside
import SearchComponent from '@/components/search/index'
import SubscribeBox from '@/components/subscribe-box'
import AgendaBox from '@/components/agenda-box'
import FollowBox from '@/components/follow-box'
import Details from '@/components/details'


async function MainComponent() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()])

  return (
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
  )
}

export default MainComponent