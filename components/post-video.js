// import Avatar from '../components/avatar'
// import CoverImage from '../components/cover-image'
import ProjectImage from '../components/project-image'
import VideoPlayer from '../components/videoplayer'


export default function PostVideo({ title, coverImage }) {
    //console.log(video);
    return (
    <>
      {/* <div className="m-0">
{coverImage && <ProjectImage url={coverImage.url} title={title} />}
</div> */}
{/* <div>Video: { video && video[0].url }</div> */}
<VideoPlayer />

       </>
  )
}
