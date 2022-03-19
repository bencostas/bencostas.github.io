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

            
            <div className='text-lg shadow-xl text-left md:text-center self-auto w-full md:w-3/5 p-6'>
            Nice to meet you! I am currently pursuing my undergraduate in computer science 
            and am looking for exciting opportunities in tech. I love learning new things
            and finding different approaches to tackle problems.
            <br/>
            <br/>
            Aside from coding, I enjoy a mixture of sports, eating at new restaurants, and discovering new hobbies.
            </div>
        </div>
        
        </>
    );
}

export default MainBody;