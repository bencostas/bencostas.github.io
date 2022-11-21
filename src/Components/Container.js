import React from "react";

const Container = ({item}) => {
    return (
        <>
        <div className="w-full md:w-3/5 xl:w-2/5 py-3 flex items-center">
            <div className="py-6 w-full flex items-center flex-wrap place-items-center">
            {item.map((Val) => {
                return (
                <div
                    className="w-1/2 h-30 p-2 hover:-translate-y-1 hover:scale-100 transition ease-in-out"
                    key={Val.id}
                >
                    <a href={Val.link}>
                    <div className="text-left hover:bg-sky-100 p-3 rounded-xl">
                        <div className="font-bold underline">
                        {Val.name}
                        </div>
                        
                        {Val.desc}
                    </div>
                    </a>
                </div>
                );
            })}
            </div>
        </div>
        </>
    );
};

export default Container;