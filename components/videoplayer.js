import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="annaga" secure="true">
      <div>
        <Video
          publicId="videos/leah-optimized_kso72j"
          width="100%"
          controls
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  );
};
export default VideoPlayer;