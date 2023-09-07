import {useEffect, useState} from "react";

export default function Header({component, setComponent}) {
    const [menuOpen, setMenuOpen] = useState(true);
    const [hideItems, setHideItems] = useState(false);
    const [hoverHome, setHoverHome] = useState(false);
    const [hoverAbout, setHoverAbout] = useState(false);
    const [hoverEducation, setHoverEducation] = useState(false);
    const [hoverSkills, setHoverSkills] = useState(false);
    const [hoverProjects, setHoverProjects] = useState(false);
    const [hoverContact, setHoverContact] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (menuOpen) {
            timeoutId = setTimeout(() => {
                setHideItems(true);
            }, 175);
        } else {
            clearTimeout(timeoutId);
            setHideItems(false);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };


    return (
        <div
            className={`w-auto z-10 fixed flex ml-4 mt-2 transition-height duration-500 ease-in-out ${menuOpen ? 'h-[50px]' : 'h-[360px]'}`}>
            <ul className="bg-gray-800 w-12 rounded-3xl flex flex-col items-center justify-center gap-4 py-4">
                <li>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white"
                       onClick={toggleMenu}>
                        {!menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-5 h-5">
                                <path fillRule="evenodd"
                                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                      clipRule="evenodd"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-5 h-5">
                                <path fillRule="evenodd"
                                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        )}
                    </a>
                </li>
                <li className={`${hideItems ? 'hidden' : ''}`} onMouseEnter={() => setHoverHome(true)}
                    onClick={() => setComponent('home')} onMouseLeave={() => setHoverHome(false)}>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white svg-a">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                    </a>
                </li>
                <li className={`${hideItems ? 'hidden' : ''}`} onMouseEnter={() => setHoverAbout(true)}
                    onClick={() => setComponent('about')} onMouseLeave={() => setHoverAbout(false)}>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${hideItems ? 'hidden' : ''}`} onMouseEnter={() => setHoverEducation(true)}
                    onClick={() => setComponent('education')} onMouseLeave={() => setHoverEducation(false)}>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-5 h-5">
                            <path
                                d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
                            <path
                                d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"/>
                            <path
                                d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${hideItems ? 'hidden' : ''}`}>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white"
                       onMouseEnter={() => setHoverSkills(true)} onClick={() => setComponent('skills')}
                       onMouseLeave={() => setHoverSkills(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${hideItems ? 'hidden' : ''}`}>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white"
                       onMouseEnter={() => setHoverProjects(true)} onClick={() => setComponent('projects')}
                       onMouseLeave={() => setHoverProjects(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-5 h-5">
                            <path fillRule="evenodd"
                                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>
                </li>
                <li className={`${hideItems ? 'hidden' : ''}`}>
                    <a className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 text-white"
                       onMouseEnter={() => setHoverContact(true)} onClick={() => setComponent('contact')}
                       onMouseLeave={() => setHoverContact(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-5 h-5">
                            <path
                                d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"/>
                            <path
                                d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"/>
                        </svg>
                    </a>
                </li>
            </ul>

            <ul className={`flex flex-col gap-[28px] py-4 pl-2 pt-[65px] transition-opacity ease-in-out duration-100 ${hideItems ? 'opacity-0' : 'opacity-100'}`}>
                <li className={`flex items-center gap-2 ${hoverHome || component === 'home' ? 'border-l-4 border-white' : ''}`}>
                    <h5 className="text-white pl-1 menu-text">Home</h5>
                </li>
                <li className={`flex items-center gap-2 ${hoverAbout || component === 'about' ? 'border-l-4 border-white' : ''}`}>
                    <h5 className="text-white pl-1 menu-text">About</h5>
                </li>
                <li className={`flex items-center gap-2 ${hoverEducation || component === 'education' ? 'border-l-4 border-white' : ''}`}>
                    <h5 className="text-white pl-1 menu-text">Education</h5>
                </li>
                <li className={`flex items-center gap-2 ${hoverSkills || component === 'skills' ? 'border-l-4 border-white' : ''}`}>
                    <h5 className="text-white pl-1 menu-text">Skills</h5>
                </li>
                <li className={`flex items-center gap-2 ${hoverProjects || component === 'projects' ? 'border-l-4 border-white' : ''}`}>
                    <h5 className="text-white pl-1 menu-text">Projects</h5>
                </li>
                <li className={`flex items-center gap-2 ${hoverContact || component === 'contact' ? 'border-l-4 border-white' : ''}`}>
                    <h5 className="text-white pl-1 menu-text">Contact</h5>
                </li>
            </ul>
        </div>
    );
}
