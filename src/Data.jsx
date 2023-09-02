import React from 'react';

import plush from "./assets/plush.jpg";
import pushin from "./assets/pushin.gif";
import winz from "./assets/WinnieZhang.png";
import item from "./assets/728a14b7c377e3a51bf325b237c74de8.jpg";
import item1 from "./assets/lighter.webp"
import HoodieSizeGuide from "./assets/HoodieSizeGuide.png"
import JumperSizeGuide from "./assets/JumperSizeGuide.png"
import OG from "./assets/OG.png"
import Sketch from "./assets/SketchBooked.png"
import PN from "./assets/PastelNights.png"

export const data = [ {
        "name": "The Original",
        "description": "If you love baking cookies, eating almond pound cake, and cuddling with cute animals, you will adore this sanrio my melody plush",
        "colours": [{name: "Green", img: OG, primaryColour: "#FB95BA", secondaryColour: "#FEC8DC" }, {name:"Purple", img: pushin, primaryColour: "#EBB1FF", secondaryColour: "#F5D8FF"}, {name: "Orange", img: winz, primaryColour: "#FF7A00", secondaryColour: "#FED5B0"}],
        "price": 79.99,
        "sizeguide": JumperSizeGuide,
        default: OG
    },
    {
        "name": "Sketchbook",
        "description": "If you love baking cookies, eating almond pound cake, and cuddling with cute animals, you will adore this sanrio my melody plush",
        "colours": [{name: "Pink", img: Sketch, primaryColour: "#FB95BA", secondaryColour: "#FEC8DC" }, {name:"Purple", img: pushin, primaryColour: "#EBB1FF", secondaryColour: "#F5D8FF"}, {name: "Orange", img: winz, primaryColour: "#FF7A00", secondaryColour: "#FED5B0"}],
        "price": 49.99,
        "sizeguide": HoodieSizeGuide,
        default: Sketch
    },
    {
        "name": "Pastel Nights",
        "description": "If you love baking cookies, eating almond pound cake, and cuddling with cute animals, you will adore this sanrio my melody plush ",
        "colours": [{name: "Pink", img: PN, primaryColour: "#FB95BA", secondaryColour: "#FEC8DC" }, {name:"Purple", img: pushin, primaryColour: "#EBB1FF", secondaryColour: "#F5D8FF"}, {name: "Orange", img: winz, primaryColour: "#FF7A00", secondaryColour: "#FED5B0"}],
        "price": 129.99,
        "sizeguide": HoodieSizeGuide,
        default: PN
    },
    ]


