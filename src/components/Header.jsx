export default function Header({ score }) {
    return (
      <div className="flex justify-between items-center border-2 border-gray-500 rounded-lg p-4 w-[460px] mx-auto mt-8">
        <div className="mr-10">
          <img src="/logo.svg" />
        </div>
        <div className="bg-white rounded-md px-10 py-6 flex flex-col items-center">
          <span className="text-xl text-[#2A45C2] tracking-wide">SCORE</span>
          <span className="text-5xl font-bold text-[#565468]">{score}</span>
        </div>
      </div>
    );
  }