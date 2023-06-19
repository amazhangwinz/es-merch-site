import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import img from '../assets/plush.jpg';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Container,
} from '@mui/material';
import styled from "styled-components";

/**
 * MUI is an extensive component library with some very useful components that
 * makes styling a lot easier. Visit the documentation for more info.
 * @link https://mui.com/
*/

/**
 * Styled Components are "visual primitives for components". This is a flexible
 * way to style components in React without reapeating yourself.
 * @link https://styled-components.com/docs/basics
*/
const StyledImg = styled.img`
  width: 10rem;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
  border-radius: 10%;
`;

const StyledText = styled.text`
    font-family: Montserrat;
    font: Regular;
    font-size: 20px;
    color: #1C3A59;
`;

const BoldStyledText = styled(StyledText)`
    font-style: ExtraBold;
    font-weight: 800;

`;

const ItemName = "Sanrio Plush";

const Price = 20.50;

type Props = {
    children?: any;
    price: number;
    itemtext: string;
    img: string;
}

const RelatedItemBox = (props: Props) => {

    return (
        <Box
            maxWidth="xs">
            <StyledImg src={props.img} />
            <Typography
                variant="body1">
                <StyledText>
                    {props.itemtext}
                </StyledText>
            </Typography>
            <Typography
                variant="body1">
                <BoldStyledText>
                    {"$" + props.price.toFixed(2)}
                </BoldStyledText>
            </Typography>
        </Box>
    )
}
export default RelatedItemBox;