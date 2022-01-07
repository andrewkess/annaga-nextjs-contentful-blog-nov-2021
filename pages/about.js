import AboutBar from '../components/team-v2'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function AboutPage() {

    return (
    <>
      <Layout>
        <Head>
          <title>About Annaga Productions</title>
        </Head>
        <Navbar />
          <AboutBar />
      </Layout>
    </>
  )
}
