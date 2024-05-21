import React, { useEffect, useMemo, useState } from "react";

export default function Home() {
  const texts = useMemo(
    () => ["Michaela Majorošová", "a fullstack developer"],
    [],
  );

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
  }, [currentIndex, visibleChars, isAnimatingOut, texts]);

  return (
    <>
      <div
        className="w-full min-h-screen antialiased bg-center leading-normal tracking-wider flex items-center justify-center bg-cover"
        style={{ backgroundImage: "url('header.png')" }}
      >
        <div className="text-center w-full -mt-16 sm:-mt-6 flex flex-col justify-center items-center">
          <div
            className="block rounded-lg w-4/5 sm:w-2/3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,75%,0.4)] dark:shadow-black/20 p-2 sm:py-10 sm:px-12"
            style={{
              backdropFilter: "saturate(200%) blur(25px)",
            }}
          >
            <p className="mb-14 mt-6 font-extrabold lg:text-3xl text-2xl text-[#2b2d47]">
              {"< WELCOME TO MY PORTFOLIO />"}
            </p>
            <h1 className="text-[#2b2d47] text-xl font-bold tracking-tight sm:text-3xl md:text-4xl xl:text-7xl">
              <span>Hello there!</span>
            </h1>
            <h1 className="mt-2 mb-8 text-[#2b2d47] text-xl font-bold tracking-tight sm:text-3xl md:text-4xl xl:text-7xl">
              {" "}
              I'm{" "}
              <span
                className={`break-words text-transition ${
                  isAnimatingOut ? "out" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(to right, #652f63, #535180, #2c526c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {texts[currentIndex].slice(0, visibleChars)}
              </span>
            </h1>
            {/*<div className="flex flex-row items-start justify-between w-full h-full">*/}
            {/*        <div className="py-1 rounded-2xl max-w-xs">*/}
            {/*            <p className="pb-1 font-extrabold text-4xl" style={{*/}
            {/*           &fd     background: 'linear-gradient(to right, #652f63, #535180, #2c526c)',*/}
            {/*                WebkitBackgroundClip: 'text',*/}
            {/*                WebkitTextFillColor: 'transparent'*/}
            {/*            }}>*/}
            {/*                {"<FRONTEND>"}*/}
            {/*            </p>*/}

            {/*            <p className="text-black font-[500] text-[16px]"*/}
            {/*               style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.65)'}}>*/}
            {/*                I love frontend for the creative visual design.</p>*/}
            {/*    </div>*/}
            {/*        <div className="rounded-2xl max-w-[250px]">*/}
            {/*            <p className="pb-1 font-extrabold text-4xl" style={{*/}
            {/*                background: 'linear-gradient(to right, #652f63, #535180, #2c526c)',*/}
            {/*                WebkitBackgroundClip: 'text',*/}
            {/*                WebkitTextFillColor: 'transparent'*/}
            {/*            }}>*/}
            {/*                {"<BACKEND>"}*/}
            {/*            </p>*/}
            {/*            <p className="text-black font-[500] text-[16px]"*/}
            {/*               style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.65)'}}>*/}
            {/*                I'm passionate about backend because it solves complex problems.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  );
}
