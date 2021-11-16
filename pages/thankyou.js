import ThanksBar from '../components/thanks'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

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


export default function ThanksPage() {

    return (
    <>
      <Layout>
        <Head>
          <title>Thanks for your message {CMS_NAME}</title>
        </Head>
        <Navbar />
          <ThanksBar />
      </Layout>
    </>
  )
}