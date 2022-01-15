// import Avatar from '../components/avatar'
// import CoverImage from '../components/cover-image'
import ProjectImage from '../components/project-image'
import VideoPlayer from '../components/videoplayer'


export default function PostVideo({ title, coverImage, video }) {
    // console.log(video[0].public_id);
    return (
    <>
      
{/* <div>Video: { video && video[0].url }</div> */}

{/* If there is a video, we show it, otherwise display the coverimage instead */}

{video ? <VideoPlayer video={video[0].public_id} /> : 

<div className="m-0">
      <div
          className="w-screen flex overflow-hidden relative"
          style={{
            height:
              '60vh' /* Fallback for browsers that do not support Custom Properties */,
            height: 'calc(var(--vh, 1vh) * 60)',
          }}
        >


{coverImage && <ProjectImage url={coverImage.url} title={title} />}
</div>
</div>




}

       </>
  )
}
