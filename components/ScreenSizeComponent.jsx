import React from "react";

function ScreenSizeComponent() {
  return (
    <div className="absolute">
      <div>
        <div className="text-white sm:invisible"> xl</div>
        <div className="text-white invisible sm:visible md:invisible"> sm</div>
        <div className="text-white invisible md:visible lg:invisible"> md</div>
        <div className="text-white invisible lg:visible xl:invisible"> lg</div>
        <div className="text-white invisible xl:visible 2xl:invisible"> xl</div>
        <div className="text-white invisible 2xl:visible"> 2xl</div>
      </div>
    </div>
  );
}

export default ScreenSizeComponent;
