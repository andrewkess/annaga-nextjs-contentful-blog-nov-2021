import ContactBar from '../components/contact'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

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
