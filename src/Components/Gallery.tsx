import React, {useState} from "react";
import Data from "./Data";
import Container from "./Container.js";
import Buttons from "./Buttons.js";

const Gallery = () => {
    const [item, setItem] = useState(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.language))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
          return newVal.language === curcat;
        });
        setItem(newItem);
      };

    return  (
        <>
        <div className="text-3xl py-12 flex items-center flex-col">
            my projects
        </div>
        <div className="flex items-center flex-col ">
        <Container item={item}/>
        </div>
        
        </>
    );
};

export default Gallery;