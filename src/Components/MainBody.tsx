import React from "react";
import TypeWriter from "typewriter-effect"

function MainBody() {
    return (
        <div className="text-4xl py-20">
            <TypeWriter
            options={{
                strings: ['hi, i\'m ben', 'welcome to my site'],
                autoStart: true,
                loop: true,
              }}
            />
        </div>

        /* Include description of self here */
    );
}

export default MainBody;