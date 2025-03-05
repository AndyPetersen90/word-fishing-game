import { useEffect, useState } from "react";
import PondScene from "./PondScene";
import Celebration from "./Celebration";

interface GamePageProps {
  gameWord: string;
  setGameWord: (word: string) => void;
}

const incorrectResponses = [
  "Oops! Not quite, try again!",
  "Almost! Give it another shot!",
  "Nice try! Keep going!",
  "Not this time, but you're getting closer!",
  "Good effort! Try another letter!",
  "Whoops! That's not the word.",
  "You're doing great! Give it another guess!",
  "Close! Let's try a different word!",
  "Not that one, but don't give up!",
  "Keep trying! You're on your way!",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function GamePage({ gameWord, setGameWord }: GamePageProps) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [fullGuess, setFullGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleLetterGuess = (letter: string) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);
      if (gameWord.includes(letter)) {
        setCorrectGuess(true);
        setTimeout(() => setCorrectGuess(false), 5000);
      }
    }
  };

  const handleFullGuess = () => {
    if (fullGuess.toLocaleLowerCase() === gameWord) {
      setTimeout(() => setShowCelebration(true), 500);
    } else {
      const randomResponse = incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)];
      alert(randomResponse);
    }
    setFullGuess("");
  };

  const correctLetters = gameWord.split("").filter((letter) => guesses.includes(letter)).length;
  const percentage = (correctLetters / gameWord.length) * 100;

  useEffect(() => {
    if (percentage === 100) {
      setTimeout(() => setShowCelebration(true), 6000);
    }
  }, [percentage]);

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={() => setGameWord("")}
        className="absolute ml-[90vw] mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-xs"
      >
        Restart Game
      </button>
      <h2 className="text-2xl font-bold mb-4">Guess the Word!</h2>

      <div className="flex gap-2 mb-4">
        {gameWord.split("").map((letter, index) => (
          <span key={index} className="text-3xl border-b-2 border-gray-600 w-8 text-center">
            {guesses.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-2 mb-4">
        {alphabet.map((letter) => (
          <button
            key={letter}
            disabled={guesses.includes(letter)}
            onClick={() => handleLetterGuess(letter)}
            className={`px-3 py-1 rounded border ${guesses.includes(letter) ? "bg-gray-300" : "bg-blue-200 hover:bg-blue-300"}`}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Guess the whole word"
        value={fullGuess}
        onChange={(e) => setFullGuess(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleFullGuess() : null)}
        className="border rounded p-2 mb-4"
      />
      <button onClick={handleFullGuess} className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">
        Submit Guess
      </button>

      <PondScene percentage={percentage} correctGuess={correctGuess} />
      <Celebration show={showCelebration} setGameWord={setGameWord} gameWord={gameWord} />
    </div>
  );
}

export default GamePage;
