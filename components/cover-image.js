import ContentfulImage from './contentful-image'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={450}
      height={675}
      // layout="fill"
      // objectFit="cover"
      //  resize={ { width: 520, height: 780 } } 
      alt={`Cover Image for ${title}`}
      className={cn('object-cover ', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
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
