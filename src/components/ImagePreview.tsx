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

const StyledGrid = styled.div`
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
//  width: 36.5625rem;
//  height: 28.125rem;

`
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.625rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-self: stretch;

`

const LargeStyledImg = styled.img`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    grid-column: span 3;
    grid-row: span 3;
    justify-self: stretch;
    border-radius: 0.625rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-self: stretch;

`

class imagegallery {
    id: Array<String>;
    constructor() {
        this.id = new Array<String>;
    }
    addImage(src: String) {
        this.id.push(src);
    }
    getImage(id: number) {
        return this.id[id];
    }

}




const ImagePreview = () => {
    const [heroSrc, setHero] = useState(img);
    const images = new imagegallery();
    return (
        <StyledGrid>
            <StyledImg src={img} onClick={() => setHero(img)} style={{cursor:'pointer'}}></StyledImg>
            <LargeStyledImg src={heroSrc}></LargeStyledImg>
            <StyledImg src={img2} onClick={() => setHero(img2)} style={{cursor:'pointer'}}></StyledImg>
            <StyledImg src={img3} onClick={() => setHero(img3)} style={{cursor:'pointer'}}></StyledImg>
        </StyledGrid>
    )

}
export default ImagePreview;