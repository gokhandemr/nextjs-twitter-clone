// services
import { getPosts, getUsers } from '@/services/data'

// components
import MainTop from '@/components/main-top'
import MainForm from '@/components/form/index'
import PostComponent from '@/components/post'
import HomePageRightBar from '@/components/home-page-right-bar'

async function MainComponent() {
  const [{ posts }, { users }] = await Promise.all([getPosts(), getUsers()])

  return (
    <>
      <main>
        <MainTop />
        <MainForm />
        <PostComponent posts={posts} users={users} />
      </main>
      <HomePageRightBar />
    </>
  )
}

export default MainComponent