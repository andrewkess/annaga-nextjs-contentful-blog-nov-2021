// import HeroPost from '../components/hero-post'
//import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Layout from '../components/layout'
import { useEffect } from 'react'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
//import { CMS_NAME } from '../lib/constants'
import Container from '../components/container'
import MoreStories from '../components/more-stories'



export default function Index({ preview, allPosts }) {
//  const heroPost = allPosts[0]
  //const morePosts = allPosts.slice(1)

  useEffect(() => {

//hack to calculate the actual browser window height on mobile and save that value in the 'vh' variable which can be used later in CSS
if (typeof window !== "undefined") {
  // browser code

  function appHeight() {
      const doc = document.documentElement
      doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
    }
  
    window.addEventListener('resize', appHeight);
    appHeight();

}
  }, [])


  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Annaga productions</title>
        </Head>

        <Carousel />
        <Navbar />
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
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
