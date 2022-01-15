import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date }) {
  return (
    <>
    <div className='flex items-center justify-between text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-tight md:leading-none my-8 md:mt-10'>
    <h1 className="" style={{ fontFamily: "'Rubik', sans-serif"}}>{title}</h1>
    <div className="max-w-2xl mx-auto text-gray-500 text-3xl md:text-4xl lg:text-5xl ml-6" style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}><DateComponent dateString={date} /></div>
    </div>
    </>
  )
}
