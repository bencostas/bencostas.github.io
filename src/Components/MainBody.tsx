import React from "react";
import TypeWriter from "typewriter-effect"

function MainBody() {
    return (
        <>
        <div className="flex items-center flex-col">
            <div className="text-4xl py-20">
                <TypeWriter
                options={{
                    strings: ['hi, i\'m ben', 'welcome to my site.'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>

            
            <div className='text-lg shadow-inner text-left self-auto w-full md:w-3/5 p-6'>
            Currently under development
            </div>
        </div>
        
        </>
    );
}

export default MainBody;