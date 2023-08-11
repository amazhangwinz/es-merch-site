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

const ToggleButtonStyling = {
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

type Item = {
    item: colors[]
}

type colors = {
    name: string
    colourcode: string
}

const ColourSelector = () => {

    const [clickedButton, setClickedButton] = React.useState(0);
    const [position, setPosition] = React.useState('0.4rem');
    const [width, setWidth] = React.useState('7.5rem');
    const [color, setColor] = React.useState('#FB95BA')
    const [backgroundc, setBackgroundc] = React.useState('#FEC8DC')
    const container = React.useRef<HTMLElement>(null);
    const item0 = React.useRef<HTMLButtonElement>(null);
    const item1 = React.useRef<HTMLButtonElement>(null);
    const item2 = React.useRef<HTMLButtonElement>(null);
    const handleclick = (
        event: React.MouseEvent<HTMLElement>,
        newButton: number,
    ) => {
        if (newButton !== null) {
            console.log(newButton)

            switch (newButton) {
                case 1:
                    const m = container.current?.getBoundingClientRect().left
                    const l = item1.current?.getBoundingClientRect().left
                    if (m != undefined && l != undefined)
                        setPosition(Math.round(l) - Math.round(m) + 'px')
                    setColor('#EBB1FF')
                    setBackgroundc('#F5D8FF')
                    setWidth(item1.current?.getBoundingClientRect().width + 'px')
                    break;
                case 2:
                    const j = container.current?.getBoundingClientRect().left
                    const i = item2.current?.getBoundingClientRect().left
                    if (j != undefined && i != undefined)
                        setPosition((Math.round(i)) - Math.round(j) + 'px')
                    setColor('#FF7A00')
                    setBackgroundc('#FED5B0')
                    setWidth(item2.current?.getBoundingClientRect().width + 'px')
                    break;
                default:
                    const x = container.current?.getBoundingClientRect().left
                    const y = item0.current?.getBoundingClientRect().left
                    if (x != undefined && y != undefined)
                        setPosition(Math.round(y) - Math.round(x) + 'px')
                    setColor('#FB95BA')
                    setBackgroundc('#FEC8DC')
                    setWidth(item0.current?.getBoundingClientRect().width + 'px')
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
                ref={container}
            >
                <SelectOverlay left={position} background={color} width={width}></SelectOverlay>
                <ToggleButton ref={item0} value={0} sx={ToggleButtonStyling} disableRipple >Pink</ToggleButton>
                <ToggleButton ref={item1} value={1} sx={ToggleButtonStyling} disableRipple >Lilac</ToggleButton>
                <ToggleButton ref={item2} value={2} sx={ToggleButtonStyling} disableRipple >Orange</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}
export default ColourSelector;

