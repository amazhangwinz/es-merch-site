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
import { findItemObject } from '../../Helpers';

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
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '190%',
    background: 'none',
    border: 'none',
    padding: '0.8rem',
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
top: .25rem;
left: ${props => props.left};
border-radius: 4.375rem;
background: ${props => props.background};
flex-shrink: 0;
width: ${props => props.width};
height: 1.5rem;
z-index: 0;
transition-name: active;
transition-timing-function: ease-out;
transition-duration: 300ms;
`
const toggleswitchstyle = (bgc: string) => ({
    borderRadius: '4.375rem',
    background: bgc,
    display: 'inline-flex',
    flexShrink: '0',
    position: 'relative',
    width: '60%',
    height: '2rem',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    transiton: 'ease-out 300',
    paddingLeft: '0.313rem',
    paddingRight: '0.313rem',
    overflow: 'hidden',
})

type ColourSelectorProps = {
    itemName: string | null;
    clickedButton: number;
    setClickedButton: (clickedButton: number) => void;
}

const ColourSelector = (props: ColourSelectorProps) => {
    const itemObj = findItemObject(props.itemName);

    // const items = React.useRef<Array<React.RefObject<HTMLButtonElement>>>([]);
    // items.current = itemObj.colours.map((x, idx) => items.current[idx] = React.createRef());

    // const [position, setPosition] = React.useState('0.4rem');
    // const [width, setWidth] = React.useState('');
    // const [color, setColor] = React.useState(itemObj.colours[0].primaryColour);
    // const [backgroundc, setBackgroundc] = React.useState(itemObj.colours[0].secondaryColour);
    // const container = React.useRef<HTMLElement>(null);
    // React.useEffect(() => {
    //     setWidth(items.current[0].current?.getBoundingClientRect().width + 'px');
    // }, [])

    // const handleclick = (
    //     event: React.MouseEvent<HTMLElement>,
    //     newButton: number,
    // ) => {
    //     if (newButton !== null) {
    //         console.log(newButton)

    //         const x = container.current?.getBoundingClientRect().left
    //         const y = items.current[newButton].current?.getBoundingClientRect().left
    //         if (x != undefined && y != undefined)
    //             setPosition(Math.round(y) - Math.round(x) + 'px')
    //         setColor(itemObj.colours[newButton].primaryColour)
    //         setBackgroundc(itemObj.colours[newButton].secondaryColour)
    //         setWidth(items.current[newButton].current?.getBoundingClientRect().width + 'px')
    //         props.setClickedButton(newButton);
    //     }
    // };

    // return (
    //     <ToggleButtonGroup
    //         size="small"
    //         value={props.clickedButton}
    //         sx={toggleswitchstyle(backgroundc)}
    //         exclusive
    //         onChange={handleclick}
    //         ref={container}
    //     >
    //         <SelectOverlay left={position} background={color} width={width}></SelectOverlay>
    //         {
    //             items.current.map((x, idx) => {
    //                 return (<ToggleButton ref={x} value={idx} sx={ToggleButtonStyling} disableRipple >{itemObj.colours[idx].name}</ToggleButton>)
    //             })
    //         }

    //     </ToggleButtonGroup>
    // )
}
export default ColourSelector;

