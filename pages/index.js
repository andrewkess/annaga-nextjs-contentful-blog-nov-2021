import Container from '../components/container'
import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
//import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
//import { CMS_NAME } from '../lib/constants'




export default function Index({ preview, allPosts }) {
//  const heroPost = allPosts[0]
  //const morePosts = allPosts.slice(1)
  const morePosts = allPosts
  
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Annaga productions</title>
        </Head>

        <Carousel />
        <Navbar />
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
