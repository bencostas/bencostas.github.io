import React from "react";
import TypeWriter from "typewriter-effect";
import headshot from "../Data/headshot.jpg";

const MainBody = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="text-4xl py-20">
        <TypeWriter
          options={{
            strings: ["hi, i'm ben", "welcome to my site."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="flex flex-row items-center gap-6 rounded-3xl text-lg shadow-lg shadow-indigo-300/50 text-left w-full lg:w-3/5 2xl:w-2/5 p-6">
        <img
          className="w-52 h-52 object-cover rounded-full"
          src={headshot}
          alt="Me!"
        />
        <div>
          Nice to meet you and welcome to my profile! I completed my Bachelor's
          of Science in Computer Science at Toronto Metropolitan University and
          am currently a Software Systems Engineer 2 at AMD.
          <br />
          <br />
          Aside from coding, I have a love for sports, food, and travelling.
        </div>
      </div>
    </div>
  );
};

export default MainBody;
