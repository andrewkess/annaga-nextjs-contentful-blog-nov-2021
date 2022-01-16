import JobsBar from '../components/jobs'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function JobsPage() {

    return (
    <>
      <Layout>
        <Head>
          <title>Jobs · Annaga Productions</title>
        </Head>
        <Navbar />
          <JobsBar />
      </Layout>
    </>
  )
}