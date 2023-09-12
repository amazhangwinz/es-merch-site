import { data } from './Data.jsx';
import { CartItem } from './App.js';

export const findColourImage = (index: number, currColour: string) => {
    // for (const colourObj of data[index].colours) {
    //     if (colourObj.name === currColour) {
    //         return colourObj.img
    //     }
    // }
    // return data[index].default

}

export const findMatch = (Cart: CartItem[], name: string, size: string) => {
    let index = 0;
    for (const element of Cart) {
        // if (element.price == Item.price && element.name == Item.name && element.size == Item.size && element.colour == Item.colour) {
        if (element.name === name && element.size === size) {
            return index
        }
        index++;
    }
    return -1
}


export const findItemObject = (title: string | null) => {
    for (const item of data) {
        if (item.name === title) {
            return item
        }
    }
    return data[0]
}