import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div> 
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center ">
          <div className="select-none">
          <h1 className="text-8xl font-bold m-10 hover:drop-shadow-lg whitespace-nowrap overflow-hidden">
              Escape Room
            </h1>
            <Link href = "/pass">
              <button className="btn btn-secondary btn-lg">Start</button>
            </Link>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default page;
