import Container from '../components/container'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Carousel from '../components/Carousel'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'






  if (typeof window !== "undefined") {
    // browser code

    function appHeight() {
        const doc = document.documentElement
        doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
      }
    
      window.addEventListener('resize', appHeight);
      appHeight();

  }


export default function FullWindow() {




    return (
    <>
      <Layout >
        <Head>
          <title>Full window test {CMS_NAME}</title>
        </Head>
        <div className="m-0">
        <div className="bg-red-900 w-screen flex overflow-hidden relative"
        
        style={{
            height: '100vh', /* Fallback for browsers that do not support Custom Properties */
            height: 'calc(var(--vh, 1vh) * 100)'

        }}
        
        >
<img
                  src="https://res.cloudinary.com/annaga/image/upload/v1636486533/ramy-keyframe_zdjnqu.jpg"
                  alt="This is a carousel slide"
                  key="fakekey"
                  className="block w-screen h-full object-cover"
                
                  
                />



</div></div>
        <Navbar />
        <Container>
         FULL WINDOW
        </Container>
      </Layout>
    </>
  )
}
