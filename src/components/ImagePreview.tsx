import React, { useEffect, useRef, useState } from "react";
import img from "../assets/EngsocLogo.svg";
import img1 from "../assets/728a14b7c377e3a51bf325b237c74de8.jpg";
import img2 from "../assets/lighter.webp"
import img3 from "../assets/pushin.gif"
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Grid,
} from '@mui/material';
import styled from "styled-components";

const StyledGird = styled.div`
    --gap:16px;
    --num-cols: 4;
    --num-row: 3;
    --row-height: 300px;

    box-sizing: border-box;
    pading: var(--gap);
    display: grid;
    grid-template-columns: repeat(var(--num-cols), 1fr);
    grid-auto-rows: var(--row-row);
    gap: var(--gap);

`
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const LargeStyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: span 3;
    grid-row: span 3;
`

// class imagegallery {
//     id: Array<string>;
//     constructor() {

//     }
// }

// const promotetoHero(){

// }

// const image() {
// id: string;
// string: 
// }

const ImagePreview = () => {
    return (
        <StyledGird>
            <StyledImg src={img}></StyledImg>
            <LargeStyledImg src={img1}></LargeStyledImg>
            <StyledImg src={img2}></StyledImg>
            <StyledImg src={img3}></StyledImg>
        </StyledGird>
    )

}
export default ImagePreview;