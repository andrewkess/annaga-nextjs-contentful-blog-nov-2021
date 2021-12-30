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
    <div className="relative aspect-w-2 aspect-h-3">
    <CoverImage title={title} slug={slug} url={coverImage.url} />

    <div className="z-10 py-6 text-white/90 hover:text-white/100 absolute inset-x-0 bottom-0  hover:bg-black hover:bg-opacity-20">
      <div className="absolute inset-x-0 bottom-0 leading-none bg-gradient-to-b from-transparent to-black
      text-5xl font-medium sm:text-6xl xl:text-7xl p-2 sm:p-4 lg:p-6 drop-shadow-lg tracking-tight md:tracking-normal
      "
      style={{
        fontFamily: "'Bebas Neue', cursive",
      }}
      
      >{title} 
      <div className="inline text-2xl"   style={{
        fontFamily: "'Open Sans Condensed', sans-serif",
      }}>&nbsp;&nbsp;(<DateComponent dateString={date} />)</div></div>

    </div>
    
    </div></a></Link>
    </>

  )
}
