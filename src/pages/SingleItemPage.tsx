import React from 'react';
import ImagePreview from "../components/ImagePreview"
import { useEffect, useState } from 'react';

// const List = [img, img1, img2, img3];
const SingleItemPage = () => {
  // const [images, setImages] = useState<ImageType[]>();
  // useEffect(() => {
  //   setImages(
  //     Array.from(Array(4).keys()).map((id) => ({
  //       id,
  //       url: List[id]
  //     }))
  //   );
  // }, []);
  return (
    <div>

      <div>
        <ImagePreview/>
      </div> <h1>
        HOME PAGE
      </h1>
    </div>


  )
}

export default SingleItemPage;
