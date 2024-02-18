import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from '../images/exporting.js';
import { Link } from 'react-router-dom';


const Skills = () => {
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
    return (
      <div id='skills' className='section-container flex-center'>
          <div className='content-card'>
              <h4 className='skills-title'>What I Am Great At?</h4>
              <div className='myself-text-container'>
                  <p className='page-content justify-center-text'>
                  I am electronic engineer and Full Stack Web Developer. 
                  I have experience in web applications using Python and Django. 
                  In addition, I have knowledge in videogames development with unity and ecommerce sites using Shopify and Liquid.
                  </p>
              </div>
              <div className='cien'>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} ssr={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <div className='minicard'>
                      <img src={images.web} alt='web development' className='skills-img-dimensions'></img>
                      <p className='skills-card-title'>Web Development</p>
                    </div>
                    <div className='minicard'>
                      <img src={images.design} alt='web development' className='skills-img-dimensions'></img>
                      <p className='skills-card-title'>UX / UI Deisgn</p>
                    </div>
                    <div className='minicard'>
                      <img src={images.backend} alt='web development' className='skills-img-dimensions'></img>
                      <p className='skills-card-title'>Backend</p>
                    </div>
                    <div className='minicard'>
                      <img src={images.shopify} alt='web development' className='skills-img-dimensions'></img>
                      <p className='skills-card-title'>Shopify</p>
                    </div>
                </Carousel>;
              </div>
              <Link to='/about' className='mydescription-btn'>More About Me</Link>
          </div>
      </div>
    ) 
}

export default Skills