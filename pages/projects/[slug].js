import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
//import Header from '../../components/header'
import PostDescription from '../../components/post-description';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
//import { CMS_NAME } from '../../lib/constants'
import Navbar from '../../components/navbar';
import PostVideo from '../../components/post-video';
//import Script from 'next/script'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
     
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>

            <article>
              <Head>
                <title>{post.title} | Annaga Productions</title>
                <meta property="og:image" content={post.coverImage.url} />
                {/* <link href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css" rel="stylesheet" />

<Script src="https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js" strategy="lazyOnload" />
<Script src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js" strategy="lazyOnload" /> */}


              </Head>

              <PostVideo
        title={post.title}
        coverImage={post.coverImage}
        video={post.video}
      />
       <Navbar /> 
       <Container>

              <PostDescription
                title={post.title}
                date={post.date}
              />

              <PostBody content={post.content} />
              </Container>

            </article>
            <Container>

            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
              </Container>

          </>
        )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  };
}
