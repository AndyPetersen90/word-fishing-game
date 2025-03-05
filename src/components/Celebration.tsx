import ReactConfetti from "react-confetti";
import blueBrownFish from "../assets/blueBrownFish.png";
import blueFish from "../assets/blueFish.png";
import blueSpottedFish from "../assets/blueSpottedFish.png";
import greenPurpleFish from "../assets/greenPurpleFish.png";
import greenRedFish from "../assets/greeRedFish.png";
import orangeBlueFish from "../assets/orangeBlueFish.png";
import orangeFish from "../assets/orangeFish.png";
import redTealFish from "../assets/redTealFish.png";

const fishImages = [blueBrownFish, blueFish, blueSpottedFish, greenPurpleFish, greenRedFish, orangeBlueFish, orangeFish, redTealFish];

interface CelebrationProps {
  show: boolean;
  gameWord: string;
  setGameWord: (word: string) => void;
}

function Celebration({ show, setGameWord, gameWord }: CelebrationProps) {
  const { width, height } = { width: window.innerWidth, height: window.innerHeight };
  const randomFish = fishImages[Math.floor(Math.random() * fishImages.length)];
  const word = gameWord.toUpperCase();

  return show ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 10 }}>
      <ReactConfetti width={width} height={height} numberOfPieces={500} style={{ zIndex: 10 }} />
      <div className="bg-white p-6 rounded-lg shadow-lg text-center" style={{ zIndex: 20 }}>
        <h1 className="text-4xl font-bold mb-4">You Caught a WordFish!</h1>
        <h2 className="text-4xl font-bold mt-8 mb-2">🎉🎉 "{word}" 🎉🎉</h2>
        <img src={randomFish} alt="Random Fish Clipart" className="w-[25vw] h-auto mx-auto" />
        <button onClick={() => setGameWord("")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Play Again
        </button>
      </div>
    </div>
  ) : null;
}

export default Celebration;
