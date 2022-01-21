// import HeroPost from '../components/hero-post'
//import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Navbar from '../components/navbar'
// import Carousel from '../components/Carousel'
import { getAllPostsForHome } from '../lib/api'
//import { CMS_NAME } from '../lib/constants'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import IntroVideo from '../components/intro-video'

export default function Index({ preview, allPosts }) {
//  const heroPost = allPosts[0]
  //const morePosts = allPosts.slice(1)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Annaga Productions</title>
        </Head>
        {/* <Carousel /> */}
        <IntroVideo />
        <Navbar />
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          <hr className="border-accent-2 mt-12" />
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