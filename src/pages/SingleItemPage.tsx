import React from 'react';
import ImagePreview from "../components/ImagePreview"
import { useEffect, useState } from 'react';
import RelatedItems from '../components/RelatedItemBox';
import img from "../assets/EngsocLogo.svg";
import img1 from "../assets/728a14b7c377e3a51bf325b237c74de8.jpg";
import img2 from "../assets/lighter.webp"
import img3 from "../assets/pushin.gif"
import {
  Box,

} from '@mui/material';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`

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
  const pink = new Array("../assets/EngsocLogo.svg", "../assets/728a14b7c377e3a51bf325b237c74de8.jpg", "../assets/lighter.webp");
  return (
    <div>

      <div>
        <ImagePreview items={pink} />
      </div>
      <h1>Here are some items you'll love</h1>
      <StyledDiv>
        <RelatedItems
          price={12.60}
          itemtext="Doll"
          img={img1}
        />
      </StyledDiv>
    </div>


  )
}

export default SingleItemPage;
