import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStoriesPostPage from '../../components/more-stories-post-page';
//import Header from '../../components/header'
import PostDescription from '../../components/post-description';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
//import { CMS_NAME } from '../../lib/constants'
import Navbar from '../../components/navbar';
import PostVideo from '../../components/post-video';
//import Script from 'next/script'
import ProjectStatus from '../../components/project-status';
import ProjectDirector from '../../components/project-director';
import ProjectSummary from '../../components/project-summary';



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
                <title>{post.title} · Annaga Productions</title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>

              <PostVideo
        title={post.title}
        coverImage={post.coverImage}
        video={post.video}
      />
       <Navbar /> 
       <Container>

              <PostDescription title={post.title.toUpperCase()} date={post.date} />
              {post.summary && <ProjectSummary summary={post.summary} />}
              {post.director && <ProjectDirector director={post.director} />}
              {post.status && <ProjectStatus status={post.status} />}

              </Container>

            </article>
            <Container>

            <hr className="border-accent-2 mt-12" />
            { 
            // need to do something to reduce number if screen is smaller
  //const morePosts = allPosts.slice(1)
            
            }

{     morePosts && morePosts.length > 0 && (
              <MoreStoriesPostPage posts={morePosts} />
            )}
                        <hr className="border-accent-2 mt-12" />

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
