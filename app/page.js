// services
import { getPosts, getUsers } from '@/services/data'

// components
import MainTop from '@/components/main-top'
import MainForm from '@/components/form/index'
import PostComponent from '@/components/post'

async function MainComponent() {
  const [{ posts }, { users }] = await Promise.all([getPosts(), getUsers()])

  return (
    <>
      <MainTop />
      <MainForm />
      <PostComponent posts={posts} users={users} />
    </>
  )
}

export default MainComponent