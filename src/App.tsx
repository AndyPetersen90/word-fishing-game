import { useState } from "react";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";

function App() {
  const [gameWord, setGameWord] = useState("");

  return <div className="App">{gameWord ? <GamePage gameWord={gameWord} /> : <StartPage onStart={setGameWord} />}</div>;
}

export default App;
