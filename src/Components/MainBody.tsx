import React from "react";
import TypeWriter from "typewriter-effect"

function MainBody() {
    return (
        <>
        <div className="flex items-center flex-col">
            <div className="text-4xl py-20">
                <TypeWriter
                options={{
                    strings: ['hi, i\'m ben', 'welcome to my site'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>

            
            <div className='shadow-inner self-auto w-3/4'>
            Test
            </div>
        </div>
        
        </>
    );
}

export default MainBody;