import images from '../images/exporting.js';

const Technologies = () => {
    return(
        <div id='technologies' className='section-container flex-center section-margin'>
            <div className='flex-col align-center img-gap technologies-container'>
                <h4 className='skills-title'>Technologies</h4>
                <p className='page-content justify-center-text'>
                    My goal is to improve my skills to carry out quality projects in a professional manner. 
                    This is the reason why, i am constantly practicing and learning the lastest technologies. 
                    Personally, i prefer to work with code, althought i can also use no-code platforms such as 
                    certains CMS, static website generators and more.
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