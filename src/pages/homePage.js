import Header from "../components/header";
import HeroBox from "../components/heroBox";
import Web from "../components/web";
import {useState} from "react";
import Code from "../components/code";
import Mobile from "../components/mobile";

export default function HomePage() {
    const [component, setComponent] = useState('home'); // Lift state up

    return (
        <div className="border-2 border-black">
            <Header component={component} setComponent={setComponent} />
            <div className="ml-[185px] mr-6">
            {(component === "home" && <HeroBox/>) ||
            (component === "about" && <Web/>) ||
            (component === "education" && <Code/>) ||
            (component === "contact" && <Mobile/>)
            }
            </div>
        </div>
    );
}