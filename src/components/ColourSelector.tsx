import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Container,
    ToggleButton,
    ToggleButtonGroup,
    createTheme,
    Theme,
    CreateMUIStyled,
} from '@mui/material';
import styled, { keyframes, css } from "styled-components";

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

const ColorSelectorContainer = styled.div`
border-radius: 4.375rem;
background: #FEC8DC;
display: flex;
flex-shrink: 0;
position: relative;
width: 26.4375rem;
height: 2.9375rem;
justify-content: space-evenly;
align-content: center;
`

const Colour1 = styled.text`
text-align: center;
color: rgba(0, 0, 0, 0.90);
text-align: center;
font-family: Montserrat;
font-size: 1.5625rem;
font-style: normal;
font-weight: 600;
line-height: 190%;

`

const Colour2 = styled.text`
text-align: center;
color: rgba(0, 0, 0, 0.90);
font-family: Montserrat;
font-size: 1.5625rem;
font-style: normal;
font-weight: 600;
line-height: 190%;


`

const Colour3 = {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.90)',
    fontFamily: 'Montserrat',
    fontSize: '1.5625rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '190%',
    background: 'none',
    border: 'none',
    padding: '1rem',
    '&.Mui-selected, &.MuiToggleButton-root, &.Mui-selected:hover': {
        backgroundColor: 'transparent',
    },
    '&.MuiToggleButton-root:hover': {
        color: "grey",
    },
}

type Props = {
    children?: any;
    colour: string;
    top: string;
    left: string;
}

type SelectOverlayProps = {
    left: string;
    background: string;
    width: string;
}

const SelectOverlay = styled.div<SelectOverlayProps>`
position: absolute;
top: .4rem;
left: ${props => props.left};
border-radius: 4.375rem;
background: ${props => props.background};
flex-shrink: 0;
width: ${props => props.width};
height: 2.1875rem;
z-index: 0;
// On click
// Change to: "Lilac";
// Animate: Smart animate;
transition-name: active;
transition-timing-function: ease-out;
transition-duration: 300ms;
`
const toggleswitchstyle = (bgc: string) => ({
    borderRadius: '4.375rem',
    background: bgc,
    display: 'flex',
    flexShrink: '0',
    position: 'relative',
    width: '26.4375rem',
    height: '2.9375rem',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    transiton: 'ease-out 300',
})


const buttonStyling = {
    width: '7.625rem',
    height: '2.1875rem',
    borderRadius: '4.375rem',
}

const theme = createTheme({
    transitions: {
        duration: {
            standard: 300,
        },
        easing: {
            easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
    }
})


const ColourSelector = () => {

    const [clickedButton, setClickedButton] = React.useState(0);
    const [position, setPosition] = React.useState('0.4rem');
    const [width, setWidth] = React.useState('7.5rem');
    const [color, setColor] = React.useState('#FB95BA')
    const [backgroundc, setBackgroundc] = React.useState('#FEC8DC')
    const ref = React.createRef();
    const handleclick = (
        event: React.MouseEvent<HTMLElement>,
        newButton: number,
    ) => {
        if (newButton !== null) {
            console.log(newButton)
            switch (newButton) {
                case 1:
                    setPosition('7.6rem')
                    setColor('#EBB1FF')
                    setBackgroundc('#F5D8FF')
                    setWidth('8rem')
                    break;
                case 2:
                    setPosition('16.3rem')
                    setColor('#FF7A00')
                    setBackgroundc('#FED5B0')
                    setWidth('9rem')
                    break;
                default:
                    setPosition('.4rem')
                    setColor('#FB95BA')
                    setBackgroundc('#FEC8DC')
                    setWidth('7.5rem')
                    break;
            }
            setClickedButton(newButton);
            
        }
        
        

    };

    return (
        <>
            <ToggleButtonGroup
                value={clickedButton}
                sx={toggleswitchstyle(backgroundc)}
                exclusive
                onChange={handleclick}
                ref={ref}>
                <SelectOverlay left={position} background={color} width={width}></SelectOverlay>
                <ToggleButton value={0} sx={Colour3} disableRipple >Pink</ToggleButton>
                <ToggleButton value={1} sx={Colour3} disableRipple >Lilac</ToggleButton>
                <ToggleButton value={2} sx={Colour3} disableRipple >Orange</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}
export default ColourSelector;

