import React from "react";

const Container = ({item}) => {
    return (
        <>
        <div className="w-full md:w-3/5 py-3 flex items-center">
            <div className="py-6 w-full flex items-center flex-wrap place-items-center">
            {item.map((Val) => {
                return (
                <div
                    className="w-1/2 h-48 p-3"
                    key={Val.id}
                >
                    <a href={Val.link}>
                    <div className="text-left hover:bg-slate-200 p-3 rounded-xl">
                        {Val.name}
                        <br/>
                        <br/>
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