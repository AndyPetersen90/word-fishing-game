import { useState } from "react";

const StartPage = ({ onStart }: { onStart: (word: string) => void }) => {
  const [word, setWord] = useState("");

  const handleStart = () => {
    if (word.trim()) {
      onStart(word.trim().toLowerCase());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">Word Fishing</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? handleStart() : null)}
        className="border rounded p-2 mb-4"
      />
      <button onClick={handleStart} className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">
        Start
      </button>
    </div>
  );
};

export default StartPage;
