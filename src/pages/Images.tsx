import { FC } from "react";
import Masonry from "react-layout-masonry";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];

  videoData: {
    type: string;
    sources: {
      src: string;
      type: string;
    }[];
  }[];

  onClick: (index: number) => void;
}
const Images: FC<ImagesProps> = (props) => {
  const { data, videoData, onClick } = props;
  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={15}>
      {data.map((slide, index) => (
        <div key={index} onClick={() => handleClickImage(index)}>
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
      {videoData.map((video, index) => (
        <div key={index} onClick={() => handleClickImage(index)}>
          <video className="h-full w-full rounded-lg" controls>
            <source src={video.sources[0].src} type={video.sources[0].type} />
          </video>
        </div>
      ))}
    </Masonry>

    /* issue: colums direction vertical*/
    // <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-2">
    //   {data.map((slide, index) => (
    //     <div
    //       onClick={() => handleClickImage(index)}
    //       key={index}
    //       className="break-inside-avoid"
    //     >
    //       <img
    //         src={slide.src}
    //         alt={slide.description}
    //         className="w-full py-4 object-cover object-center"
    //         style={{ flexDirection: "row" }}
    //       />
    //     </div>
    //   ))}
    // </div>

    /* issue: break-inside-avoid desn't work with grid */
    // <div className="images-container">
    //   {data.map((slide, index) => (
    //     <div
    //       onClick={() => handleClickImage(index)}
    //       key={index}
    //       className="image"
    //     >
    //       <img src={slide.src} alt={slide.description} />
    //     </div>
    //   ))}
    // </div>
  );
};
export default Images;
