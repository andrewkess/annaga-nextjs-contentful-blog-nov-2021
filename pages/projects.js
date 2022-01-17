import ProjectBar from '../components/projects'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function ProjectPage() {

    return (
    <>
      <Layout>
        <Head>
          <title>Our Projects · Annaga Productions</title>
        </Head>
        <Navbar />
          <ProjectBar />
      </Layout>
    </>
  )
}