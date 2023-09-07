import Header from "../components/header";
import HeroBox from "../components/heroBox";
import About from "../components/about";
import {useState} from "react";
import Education from "../components/education";
import Contact from "../components/contact";
import Home from "../components/home";
import Skills from "../components/skills";
import Projects from "../components/projects";

export default function HomePage() {
    const [component, setComponent] = useState('home'); // Lift state up

    return (
        <div>
            <Header component={component} setComponent={setComponent} />
            {/*<div className="ml-[185px] mr-6">*/}
            {(component === "home" && <Home/>) ||
            (component === "about" && <About/>) ||
            (component === "education" && <Education/>) ||
            (component === "contact" && <Contact/>) ||
            (component === "skills" && <Skills/>) ||
            (component === "projects" && <Projects/>)
            }
            {/*</div>*/}
        </div>
    );
}