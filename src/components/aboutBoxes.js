import Carousel from "react-multi-carousel";
import images from "../images/exporting";

const Boxes = () => {

    const content = {
        myself: 'My name is Alexis David Jiménez Mendoza, I am 23 years old, I am from Barquisimeto, Venezuela, electronic engineer and Full Stack Web Developer. I completed my studies in electronic engineer and my certification at edx Harvard as a Full Stack Web Developer in 2022. I currently work as a frontend web developer at Meraki Vision agency. In my job, I am responsible for shopify themes development, user interface design, creating new features, installing and configuring apps. My passion is technology, especially software development, that is why in my free time, I am practicing and learning code, in order to improve my skills, ability to solve problems and learn about new technologies such as frameworks, development tools, libraries, new languages ​​and anything related to technology.',
        developer: 'I am a Full Stack Web Developer, I really like the front end and UX UI design,  however, I am very interested in backend, SQL, non SQL databases and more. I am extremely demanding with my work, always focusing on implementing  code following the best practices and guaranteening the functionality of the project.',
        backend: 'As a Full Stack developer, in my experience I have needed to learn concepts and use technologies related to backend or website functionality. I currently use django, which is a backend framework that uses python as its language. However I am interested in learning more and studying new technologies like Node.js, Express.js, Fast API, Flask, SQL databases and more.',
        frontend: 'In my projects, I usually focus a lot on the visual part and everything related to the frontend. As a developer, I use HTML and css, plus I feel very comfortable working with javascript and CSS frameworks like Bootstrap and TailwindCSS. Currently, I use React.js to create the interfaces in my projects, however, I want to learn how to use different technologies like vue.js, solid.js and frontend frameworks like Angular.',
        design1: 'Usually, I design the website’s interface and select the assets before starting the development in code. My favorite design tool is Fingma, used to design the interface of the website for desktop and mobile devices. Finally, I select the font and the color palette.',
        design2: 'In addition, I use other tools to select the assets such as icons and images. Among these tools is flaticon, font awesome and material design icons, which allow me to select a large number of icons in different formats. In addition, I use pexels and freepiks to download images in good quality and adobe illustrator to edit these images',
        iwant: 'I want to study and be more prepare as a developer, an engineer and professional. I am currently very interested in continuing my studies in game development and learning about mobile development using technologies such as react native and flutter. In addition, I would like to learn about desktop application development and do a postgraduate degree in artificial intelligence.',
        hobbies: 'In my free time, I play video games. I really like the games of the call of duty saga, overwatch, Titanfall, Battlefield, fromsoftware games, playstation exclusives and single player games. On the other hand, I really like science fiction movies, especially those related to technology like Ironman, Pacific rim, Alien and Starwars.'
    }

    const Images = ({css, img1, img2, img3, img4, img5, img6}) => {
        return(
            <div className={css}>
                { img1 ? <img className="icons-about-dimensions" src={img1} alt='icon'></img> : '' }
                { img2 ? <img className="icons-about-dimensions" src={img2} alt='icon'></img> : '' }
                { img3 ? <img className="icons-about-dimensions" src={img3} alt='icon'></img> : '' }
                { img4 ? <img className="icons-about-dimensions" src={img4} alt='icon'></img> : '' }
                { img5 ? <img className="icons-about-dimensions" src={img5} alt='icon'></img> : '' }
                { img6 ? <img className="icons-about-dimensions" src={img6} alt='icon'></img> : '' }
            </div>
        )
    }

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1351 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1350, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
    };

    return(
        <div className="flex-col align-center about-boxes-container">
            <div className="my-resume-container flex-center card-space-gap">
                <div className="card-align-bg myself-card-dimensions flex-col align-center inner-card-gap margin-side-40">
                    <h4 className="about-boxes-title justify-center-text">Who Am I ?</h4>
                    <p className="page-content justify-center-text myself-content">{content.myself}</p>
                    <Images css='flex-center align-center first-gap grid-box-2-images' img1={images.engineer} img2={images.ui} img3={images.web} img4={images.graduation}/>
                </div>
            </div>
            <div className="cien what-i-do">
                <h4 className="about-boxes-title justify-center-text">What I Do in Code</h4>
                <Carousel responsive={responsive} ssr={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <div className="about-dev-mobile-card space-around">
                        <div className="flex-col align-center">
                            <h4 className="about-boxes-title justify-center-text">As A Developer</h4>
                            <p className="page-content justify-center-text myself-content optional-margin">{content.developer}</p>
                        </div>
                        <Images css='flex-center align-center inner-card-gap grid-2' img1={images.web} img2={images.javascript} img3={images.css} img4={images.python}/>
                    </div>
                    <div className="about-dev-mobile-card space-around">
                        <div className="flex-col align-center">
                            <h4 className="about-boxes-title justify-center-text">In Frontend</h4>
                            <p className="page-content justify-center-text myself-content optional-margin">{content.frontend}</p>
                        </div>
                        <Images css='flex-center align-center inner-card-gap grid-2' img1={images.html} img2={images.css} img3={images.javascript} img4={images.reactlogo}/>
                    </div>
                    <div className="about-dev-mobile-card space-around">
                        <div className="flex-col align-center">
                            <h4 className="about-boxes-title justify-center-text">In Backend</h4>
                            <p className="page-content justify-center-text myself-content optional-margin">{content.backend}</p>
                        </div>
                        <Images css='flex-center align-center inner-card-gap grid-2' img1={images.django} img2={images.python} img3={images.postgre} img4={images.backend}/>
                    </div>
                </Carousel>
            </div>
            <div className="flex-center card-space-gap container-dimensions-dev">
                <div id="developer" className="flex-col card-space-gap dev-dimensions">
                    <div className="card-align-bg flex-col align-center">
                        <h4 className="about-boxes-title justify-center-text">As A Developer</h4>
                        <p className="page-content justify-center-text myself-content optional-margin">{content.developer}</p>
                        <Images css='flex-center align-center icons-gap-50 developer-img-2' img1={images.web} img2={images.javascript} img3={images.css} img4={images.python}/>
                    </div>
                    <div className="card-align-bg flex-col align-center">
                        <h4 className="about-boxes-title justify-center-text">In Backend</h4>
                        <p className="page-content justify-center-text myself-content optional-margin">{content.backend}</p>
                        <Images css='simple-flex space-between icons-container-w' img1={images.django} img2={images.python} img3={images.postgre}/>
                    </div>
                </div>
                <div className="card-align-bg design-dimensions flex-col align-center space-between">
                    <h4 className="about-boxes-title justify-center-text">In Design</h4>
                    <p className="page-content justify-center-text myself-content">{content.design1}</p>
                    <img className="icons-about-dimensions" src={images.figma} alt='icon'></img>
                    <p className="page-content justify-center-text myself-content">{content.design2}</p>
                    <div>
                        <img className="icons-about-dimensions" src={images.fontawesome} alt='icon'></img>
                        <img className="icons-about-dimensions" src={images.illustrator} alt='icon'></img>
                    </div>
                </div>
            </div>
            <div className="flex-center card-space-gap container-about-settings">
                <div className="card-align-bg future-card flex-col align-center">
                    <h4 className="about-boxes-title justify-center-text">What I Want To Do ?</h4>
                    <p className="page-content justify-center-text myself-content">{content.iwant}</p>
                    <Images css='grid-2' img1={images.reactlogo} img2={images.flutter} img3={images.unityLogo} img4={images.ai}/>
                </div>
                <div id="frontend" className="card-align-bg frontend-card flex-col align-center card-space-gap">
                    <h4 className="about-boxes-title justify-center-text">In Frontend</h4>
                    <p className="page-content justify-center-text myself-content">{content.frontend}</p>
                    <Images css='flex-wrap-images' img1={images.html} img2={images.css} img3={images.javascript} img4={images.reactlogo} img5={images.tailwindcss} img6={images.bootstrap}/>
                </div>
            </div>
            <div className="my-resume-container flex-center card-space-gap">
                <div className="card-align-bg myself-card-dimensions flex-col align-center mobile-transparent margin-side-40">
                    <h4 className="about-boxes-title justify-center-text">My Hobbies</h4>
                    <p className="margin-p-hobbies page-content justify-center-text myself-content">{content.hobbies}</p>
                    <div className="flex-center align-center inner-card-gap mobile-column">
                        <img className="icons-about-dimensions overwatch-mobile-top" src={images.overwatch} alt='icon'></img>
                        <img className="fromsoftware-logo" src={images.fromsoftware} alt='icon'></img>
                        <img className="icons-about-dimensions overwatch" src={images.overwatch} alt='icon'></img>
                        <img className="cod-logo" src={images.cod} alt='icon'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxes