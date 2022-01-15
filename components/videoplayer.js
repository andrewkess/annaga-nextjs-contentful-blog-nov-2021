import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer = ({video}) => {
  console.log(video)
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="annaga" secure="true">
      <div className="lg:px-24 bg-black">
        <Video
          publicId={video}
          width="100%"
          controls
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  );
};
export default VideoPlayer;