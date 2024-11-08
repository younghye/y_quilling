import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import VideoPlug from "yet-another-react-lightbox/plugins/video";
import Masonry from "react-layout-masonry";
import { videos } from "../components/data";
import { useState } from "react";

export default function Video() {
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <div className="max-w-6xl mx-auto mt-6">
        <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={15}>
          {videos.map((video, index) => (
            <div key={index} onClick={() => setIndex(index)}>
              <video className="h-full w-full rounded-lg" controls>
                <source
                  src={video.sources[0].src}
                  type={video.sources[0].type}
                />
              </video>
            </div>
          ))}
        </Masonry>
        <Lightbox
          plugins={[Captions, VideoPlug]}
          captions={{ descriptionTextAlign: "start" }}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={videos}
        />
      </div>
    </>
  );
}
