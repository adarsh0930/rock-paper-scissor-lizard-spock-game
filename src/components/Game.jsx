import { useState } from "react";
import Actions from "./Actions";

const winConditions = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

export default function Game({ setScore, score }) {
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  function handlePlay(type) {
    setPlayer(type);
    setComputer(null);
    setResult("");
    setShowResult(false);

    const remaining = choices.filter(c => c !== type);

    setTimeout(() => {
      
      const computerPick = remaining[Math.floor(Math.random() * remaining.length)];
      setComputer(computerPick);

      setTimeout(() => {
        let res;
        if (type === computerPick) res = "DRAW";
        else if (winConditions[type] === computerPick) res = "YOU WIN";
        else res = "YOU LOSE";
        setResult(res);
        setShowResult(true);

        setScore(s => res === "YOU WIN" ? s + 1 : res === "YOU LOSE" ? Math.max(0, s - 1) : s);
      }, 200); 
    }, 2000);
  }

  function handleReset() {
    setPlayer(null);
    setComputer(null);
    setResult("");
    setShowResult(false);
  }

  if (player) {
    return (
      <div className="flex items-center justify-center mt-36 gap-6"> 
      
        <Actions
          type={player}
          highlight={showResult && result === "YOU WIN"}
          label="YOU PICKED"
        />
        
        <div className="flex flex-col items-center">
          <span className={`text-4xl font-bold mt-10 mb-6 ${result === "YOU WIN" ? "text-white" : result === "YOU LOSE" ? "text-[#e54a65]" : "text-blue-200"}`}>
            {showResult ? result : ""}
          </span>
          {showResult && (
            <button
              className="mt-4 px-8 py-3 bg-white text-[#293251] text-lg font-semibold tracking-widest rounded-lg shadow hover:bg-gray-100 transition"
              onClick={handleReset}
            >
              PLAY AGAIN
            </button>
          )}
        </div>
        
        <Actions
          type={computer}
          highlight={showResult && result === "YOU LOSE"}
          label="THE HOUSE PICKED"
          hidden={!computer}
        />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center mt-28">
        <img
          src="/bg-triangle.svg"
          alt="triangle"
          className="absolute top-7 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative w-80 h-64 flex justify-center items-center z-10">
          <div className="absolute -left-20 -top-10">
            <Actions type="paper" onClick={() => handlePlay("paper")}/>
          </div>
          <div className="absolute -right-20 -top-10">
            <Actions type="scissors" onClick={() => handlePlay("scissors")}/>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-32">
            <Actions type="rock" onClick={() => handlePlay("rock")}/>
          </div>
        </div>
      </div>
  );
}