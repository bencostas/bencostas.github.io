import React, {useState} from "react";
import Data from "./Data.js";
import Container from "./Container.js";
//import Buttons from "./Buttons.js";

const Gallery = () => {
    const [item] = useState(Data);

    return  (
        <>
        <div className="text-3xl py-12 flex items-center flex-col underline">
            my projects
        </div>
        <div className="flex items-center flex-col ">
        <Container item={item}/>
        </div>
        
        </>
    );
};

export default Gallery;