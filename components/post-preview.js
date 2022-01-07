import Link from 'next/link'
import React, { useEffect, useState } from 'react';
//import Avatar from '../components/avatar'
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

const [modifiedTitle, setModifiedTitle] = useState(title);


  useEffect(() => {

//  console.log(title);
// Split using a space character
let titleArr = title.toUpperCase().split(' ');

//Add hyphen for words => 9 characters
titleArr.forEach((word,i,arr) => {
  if(word.length>=9){
    //console.log('long word:', word);
    arr[i] = word.slice(0, 5) + "-" + word.slice(5);
  }
})

//convert word array back to string
let modified = titleArr.join(' ');

setModifiedTitle(modified);


// console.log(modifiedTitle);
// console.log(titleArr);


    

  }, [])



  return (
    <><Link href={`/projects/${slug}`}><a href="/" aria-label="Project page">
    <div className=" aspect-w-2 aspect-h-3">
    <CoverImage title={title} url={coverImage.url} />

    <div className="z-10 py-6 text-white/90 hover:text-white/100 absolute inset-x-0 bottom-0  hover:bg-black hover:bg-opacity-20">
      <div className="absolute flex flex-wrap sm:flex-nowrap justify-between items-end inset-x-0 bottom-0 leading-none bg-gradient-to-b from-transparent to-black
      text-3xl sm:text-6xl 2xl:text-7xl p-2 sm:p-4 lg:p-6 drop-shadow-lg tracking-tight md:tracking-normal
      "
      style={{
        fontFamily: "'Rubik', sans-serif",
      }} >
        
    <div>{modifiedTitle}</div> 
      
      <div className="text-xl sm:text-2xl lg:text-3xl bg-gray-900 bg-opacity-10 rounded text-right"   style={{
        fontFamily: "'Open Sans Condensed', sans-serif",
      }}><DateComponent dateString={date} /></div>

</div>
    </div>
    
    </div></a></Link>
    </>

  )
}

