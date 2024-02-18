import images from '../images/exporting.js';

const Technologies = () => {
    return(
        <div id='technologies' className='section-container flex-center section-margin'>
            <div className='flex-col align-center img-gap technologies-container'>
                <h4 className='skills-title'>Technologies</h4>
                <p className='page-content justify-center-text'>
                Driven by a relentless pursuit of excellence, my primary goal as a developer and engineer is to continually elevate the quality of my projects, ensuring professional success. Embracing a philosophy of lifelong learning, I stay immersed in diverse technologies, constantly expanding my skill set. Whether mastering new frameworks or refining my proficiency with current tools, I am dedicated to delivering top-notch solutions. Join me on this journey of continuous improvement, where each project is a testament to my commitment to achieving excellence in the ever-evolving landscape of technology.
                </p>
                <div className='grid-img-matrix'>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.html} alt='html'></img>
                        <h4 className='technologies-title-img justify-center-text'>HTML</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.css} alt='css'></img>
                        <h4 className='technologies-title-img justify-center-text'>CSS</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.javascript} alt='js'></img>
                        <h4 className='technologies-title-img justify-center-text'>JAVASCRIPT</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.reactlogo} alt='react'></img>
                        <h4 className='technologies-title-img justify-center-text'>REACT JS</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.python} alt='python'></img>
                        <h4 className='technologies-title-img justify-center-text'>PYTHON</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.postgre} alt='postgre'></img>
                        <h4 className='technologies-title-img justify-center-text'>POSTGRE</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.tailwindcss} alt='tailwind'></img>
                        <h4 className='technologies-title-img justify-center-text'>TAILWIND</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.bootstrap} alt='bootstrap'></img>
                        <h4 className='technologies-title-img justify-center-text'>BOOTSTRAP</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.seo} alt='seo'></img>
                        <h4 className='technologies-title-img justify-center-text'>SEO</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.shopify} alt='shopify'></img>
                        <h4 className='technologies-title-img justify-center-text'>SHOPIFY</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.django} alt='django'></img>
                        <h4 className='technologies-title-img justify-center-text'>DJANGO</h4>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.unityLogo} alt='unity'></img>
                        <h4 className='technologies-title-img justify-center-text'>UNITY</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies