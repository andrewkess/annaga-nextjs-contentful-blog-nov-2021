import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <><Link href={`/posts/${slug}`}><a className="hover:underline">
    <div className="relative bg-yellow-600 aspect-w-2 aspect-h-3">
    <CoverImage title={title} slug={slug} url={coverImage.url} />

    <div className="z-10 py-6 text-white absolute inset-x-0 bottom-0  hover:bg-black hover:bg-opacity-20">
      <div className="absolute inset-x-0 bottom-0 text-3xl leading-snug bg-gradient-to-b from-transparent to-black">{title}
      <div className="text-lg">{author.name} <DateComponent dateString={date} /></div></div>

    </div>
    
    </div></a></Link>
    </>

  )
}
