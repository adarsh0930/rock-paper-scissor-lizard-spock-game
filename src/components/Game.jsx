import Actions from "./Actions";

const winConditions = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

export default function Game({ setScore, score }) {
  return (
    <div className="relative flex flex-col items-center justify-center mt-28">
        <img
          src="/bg-triangle.svg"
          alt="triangle"
          className="absolute top-7 left-1/2 -translate-x-1/2 z-0"
        />
        <div className="relative w-80 h-64 flex justify-center items-center z-10">
          <div className="absolute -left-20 -top-10">
            <Actions type="paper" />
          </div>
          <div className="absolute -right-20 -top-10">
            <Actions type="scissors" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-32">
            <Actions type="rock" />
          </div>
        </div>
      </div>
  );
}