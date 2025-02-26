import { useState } from "react";
import PondScene from "./PondScene";

interface GamePageProps {
  gameWord: string;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function GamePage({ gameWord }: GamePageProps) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [fullGuess, setFullGuess] = useState("");
  const [correctGuess, setCorrectGuess] = useState(false);

  const handleLetterGuess = (letter: string) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);
      if (gameWord.includes(letter)) {
        setCorrectGuess(true);
        setTimeout(() => setCorrectGuess(false), 500);
      }
    }
  };

  const handleFullGuess = () => {
    if (fullGuess.toLocaleLowerCase() === gameWord) {
      alert("You guessed the word!");
    } else {
      alert("Incorrect guess");
    }
    setFullGuess("");
  };

  const correctLetters = gameWord.split("").filter((letter) => guesses.includes(letter)).length;
  const percentage = (correctLetters / gameWord.length) * 100;

  return (
    <div className="flex flex-col items-center p-4">
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
        className="border rounded p-2 mb-4"
      />
      <button onClick={handleFullGuess} className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">
        Submit Guess
      </button>

      <PondScene percentage={percentage} correctGuess={correctGuess} />
    </div>
  );
}

export default GamePage;
