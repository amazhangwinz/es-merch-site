import React from 'react'

import {data} from './Data.jsx';


export const findColourImage = (index, currColour) => {
    for (const colourObj of data[index].colours) {
        if (colourObj.name === currColour) {
            return colourObj.img
        }
    }
        
}

export const findItemObject = (title) => {
    for (const item of data) {
        if (item.name === title) {
            return item
        }
    }
    return {
        "name": "Wireless Earbuds",
        "description": "b Q W b 7 n v e v 5 j L R a W 2 L M o D ",
        "colours": [{name: "Black", img: "plush", }, {name:"White", img: "pushin"}, {name: "Red", img: "winz"}],
        "price": 79.99,
        default: "plush"
    };
}