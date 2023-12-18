import React from "react";
import Jobs from "./JobData"
import JobTabs from "./JobTabs";

const Work = () => {

    return(
        <>
        <div className="text-3xl py-12 flex items-center flex-col underline">
            work experience
        
        </div>
        <div className="flex items-center flex-col">
        <JobTabs data={Jobs}/>
        </div>
        </>
    );
};

export default Work;