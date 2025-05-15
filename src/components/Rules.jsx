import { useState } from "react";
import RulesModal from "./RulesModal";

export default function Rules(){
    const [showRules, setShowRules] = useState(false);

    return(
    <>        
        <div className="absolute right-8 bottom-8">
            <button
            className="bg-[#141539] border border-white rounded-lg text-white px-10 py-2 tracking-widest text-sm"
            onClick={() => setShowRules(true)}
            >
            RULES
            </button>
        </div>
        <RulesModal show={showRules} onClose={() => setShowRules(false)} />
    </>
    ); 
}