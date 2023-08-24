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
    return {
        "name": "Wireless Earbuds",
        "description": "b Q W n v e v 5 j L R a W 2 L M o D ",
        "colours": [{ name: "Black", img: plush, primaryColour: "#EBB1FF", secondaryColour: "#F5D8FF" }, { name: "Lilac", img: pushin, primaryColour: "#FF7A00", secondaryColour: "#FED5B0" }, { name: "Red", img: winz, primaryColour: "#FB95BA", secondaryColour: "#FEC8DC" }],
        "price": 79.99,
        default: plush
    };
}