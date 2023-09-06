import React from "react";
import {
    Box,
} from '@mui/material';
// import styled from "styled-components";
import { findItemObject } from "../Helpers";


// const StyledGrid = styled.div`
// --gap:16px;
// --num-cols: 4;
// --num-row: 3;
// --row-height: 300px;

// box-sizing: border-box;
// padding: var(--gap);
// display: grid;
// grid-template-columns: repeat(var(--num-cols), 1fr);
// grid-auto-rows: var(--row-row);
// gap: var(--gap);


// `
// const StyledImg = styled.img`
// width: 5rem;
// height: 5rem;
// object-fit: cover;
// border-radius: 0.625rem;
// box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// justify-self: stretch;

// `

// const LargeStyledImg = styled.img`
// width: 15rem;
// height: 17rem;
// flex-shrink: 0;
// object-fit: cover;
// grid-column: span 3;
// // grid-column: span 4;
// grid-row: span 3;
// justify-self: stretch;
// border-radius: 0.625rem;
// box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// justify-self: stretch;

// `

type ImagePreviewProps = {
    itemName: string | null;
    // heroSrc: string;
    // setHero: (hero: string) => void;
};

const ImagePreview = (props: ImagePreviewProps) => {

    const itemObj = findItemObject(props.itemName);
    return (
        <Box sx={{
            width: { md: "20rem", xs: "15rem" },
            height: { md: "20rem", xs: "15rem" },
            objectFit: "cover",
            justifySelf: "stretch",
            borderRadius: "0.625rem",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            margin: { md: '1rem', xs: 'none' },
            // }} src={props.heroSrc}></img>
        }} component="img" src={itemObj.default} alt="Item Name" >
            {/* <img
                src={props.heroSrc} alt="Item name">
            </img> */}
        </Box >
        // <StyledGrid>
        //     <StyledImg src={itemObj.colours[0].img} onClick={() => props.setHero(itemObj.colours[0].img)} style={{ cursor: 'pointer' }}></StyledImg>
        //     <LargeStyledImg src={props.heroSrc}></LargeStyledImg>
        //     <StyledImg src={itemObj.colours[1].img} onClick={() => props.setHero(itemObj.colours[1].img)} style={{ cursor: 'pointer' }}></StyledImg>
        //     <StyledImg src={itemObj.colours[2].img} onClick={() => props.setHero(itemObj.colours[2].img)} style={{ cursor: 'pointer' }}></StyledImg>
        // </StyledGrid>
    )

}
export default ImagePreview;