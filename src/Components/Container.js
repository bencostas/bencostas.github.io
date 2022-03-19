import React from "react";

const Container = ({item}) => {
    return (
        <>
        <div className="w-full md:w-3/5 p-3 flex items-center flex-col">
            <div className="">
            {item.map((Val) => {
                return (
                <div
                    className=""
                    key={Val.id}
                >
                    <div className="card-body">
                        <a href={Val.link}>
                            {Val.name}
                        </a>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </>
    );
};

export default Container;