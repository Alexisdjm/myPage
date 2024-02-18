import images from '../images/exporting.js';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {

    const Checkpath = ({path, id, name, css}) => {
        if (window.location.pathname === path) {
            return( <HashLink className={css} to={'#' + id} smooth>{name}</HashLink> )
        } else {
            return( <HashLink className={css} to={path + '#' + id}>{name}</HashLink> )
        }
    }

    const ScrollToTop = (path) => {
        if (window.location.pathname !== path) {
            return
        }
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }

    return(
        <div className='flex-col align-center footer-margin footer-bg'>
            <img src={images.mylogo} className='footer-logo' alt='mylogo'></img>
            <div className='links-container-footer'>
                <div className='flex-link'>
                    <Link to='/' className='link-footer' onClick={() => {ScrollToTop('/')}}>Home</Link>
                </div>
                <div className='flex-link'>
                    <Link to='/about' className='link-footer' onClick={() => {ScrollToTop('/about')}}>About me</Link>
                </div>
                <div className='flex-link'>
                    <Checkpath path='/' id='projects' name='Projects' css='link-footer'/>
                </div>
                <div className='flex-link'>
                    <Checkpath path='/' id='skills' name='Skills' css='link-footer'/>
                </div>
                <div className='flex-link'>
                    <Checkpath path='/' id='technologies' name='Technologies' css='link-footer'/>
                </div>
                <div className='flex-link'>
                    <Checkpath path='/' id='contact' name='Contact me' css='link-footer'/>
                </div>
            </div>
            <div className='flex-col align-center last-gap'>
                <h4 className='last-text'>Alexis.jm29@gmail.com</h4>
                <h4 className='last-text'>© Copyright. All rights reserved</h4>
            </div>
        </div>
    )
}

export default Footer