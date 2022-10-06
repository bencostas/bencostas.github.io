import React, {useState} from "react";
import Jobs from "./JobData"
import JobTabs from "./JobTabs";

const Work = () => {

    return(
        <>
        <div className="text-3xl py-12 flex items-center flex-col">
            work experience
        
        <JobTabs data={Jobs}/>
        </div>
        </>
    );
};

export default Work;