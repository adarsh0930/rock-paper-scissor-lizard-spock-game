import { useState } from 'react'
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#1f3756] to-[#141539] relative">
      <div className="w-full h-2 bg-gradient-to-br from-[#1f3756] to-[#141539]" />
        <Header score={score} />
    </div>
  )
}

export default App
