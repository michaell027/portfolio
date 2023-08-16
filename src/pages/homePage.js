import Header from "../components/header";
import HeroBox from "../components/heroBox";
import Web from "../components/web";
import {useState} from "react";
import Code from "../components/code";

export default function HomePage() {
    const [component, setComponent] = useState('home'); // Lift state up

    return (
        <div>
            <Header component={component} setComponent={setComponent} />
            {(component === "home" && <HeroBox/>) ||
            (component === "about" && <Web/>) ||
            (component === "education" && <Code/>)
            }
        </div>
    );
}