import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';

function SocialMenu() {
    return(
        <div className='social-media-menu'>
        <a target="_blank" rel="noreferrer" className='social-media-link' href='https://www.instagram.com/ad.codeverse'><FaInstagram /></a>
        <a target="_blank" rel="noreferrer" className='social-media-link' href='https://github.com/Alexisdjm'><FaGithub/></a>
        <a target="_blank" rel="noreferrer" className='social-media-link' href='https://www.linkedin.com/in/alexis-jimenez-42083823a'><FaLinkedin/></a>
        <a target="_blank" rel="noreferrer" className='social-media-link' href='https://www.tiktok.com/@ad.codeverse'><FaTiktok/></a>
      </div>
    )
}

export default SocialMenu