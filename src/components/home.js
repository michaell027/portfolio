import React, {useEffect, useState} from 'react';

export default function Home() {
    const texts = ["Michaela Majorošová", "a fullstack developer"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleChars, setVisibleChars] = useState(0);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const delayAfterVisible = 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimatingOut) {
                if (visibleChars < texts[currentIndex].length) {
                    setVisibleChars((prevChars) => prevChars + 1);
                } else {
                    setTimeout(() => {
                        setIsAnimatingOut(true);
                    }, delayAfterVisible);
                }
            } else {
                if (visibleChars > 0) {
                    setVisibleChars((prevChars) => prevChars - 1);
                } else {
                    setIsAnimatingOut(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
        }, 70);

        return () => clearInterval(interval);
    }, [currentIndex, visibleChars, isAnimatingOut]);


    return (
        <>
                <div className="w-full h-screen"
                     style={{ backgroundImage: "url('header.png')" }}>
                    <div className="text-center h-full flex justify-center items-center">
                        <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,75%,0.4)] dark:shadow-black/20 md:py-16 md:px-12" style={{
                            backdropFilter: "saturate(200%) blur(25px)"
                        }}>
                            <h1 className="mt-6 mb-16 text-[#2b2d47] text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                <span className="text-5xl">Hello there!</span>
                                <br/>
                                I'm{" "}
                                <span className={`text-[#6b336c] text-transition ${isAnimatingOut ? 'out' : ''}`}>
                            {texts[currentIndex].slice(0, visibleChars)}
                        </span>
                            </h1>
                        </div>
                    </div>
                </div>
        </>
    );
}
