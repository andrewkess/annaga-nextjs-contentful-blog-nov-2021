import ContentfulImage from './contentful-image-project'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      // resize={ { width: 100, height: 100 } } 
      alt={title}
      className={cn('block w-screen h-full object-cover')}
      src={url}
      layout="fill"
      objectFit="cover"
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/projects/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
