// import { useEffect, useState } from "react";
import fishShadow from "../assets/fishShadow.png";
import lilyPad from "../assets/lily-pad-clipart.webp";
import pond from "../assets/pond.png";
import fisherman from "../assets/fisherman.svg";
import fishermanGif from "../assets/fishermanGif.gif";

interface PondSceneProps {
  percentage: number;
  correctGuess: boolean;
}

function PondScene({ percentage, correctGuess }: PondSceneProps) {
  return (
    <div className="relative w-full h-[65vh] pt-10 rounded-lg overflow-hidden">
      {/* Pond Background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${pond})`,
          backgroundSize: " 90%",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        {/* Fish with Wiggle Animation */}
        <div className="absolute top-[13vh] left-[9vw] w-[80%] h-[60%]">
          <div className="absolute top-[9vh] transition-transform duration-5500" style={{ transform: `translateX(${(percentage / 100) * 82}vw)` }}>
            <img src={fishShadow} alt="Fish" className="shadow-fish w-25 h-18 opacity-55 fish-wiggle" />
          </div>
        </div>
      </div>

      {/* Fisherman - Positioned on the Shore */}
      <div
        className="absolute"
        style={{
          right: "5%",
          bottom: correctGuess ? "45%" : "42%",
          zIndex: 1,
        }}
      >
        <img
          src={correctGuess ? fishermanGif : fisherman}
          key={correctGuess ? "playing" : "paused"}
          alt="Fisherman gif"
          className={correctGuess ? `w-[15vw] h-auto` : `w-[19vw] h-auto`}
        />
      </div>

      {/* Pond Decor */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={lilyPad} alt="Lily Pad" className="w-[3.5vw] h-[3vh] absolute left-[20vw] bottom-[16vh]" />
        <img src={lilyPad} alt="Lily Pad" className="w-[3.5vw] h-[3vh] absolute left-[28vw] bottom-[42vh]" />
        <img src={lilyPad} alt="Lily Pad" className="w-[3.5vw] h-[3vh] absolute left-[55vw] bottom-[16vh]" />
        <img src={lilyPad} alt="Lily Pad" className="w-[3.5vw] h-[3vh] absolute left-[75vw] bottom-[40vh]" />
      </div>
    </div>
  );
}

export default PondScene;
