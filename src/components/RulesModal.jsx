export default function RulesModal({ show, onClose }) {
    if (!show) return null;
    return (
      <div className="fixed z-30 inset-0 flex items-center justify-center bg-black/60">
        <div className="bg-white p-8 rounded-xl relative flex flex-col items-center">
          <div className="mb-10">
            <p className="text-[#3B4262] text-3xl absolute top-4 font-extrabold left-4">Rules</p>
            <img src="/icon-close.svg" alt="Close" className="absolute top-4 right-4 w-6 h-6" onClick={onClose}/>
          </div>
          
          <img src="/image-rules.svg" alt="Rules" className="w-80"/>
        </div>
      </div>
    );
  }