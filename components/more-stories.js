import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
              <div className="relative">

      <h2 className="mt-16 mb-8 text-4xl md:text-6xl text-gray-800 tracking-tighter leading-tight">
        Latest projects
      </h2>
      <div className="grid gap-6 md:gap-12 lg:gap-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32">
        {posts.map((post) => (

          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      </div>
    </section>
  )
}
