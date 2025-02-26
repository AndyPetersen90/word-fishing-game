import { useEffect, useState } from "react";
import fishShadow from "../assets/fishShadow.png";
import lilyPad from "../assets/lily-pad-clipart.webp";
import pond from "../assets/pond.png";

interface PondSceneProps {
  percentage: number;
  correctGuess: boolean;
}

function PondScene({ percentage, correctGuess }: PondSceneProps) {
  const [animatePull, setAnimatePull] = useState(false);

  useEffect(() => {
    if (correctGuess) {
      setAnimatePull(true);
      setTimeout(() => setAnimatePull(false), 500);
    }
  }, [correctGuess]);

  return (
    <div className="relative w-full h-160 mt-10 rounded-lg overflow-hidden">
      {/* Pond Background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${pond})`,
        }}
      >
        {/* Fish with Wiggle Animation */}
        <div className="absolute top-35 left-30 w-[80%] h-[65%]">
          <div className="absolute top-25 transition-transform duration-500" style={{ transform: `translateX(${(percentage / 100) * 82}rem)` }}>
            <img src={fishShadow} alt="Fish" className="shadow-fish w-25 h-18 opacity-55 fish-wiggle" />
          </div>
        </div>
      </div>

      {/* Fisherman - Positioned on the Shore */}
      <div
        className="absolute"
        style={{
          right: "6%", // Adjusted to keep the fisherman on the shore
          bottom: "45%",
          zIndex: 2, // On top of shoreline and water
        }}
      >
        <div className="fisherman relative">
          {/* Fisherman's Hat */}
          <div className="hat bg-yellow-500 w-10 h-4 rounded-full absolute top-0 left-0"></div>

          {/* Fisherman's Head */}
          <div className="head bg-yellow-400 w-8 h-8 rounded-full"></div>

          {/* Fisherman's Body */}
          <div className="body bg-blue-600 w-6 h-12 rounded-t-lg mt-1"></div>

          {/* Fishing Pole */}
          <div
            className={`pole absolute origin-bottom-left ${animatePull ? "animate-pull" : ""}`}
            style={{
              width: "3px",
              height: "120px",
              backgroundColor: "black",
              transform: "rotate(-25deg)",
              bottom: "20px",
              left: "15px",
            }}
          ></div>
        </div>
      </div>

      {/* Pond Decor */}
      <div className="absolute bottom-8 left-0 z-3">
        <img src={lilyPad} alt="Lily Pad" className="w-12 h-6 absolute left-20 bottom-4" />
        <img src={lilyPad} alt="Lily Pad" className="w-12 h-6 absolute left-32 bottom-6" />
      </div>
    </div>
  );
}

export default PondScene;
