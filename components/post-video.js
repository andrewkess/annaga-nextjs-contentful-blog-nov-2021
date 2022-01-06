// import Avatar from '../components/avatar'
// import CoverImage from '../components/cover-image'
import ProjectImage from '../components/project-image'
import VideoPlayer from '../components/videoplayer'


// //hack to calculate the actual browser window height on mobile and save that value in the 'vh' variable which can be used later in CSS
// if (typeof window !== "undefined") {
//     // browser code
  
//     function appHeight() {
//         const doc = document.documentElement
//         doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
//       }
    
//       window.addEventListener('resize', appHeight);
//       appHeight();
  
//   }



export default function PostVideo({ title, coverImage, video }) {
    //console.log(video);
    return (
    <>
      <div className="m-0">

<div
  className="w-screen h-screen h-max-full flex overflow-hidden relative bg-red-400"
  style={{
    height:
      '100vh' /* Fallback for browsers that do not support Custom Properties */,
    height: 'calc(var(--vh, 1vh) * 100)',
  }}
>
    
{coverImage && <ProjectImage url={coverImage.url} title={title} />}

</div>
</div>
<div>Video: { video && video[0].url }</div>
<VideoPlayer />

       </>
  )
}
