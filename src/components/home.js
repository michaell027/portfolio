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
            <div className="w-full min-h-screen antialiased bg-center leading-normal tracking-wider flex items-center justify-center bg-cover"
                 style={{backgroundImage: "url('header.png')"}}>

                <div className="text-center w-full flex flex-col justify-center items-center">

                    <div
                        className="block rounded-lg w-2/3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,75%,0.4)] dark:shadow-black/20 py-10 px-12"
                        style={{
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
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <div className="relative">
                                <img className="rounded-3xl" src="/michaela_majorosova.png" alt="Michaela Majorošová"/>
                                <div className="absolute top-0 left-0 flex items-start mt-8 ml-8">
                                    <div className="bg-gray-200/40 py-1 rounded-2xl max-w-xs">
                                        <p className="pb-1 font-extrabold text-4xl" style={{
                                            background: 'linear-gradient(to right, #652f63, #535180, #2c526c)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {"<FRONTEND>"}
                                        </p>

                                        <p className="text-black font-[500] text-[16px]" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
                                            I love frontend for the creative visual design.</p>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 flex items-end mb-8 mr-8">
                                    <div className="bg-gray-200/40 rounded-2xl max-w-[250px]">
                                        <p className="pb-1 font-extrabold text-4xl" style={{
                                            background: 'linear-gradient(to right, #652f63, #535180, #2c526c)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {"<BACKEND>"}
                                        </p>
                                        <p className="text-black font-[500] text-[16px]" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}>
                                            I'm passionate about backend because it solves complex problems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
