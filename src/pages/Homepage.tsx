import React from 'react';
import RelatedItems from '../components/RelatedItemBox';
import img1 from '../assets/plush.jpg';
import {
  Box,

} from '@mui/material';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Homepage = () => {
  return (
    <div>
      <h1>
        HOME PAGE

      </h1>
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

export default Homepage;
