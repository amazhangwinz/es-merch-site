import React from 'react'

import {data} from './Data.jsx';


export const findColourImage = (index, currColour) => {
    for (const colourObj of data[index].colours) {
        if (colourObj.name === currColour) {
            return colourObj.img
        }
    }
        
}