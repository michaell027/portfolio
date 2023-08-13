import Header from "../components/header";
import HeroBox from "../components/heroBox";
import Web from "../components/web";
import {useState} from "react";

export default function HomePage() {
    const [component, setComponent] = useState('home'); // Lift state up

    return (
        <div>
            <Header component={component} setComponent={setComponent} />
            {(component === "home" && <HeroBox/>) ||
            (component === "about" && <Web/>)
            }
        </div>
    );
}