import { React, useState } from "react";


const color1 = {
  rock: "#DB2E4D",
  paper: "#4664F4",
  scissors: "#EB9F0E"
};

const color2 = {
  rock: "#7d2139",
  paper: "#2A45C2",
  scissors: "#C76C1B"
};

const iconSrc = {
  rock: '/icon-rock.svg',
  paper: '/icon-paper.svg',
  scissors: '/icon-scissors.svg'
};


export default function Actions({ type, onClick, highlight = false, label, hidden = false }) {
  
  const [hovered, setHovered] = useState(false);

  if(!hidden && type)
      return (
        <button
        className={`items-center
          relative rounded-full mx-auto
          w-[198px] h-[203px] transition-all duration-150
          ${hovered ? 'shadow-[0_0_0_20px_rgba(255,255,255,0.05)]' : ''}
          ${highlight ? "shadow-[0_0_0_60px_rgba(255,255,255,0.1)]" : ""}
        `}
        style={hidden ? {opacity: 0.3} : {}}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label && <span className="text-white text-sm mb-4 tracking-wider">{label}</span>}
        <div
          style={{
            background: color2[type],
            boxShadow: `0 4px 0 ${color2[type]}`,
          }}
          className="absolute left-0 top-0 w-[198px] h-[203px] rounded-full z-0"
        />
        
        <div
          style={{
            background: color1[type],
          }}
          className="absolute left-0 top-0 w-[198px] h-[194px] rounded-full z-10"
        />
        
        <div
          className={`
            absolute left-6 top-6 z-20
            w-[152px] h-[152px] rounded-full
            flex items-center justify-center
            bg-gradient-to-b from-[#F3F3F3] to-[#DADADA]
            shadow-[inset_0_8px_0_0_#BABFD4]
          `}
        >
          <img
            src={iconSrc[type]}
            alt="Rock"
            className="w-[70px] h-[70px]"
          />
        </div>
      </button>
    )
    
    return (
      <div className="items-center relative mx-auto w-[198px] h-[203px]w-[198px] h-[203px] bg-black/[.05] rounded-full" /> 
    )
}