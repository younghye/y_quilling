import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Masonry from "react-layout-masonry";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { images } from "../components/data";
import { useState } from "react";

export default function Portfolio() {
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={15}>
        {images.map((image, index) => (
          <div key={index} onClick={() => setIndex(index)}>
            <img src={image.src} alt={image.description} />
          </div>
        ))}
      </Masonry>
      <Lightbox
        plugins={[Captions]}
        captions={{ descriptionTextAlign: "start" }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
      />
    </>
  );
}
