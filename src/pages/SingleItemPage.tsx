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
  const pink  = new Array("../assets/EngsocLogo.svg","../assets/728a14b7c377e3a51bf325b237c74de8.jpg","../assets/lighter.webp");
  return (
    <div>
        
      <div>
        <ImagePreview items={pink}/>
      </div> <h1>
        HOME PAGE
      </h1>
    </div>


  )
}

export default SingleItemPage;
