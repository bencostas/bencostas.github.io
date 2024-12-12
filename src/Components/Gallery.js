import React from "react";
import Data from "../Data/Data.js";
import Container from "./Container.js";
//import Buttons from "./Buttons.js";

const Gallery = () => {
  return (
    <>
      <div className="text-3xl py-12 flex items-center flex-col underline">
        my projects
      </div>
      <div className="flex items-center flex-col ">
        <Container data={Data} />
      </div>
    </>
  );
};

export default Gallery;
