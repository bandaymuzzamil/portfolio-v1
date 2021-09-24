import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIconComponent({ icon, url }) {
  return (
    <div className="cursor-pointer bg-[#0e1829] z-10 px-2 sm:px-0 sm:py-2 ">
      <a href={url} target={"_blank"} rel="noreferrer" className="text-center">
        <FontAwesomeIcon
          className="text-white w-8 opacity-60 sm:opacity-25 hover:opacity-90 hover:animate-bounce sm:hover:animate-pulse transition duration-200 ease-in trasnform sm:hover:scale-125 hover:z-50 hover:text-yellow-200 "
          icon={icon}
        />
      </a>
    </div>
  );
}

export default SocialIconComponent;
