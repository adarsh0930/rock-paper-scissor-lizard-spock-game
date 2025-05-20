import { useState } from 'react'
import Header from "./components/Header";
import Rules from "./components/Rules";
import Game from "./components/Game"

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#1f3756] to-[#141539] relative">
      <div className="w-full h-2 bg-gradient-to-br from-[#1f3756] to-[#141539]" />
        <Header score={score} />
        <Game setScore={setScore} score={score} />
        <Rules />
    </div>
  )
}

export default App
