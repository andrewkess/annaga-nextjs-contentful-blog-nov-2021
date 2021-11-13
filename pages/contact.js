import ContactBar from '../components/contact'
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


export default function Contact() {

    return (
    <>
      <Layout>
        <Head>
          <title>Contact with {CMS_NAME}</title>
        </Head>
        <Navbar />
          <ContactBar />
      </Layout>
    </>
  )
}