import Head from 'next/head'
//import Script from 'next/script'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />


{/* <link href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css" rel="stylesheet" /> */}

{/* <script src="https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
<script src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js" type="text/javascript"></script> */}


      <meta
        name="description"
        content={`A statically generated blog example using Next.js and Contentful.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
