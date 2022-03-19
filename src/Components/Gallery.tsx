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
        <div className="text-3xl py-16">
            here's a gallery of my work
        </div>
        <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        <Container item={item}/>
        </>
    );
};

export default Gallery;