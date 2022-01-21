import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const IntroVideoPlayer = () => {
  // console.log(video)
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="annaga" secure="true">
      <div className="bg-black">
        <Video
          publicId="somalia334-22_ydcx5z_gz7t4x"
          width="100%"
          controls={true}
          autoPlay={true}
          loop={true}
        innerRef={videoRef}
          className="max-h-[45rem] object-cover"
        />
           </div>
    </CloudinaryContext>
  );
};
export default IntroVideoPlayer;