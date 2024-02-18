import images from '../images/exporting.js';
import { useState } from 'react';

const Projects = () => {
    const [nurture, setNurture] = useState(false)
    const [swiss, setSwiss] = useState(false)
    const [ecommerce, setEcommerce] = useState(false)
    const [mail, setMail] = useState(false)
    const [whatsapp, setWhatsapp] = useState(false)

    const descriptions = {
        nurture: 'Nurture parenting is a shopify theme, created for the sale of services, for the upbringing of children from newborn to 5 years old. It was developed in shopify using liquid as programming language, which allowed the creation of different sections that can be easily modified from a web interface called customizer by the store owner.',
        swiss: 'This is a shopify theme for swissgetall store, which is a beauty supply store in switzerland. It was developed in shopify and liquid, in addition, it uses metadata to specify each product and uses javascrip code to create the user interface.',
        ecommerce: 'This project consists of creating an e-commerce website using python and the django framework. For the storage of product data, an ORM model database was used, in addition, python was used to create the functionality of the page and the rendering of the html templates.',
        mail: "The objective of this project was to create a web application that allows the user to send emails to other users who are registered in the application's database. This is a front end web application that makes api calls to send and receive emails.",
        whatsapp: 'This project is about of create a real-time chat application, which allows a user registered in the application to send and receive messages instantly. To achieve this goal, websocket technology and the django channels package were used. This application allows each user to update their profile photo, their status message, start a chat with any of their contacts, send and receive messages.',
    }

    return (
        <div id='projects' className='projects-container'>
            <h4 className='skills-title'>Projects</h4>
            <section id='projects-container' className='project-gallery'>
                <div className='flex-center project-box' style={{backgroundImage: `url(${images.condimentos})`}}>
                    <div className='project-name-container'>
                        <h6 className='project-name'>La Casa de los Condimentos</h6>
                        <p className='identifier'>Django rest Framework and React.js</p>
                    </div>
                </div>
                <div className='flex-center project-box' style={{backgroundImage: `url(${images.swissgetal})`}}>  
                    <div className='project-name-container'>
                        <h6 className='project-name'>SwissGetal</h6>
                        <p className='identifier'>(Shopify theme)</p>
                    </div>
                </div>
                <div className='flex-center project-box' style={{backgroundImage: `url(${images.ecommerce})`}}>   
                    <div className='project-name-container'>
                        <h6 className='project-name'>Ecommerce Site</h6>
                        <p className='identifier'>(django, Html, CSS and Javacript)</p>
                    </div>
                </div>
                <div className='flex-center project-box' style={{backgroundImage: `url(${images.mail})`}}>  
                    <div className='project-name-container'>
                        <h6 className='project-name'>Mail Web App</h6>
                        <p className='identifier'>(django, Html, CSS and Javacript)</p>
                    </div>
                </div>
                <div className='flex-center project-box' style={{backgroundImage: `url(${images.faketwitter})`}}>
                    <div className='project-name-container'>
                        <h6 className='project-name'>Social media Web App</h6>
                        <p className='identifier'>(Django, rest api, Javascript)</p>
                    </div>
                </div>
                <div className='flex-center project-box' style={{backgroundImage: `url(${images.fakewhatsapp})`}}>
                    <div className='project-name-container'>
                        <h6 className='project-name'>Real Time Chat App</h6>
                        <p className='identifier'>(Django Channels, rest api, Websocket)</p>
                    </div>
                </div>
            </section>
            <div className='flex-col align-center mobile-projects-container'>
                <div className='mobile-projects-view'>
                    <div className='mobile-project-box' style={{backgroundImage: `url(${images.nurture})`}}></div>
                    <div className='mobile-project-info'>
                        <h6 className='project-name'>Nurture Parenting</h6>
                        <p className={!nurture ? 'page-content p-hidden' : 'page-content p-hidden grow'}>{descriptions.nurture} </p>
                        <button onClick={() => {setNurture((nurture) => !nurture)}} className='mobile-project-link'>{!nurture ? 'Show more': 'Show less'}</button>
                    </div>
                </div>
                <div className='mobile-projects-view'>
                    <div className='mobile-project-box' style={{backgroundImage: `url(${images.swissgetal})`}}></div>
                    <div className='mobile-project-info'>
                        <h6 className='project-name'>SwissGetal</h6>
                        <p className={!swiss ? 'page-content p-hidden' : 'page-content p-hidden grow'}>{descriptions.swiss}</p>
                        <button onClick={() => {setSwiss((swiss) => !swiss)}} className='mobile-project-link'>{!swiss ? 'Show more': 'Show less'}</button>
                    </div>
                </div>
                <div className='mobile-projects-view'>
                    <div className='mobile-project-box' style={{backgroundImage: `url(${images.ecommerce})`}}></div>
                    <div className='mobile-project-info'>
                        <h6 className='project-name'>Ecommerce Site</h6>
                        <p className={!ecommerce ? 'page-content p-hidden' : 'page-content p-hidden grow'}>{descriptions.ecommerce}</p>
                        <button onClick={() => {setEcommerce((ecommerce) => !ecommerce)}} className='mobile-project-link'>{!ecommerce ? 'Show more': 'Show less'}</button>
                    </div>
                </div>
                <div className='mobile-projects-view'>
                    <div className='mobile-project-box' style={{backgroundImage: `url(${images.mail})`}}></div>
                    <div className='mobile-project-info'>
                        <h6 className='project-name'>Mail Web App</h6>
                        <p className={!mail ? 'page-content p-hidden' : 'page-content p-hidden grow'}>{descriptions.mail}</p>
                        <button onClick={() => {setMail((mail) => !mail)}} className='mobile-project-link'>{!mail ? 'Show more': 'Show less'}</button>
                    </div>
                </div>
                <div className='mobile-projects-view'>
                    <div className='mobile-project-box' style={{backgroundImage: `url(${images.fakewhatsapp})`}}></div>
                    <div className='mobile-project-info'>
                        <h6 className='project-name'>Real Time Chat App</h6>
                        <p className={!whatsapp ? 'page-content p-hidden' : 'page-content p-hidden grow'}>{descriptions.whatsapp}</p>
                        <button onClick={() => {setWhatsapp((whatsapp) => !whatsapp)}} className='mobile-project-link'>{!whatsapp ? 'Show more': 'Show less'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects