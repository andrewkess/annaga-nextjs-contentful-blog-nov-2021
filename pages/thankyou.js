import ThanksBar from '../components/thanks'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

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
