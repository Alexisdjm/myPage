import First from './introduction.js';
import SocialMenu from './socialmedia.js';
import Skills from "./skills.js";
import Projects from "./projects.js";
import Education from "./education.js";
import Technologies from './technologies.js'
import Contact from './contactForm';
import Header from './header.js'
import Footer from './footer.js'
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header/>
            <First glitchtext='Alexis Jimenez' loop={true} bool={true} first='Full Stack Web Developer' second='Electronic Engineer'/>
            <SocialMenu/>
            <Skills/>
            <Projects/>
            <Education/>
            <Technologies/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home