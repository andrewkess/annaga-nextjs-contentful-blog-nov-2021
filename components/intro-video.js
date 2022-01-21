import { useRef } from "react";
import { Video, CloudinaryContext, Transformation } from "cloudinary-react";

const IntroVideoPlayer = () => {
  // console.log(video)
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="annaga" secure="true">
      <div className="bg-black">
        <Video
          publicId="somalia334-22_ydcx5z"
          width="100%"
          controls={false}
        
autoPlay={true}
loop
        innerRef={videoRef}
          className="max-h-[45rem] object-cover"
        >
         <Transformation audioCodec="none" videoCodec="h264" />
         </Video>
          </div>
    </CloudinaryContext>
  );
};
export default IntroVideoPlayer;