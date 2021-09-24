import React from "react";

function HeroComponent() {
  return (
    <div className="flex flex-col h-auto my-auto text-[#ccd6f6] ">
      <p className="text-yellow-200 font-mono">Hello my name is</p>
      <h2 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold capitalize">
        Muzzamil Banday.
      </h2>
      <h2 className="pt-5  text-3xl opacity-60 font-bold capitalize">
        I build thing for the web.
      </h2>
      <p className="pt-5 leading-6 ">
        I’m a full stack developer engineer specializing in building all round
        digital soultions. Currently, I’m working as at
        <a
          href={"https://www.kantime.com"}
          target={"_blank"}
          className="text-yellow-200 "
          rel="noreferrer"
        >
          KanTime Inc.
        </a>
      </p>
    </div>
  );
}

export default HeroComponent;
