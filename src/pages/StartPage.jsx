import { useState } from "react";

import Factions from "./Factions";

function StartPage() {
    const [enter, setEnter] = useState(false);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-500 z-0 ${
                    enter ? "blur-sm" : ""
                }`}
                style={{ backgroundImage: "url('/heart-of-democracy-4k.jpg')" }}
            ></div>

            {!enter && (
                <div className="relative z-10 h-full w-full flex items-end justify-center pb-[8%]">
                    <button
                        onClick={() => setEnter(true)}
                        className="px-8 py-4 text-xl bg-gray-900/70 border-2 border-white rounded-lg text-white hover:bg-gray-900/90 transition transform hover:scale-105"
                    >
                        Enter Page
                    </button>
                </div>
            )}

            {/* New Page or Content */}
            {enter && (
                <>
                    <div className="absolute inset-0 z-10 bg-gray-900/70 m-5 p-5 flex items-center justify-center text-white text-xl drop-shadow-lg rounded-xl">
                        <Factions />
                    </div>
                </>
            )}
        </div>
    );
}

export default StartPage;
