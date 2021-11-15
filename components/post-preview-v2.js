import Link from 'next/link';
//import Avatar from '../components/avatar'
import DateComponent from '../components/date';
//import CoverImage from './cover-image'

export default function PostPreview({ title, coverImage, date, author, slug }) {
  return (
    <>
      <div className="m-4">
        <Link href={`/posts/${slug}`} key={title}>
          <div className="relative bg-indigo-800  cursor-pointer ">
            <div className="absolute inset-0">
              <div className="">
                <img
                  src={coverImage.url}
                  alt={title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
    
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                {author.name} <DateComponent dateString={date} />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
