import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";

interface VideoProps {
  video: string;
  active: boolean;
}

const Video: FC<VideoProps> = ({ video, active }) => {
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (active) {
        videoElement.play().catch((error) => {
          console.warn("Video play was prevented:", error);
        });
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  }, [active]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
      <video
        src={video}
        ref={videoRef}
        loop={active}
        muted
        className={cn(
          "h-full w-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      />
    </div>
  );
};

export default Video;
