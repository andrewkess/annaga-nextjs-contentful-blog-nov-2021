import ContentfulImage from './contentful-image'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={520}
      height={780}
      // resize={ { width: 100, height: 100 } } 
      alt={`Cover Image for ${title}`}
      className={cn('block w-screen h-full object-cover')}
      src={url}

      
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
