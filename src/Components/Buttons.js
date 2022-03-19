import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="space-x-3 ">
        <button
        className="px-5 py-2 rounded-md text-white bg-slate-800 hover:bg-slate-800 active:bg-slate-800 focus:outline-none focus:ring focus:ring-slate-400"
        onClick={() => setItem(Data)}
        >
            All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="px-5 py-2 rounded-md text-white bg-slate-800 hover:bg-slate-800 active:bg-slate-800 focus:outline-none focus:ring focus:ring-slate-400"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        
      </div>
    </>
  );
};

export default Buttons;