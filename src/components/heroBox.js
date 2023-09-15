// import {useEffect, useState} from "react";
//
// export default function HeroBox() {
//     const texts = ["Michaela Majorošová", "a fullstack developer"];
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [visibleChars, setVisibleChars] = useState(0);
//     const [isAnimatingOut, setIsAnimatingOut] = useState(false);
//     const delayAfterVisible = 1000;
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isAnimatingOut) {
//                 if (visibleChars < texts[currentIndex].length) {
//                     setVisibleChars((prevChars) => prevChars + 1);
//                 } else {
//                     setTimeout(() => {
//                         setIsAnimatingOut(true);
//                     }, delayAfterVisible);
//                 }
//             } else {
//                 if (visibleChars > 0) {
//                     setVisibleChars((prevChars) => prevChars - 1);
//                 } else {
//                     setIsAnimatingOut(false);
//                     setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//                 }
//             }
//         }, 70);
//
//         return () => clearInterval(interval);
//     }, [currentIndex, visibleChars, isAnimatingOut]);
//
//
//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <img src="/ja.jpg" className="max-w-sm rounded-lg shadow-2xl" alt=""/>
//                 <div>
//                     <h5 className="mb-3 text-xl font-semibold">Hello there!</h5>
//                     <h1 className="text-5xl font-bold">I'm{" "}
//                         <span className={`text-transition ${isAnimatingOut ? 'out' : ''}`}>
//                             {texts[currentIndex].slice(0, visibleChars)}
//                         </span>
//                     </h1>
//                     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
//                         exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <button className="btn btn-primary">Get Started</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
