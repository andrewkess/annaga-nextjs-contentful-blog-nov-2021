import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const IntroVideoPlayer = () => {
  // console.log(video)
  const videoRef = useRef();
  return (
    <div
          className="w-screen h-screen h-max-full flex overflow-hidden relative"
          style={{
            height:
              '100vh' /* Fallback for browsers that do not support Custom Properties */,
            height: 'calc(var(--vh, 1vh) * 100)',
          }}
        >
            <CloudinaryContext cloud_name="annaga" secure="true" autoPlay>
        <Video
          publicId="somalia334-22_ydcx5z_gz7t4x"
          width="100%"
          controls={false}
        //   autoPlay={true}
autoPlay
        loop={true}
        innerRef={videoRef}
          className="h-screen w-screen object-cover"
        />
    </CloudinaryContext>
    </div>
  );
};
export default IntroVideoPlayer;