import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-start justify-center">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-2">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
