import React, { useEffect, useRef, useState } from "react";
import img3 from "../assets/EngsocLogo.svg";
import img from "../assets/728a14b7c377e3a51bf325b237c74de8.jpg";
import img1 from "../assets/lighter.webp"
import img2 from "../assets/pushin.gif"
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Grid,
} from '@mui/material';
import styled from "styled-components";
import {findItemObject} from '../Helpers.js';


const StyledGrid = styled.div`
--gap:16px;
--num-cols: 4;
--num-row: 3;
--row-height: 300px;

box-sizing: border-box;
padding: var(--gap);
display: grid;
grid-template-columns: repeat(var(--num-cols), 1fr);
grid-auto-rows: var(--row-row);
gap: var(--gap);


`
const StyledImg = styled.img`
width: 8.5vw;
height: 8.5vw;
object-fit: cover;
border-radius: 0.625rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
justify-self: stretch;

`

const LargeStyledImg = styled.img`
width: 27vw;
height: 27vw;
flex-shrink: 0;
object-fit: cover;
grid-column: span 3;
grid-row: span 3;
justify-self: stretch;
border-radius: 0.625rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
justify-self: stretch;

`

type ImagePreviewProps = {
    itemName: string | null;
    heroSrc: string;
    setHero: (hero: string) => void;
};

const ImagePreview = (props: ImagePreviewProps) => {

    const itemObj = findItemObject(props.itemName);

    // let items: Array<string>;
    // switch (props.itemColour) {
    //     case "pink":
    //         items = [img, img1, img2];
    //         break;
    //     default:
    //         items = [img, img, img];
    //         break;
    // }
    // const [heroSrc, setHero] = React.useState(itemObj.colours[0].img);
    return (
        <StyledGrid>
            <StyledImg src={itemObj.colours[0].img} onClick={() => props.setHero(itemObj.colours[0].img)} style={{ cursor: 'pointer' }}></StyledImg>
            <LargeStyledImg src={props.heroSrc}></LargeStyledImg>
            <StyledImg src={itemObj.colours[1].img} onClick={() => props.setHero(itemObj.colours[1].img)} style={{ cursor: 'pointer' }}></StyledImg>
            <StyledImg src={itemObj.colours[2].img} onClick={() => props.setHero(itemObj.colours[2].img)} style={{ cursor: 'pointer' }}></StyledImg>
        </StyledGrid>
    )

}
export default ImagePreview;