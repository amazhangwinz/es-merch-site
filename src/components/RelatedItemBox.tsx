import React from 'react';
import { Navigate, useNavigate, createSearchParams } from "react-router-dom";

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
const StyledRelatedImage = styled.div`
width: 20.375rem;
height: 100%;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledImg = styled.img`
  width: 15rem;
  height: 15rem;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
  border-radius: 10%;
  flex-shrink:0;
  text-align: center;
`;

const StyledText = styled.text`
    font-family: Montserrat;
    font: Regular;
    font-size: 25px;
    font-weight: 500;
    color: #1C3A59;
`;

const BoldStyledText = styled(StyledText)`
    font-style: ExtraBold;
    font-weight: 800;
`;

type Props = {
    children?: any;
    price: number;
    itemtext: string;
    img: string;
}

const RelatedItemBox = (props: Props) => {

    const navigate = useNavigate();
    const productPage = (prodName: string) => {
        navigate({
            pathname: '/item',
            search: `?${createSearchParams({ title: prodName })}`,
        });
    };
    const ClickHandle = () => {
        productPage(props.itemtext);
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <Box sx={{ margin: { md: "none", xs: "1rem" } }}>
            <StyledRelatedImage style={{ cursor: 'pointer' }} onClick={ClickHandle}>
                <StyledImg src={props.img} style={{ cursor: 'pointer' }} />
                <Typography
                    variant="body1"
                    textAlign="center"
                >
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
            </StyledRelatedImage>
        </Box>
    )
}
export default RelatedItemBox;