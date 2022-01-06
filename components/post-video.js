// import Avatar from '../components/avatar'
// import CoverImage from '../components/cover-image'
import ProjectImage from '../components/project-image'
import VideoPlayer from '../components/videoplayer'


export default function PostVideo({ title, coverImage }) {
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
{/* <div>Video: { video && video[0].url }</div> */}
<VideoPlayer />

       </>
  )
}
