import PostPreview2 from '../components/post-preview2'

export default function MoreStories2({ posts }) {
  return (
    <section>
              <div className="relative">

      <h2 className="mt-8 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Latest projects
      </h2>
      <div className="grid gap-6 md:gap-12 lg:gap-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32">
        {posts.map((post, index) => (

          <PostPreview2
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            index={index}
          />
        ))}
      </div>
      </div>
    </section>
  )
}
