import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Masonry from "react-layout-masonry";
import { videos } from "../components/data";

export default function Video() {
  return (
    <>
      <Masonry
        columns={{ 640: 1, 768: 2, 1024: 3 }}
        gap={20}
        className="relative z-0"
      >
        {videos.map((video) => (
          <video className="h-full w-full rounded-lg" controls>
            <source src={video.sources[0].src} type={video.sources[0].type} />
          </video>
        ))}
      </Masonry>
    </>
  );
}
