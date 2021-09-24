import React from "react";

function LogoComponent() {
  return (
    <div
      className="border-2 border-dashed border-yellow-200 rounded-2xl w-min p-1"
      onClick={() => {
        window.location.reload(false);
      }}
    >
      <p className="text-white hover:text-yellow-200 font-mono text-center text-5xl  ">
        mb
      </p>
    </div>
  );
}

export default LogoComponent;
