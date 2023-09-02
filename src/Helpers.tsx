import React from 'react'

import { data } from './Data.jsx';
import { CartItem } from './App.js';
import plush from "./assets/plush.jpg";
import pushin from "./assets/pushin.gif";
import winz from "./assets/WinnieZhang.png";


export const findColourImage = (index: number, currColour: string) => {
    for (const colourObj of data[index].colours) {
        if (colourObj.name === currColour) {
            return colourObj.img
        }
    }
    return data[index].default

}

export const findMatch = (Cart: CartItem[], Item: CartItem) => {
    for (const element of Cart) {
        if (element.price == Item.price && element.name == Item.name && element.size == Item.size && element.colour == Item.colour) {
            return true
        }
    }
    return false
}


export const findItemObject = (title: string | null) => {
    for (const item of data) {
        if (item.name === title) {
            return item
        }
    }
    return data[0]

}