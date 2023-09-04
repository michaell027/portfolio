import Header from "../components/header";
import HeroBox from "../components/heroBox";
import About from "../components/about";
import {useState} from "react";
import Education from "../components/education";
import Mobile from "../components/mobile";
import Home from "../components/home";
import Skills from "../components/skills";

export default function HomePage() {
    const [component, setComponent] = useState('home'); // Lift state up

    return (
        <div>
            <Header component={component} setComponent={setComponent} />
            {/*<div className="ml-[185px] mr-6">*/}
            {(component === "home" && <Home/>) ||
            (component === "about" && <About/>) ||
            (component === "education" && <Education/>) ||
            (component === "contact" && <Mobile/>) ||
            (component === "skills" && <Skills/>)
            }
            {/*</div>*/}
        </div>
    );
}