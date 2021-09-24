import React from "react";
import socialLink from "../utils/socialLink";
import SocialIconComponent from "./SocialIconComponent";

function SocialFollowComponent() {
  return (
    <>
      <p className=" sm:hidden text-yellow-200 font-mono text-center pb-2">
        Contact
      </p>

      <div className=" sm:hidden text-white pb-7 opacity-80 text-center font-bold text-3xl	">
        Get In Touch
      </div>
      <div className="hidden sm:block border-l-2 h-[350px] border-white absolute left-12 bottom-0 opacity-25 "></div>
      <div className="flex flex-row justify-around m-w-[100px] items-center w-full left-0 bottom-3 py-3 px-8 relative sm:flex-col  sm:left-8 sm:px-0 sm:py-10 sm:bottom-0 sm:w-min sm:absolute">
        <>
          <div className="border-b-2 w-full border-white absolute left-auto opacity-25 sm:border-b-0 sm:border-l-2 sm:w-0  "></div>
          {Object.entries(socialLink).map(([key, { icon, url }]) => (
            <SocialIconComponent key={key} icon={icon} url={url} />
          ))}
        </>
      </div>
      <div className="hidden sm:block border-l-2 h-[350px] border-white absolute right-12 bottom-0 opacity-25 "></div>
      <div className="text-white opacity-100 pb-4 text-center bg-[#0e1829] z-10 sm:absolute sm:rotate-90 sm:-right-16 sm:bottom-36 sm:p-0 ">
        <span className="sm:px-3 opacity-60 sm:opacity-25 hover:opacity-90 transition duration-200 ease-in trasnform sm:hover:scale-125 hover:z-50 hover:text-yellow-200">
          bandaymuzzamil@gmail.com
        </span>
      </div>
    </>
  );
}

export default SocialFollowComponent;
