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

            
            <div className='rounded-3xl text-lg shadow-lg text-left self-auto w-full lg:w-3/5 2xl:w-2/5 p-6 list-disc'>
            Nice to meet you! I am currently pursuing my undergraduate in computer science 
            and am looking for exciting opportunities in tech. I love learning new things
            and finding different approaches to tackle problems. 
            <br/>
            <br/>
            Currently, I have experience
            working in web development, system development, and cybersecurity. I'm looking to
            gain as much experience and exposure as I can into different fields of tech.
            <br/>
            <br/>
            Aside from coding, I also love:
            <br/>
            <ul className="list-disc list-inside">
                <li>Basketball! 🏀</li>
                <li>Lifting! 🏋</li>
                <li>Video Games! 🎮</li>
                <li>Music! 🎵</li>
                <li>Food! (but I have an allergy to nuts) 🥜😥</li>
            </ul>
            </div>
        </div>
        
        </>
    );
}

export default MainBody;