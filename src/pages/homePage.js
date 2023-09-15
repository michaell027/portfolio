import Header from "../components/header";
import About from "../components/about";
import { useState } from "react";
import Education from "../components/education";
import Contact from "../components/contact";
import Home from "../components/home";
import Skills from "../components/skills";
import Projects from "../components/projects";

export default function HomePage() {
  const [component, setComponent] = useState("home"); // Lift state up

  return (
    <div>
      <Header component={component} setComponent={setComponent} />
      {(component === "home" && <Home />) ||
        (component === "about" && <About />) ||
        (component === "education" && <Education />) ||
        (component === "contact" && <Contact />) ||
        (component === "skills" && <Skills />) ||
        (component === "projects" && <Projects />)}
      <div
        id="cover"
        className="hidden absolute left-0 top-0 min-h-screen w-screen bg-black opacity-60 transition duration-600 ease-in-out"
      ></div>
      {/*</div>*/}
    </div>
  );
}
