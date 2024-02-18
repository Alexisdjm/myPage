import Header from "./header.js"
import Footer from "./footer.js"
import First from "./introduction.js"
import Boxes from "./aboutBoxes.js"
import SocialMenu from "./socialmedia.js"
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header/>
            <First glitchtext='About Me' bool={false} align='center'/>
            <SocialMenu/>
            <Boxes/>
            <Footer/>
        </>
    )
}

export default About