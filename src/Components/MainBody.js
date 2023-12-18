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

            
            <div className='rounded-3xl text-lg shadow-lg shadow-indigo-300/50 text-left self-auto w-full lg:w-3/5 2xl:w-2/5 p-6 list-disc'>
            Nice to meet you! I am currently pursuing my undergraduate in computer science 
            and am looking for exciting opportunities in tech. I love learning new things
            and finding different approaches to tackle problems. 
            <br/>
            <br/>
            I have experience
            working in web development, system development, and software development. I'm looking to
            gain as much experience and exposure as I can into different fields of tech before I graduate.
            <br/>
            <br/>
            <p className='font-bold'>I am seeking an internship for Summer 2024.</p>
            <br/>
            Aside from coding, I have a love for sports, food, and travelling.
            <br/>
            </div>
        </div>
        
        </>
    );
}

export default MainBody;