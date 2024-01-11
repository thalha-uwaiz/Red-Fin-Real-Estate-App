import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import Styles from './Footer.module.scss';


const AboutData = {
  heading: ['Red ', 'Fin'],
  content: ['Copyrights RedFin Homes and Properties. ', 'All rights reserved. '],
  socialIcons: [<InstagramIcon />, <FacebookIcon />, <LinkedInIcon />, <TwitterIcon />]
}

const companyMenu = {
  label: 'company',
  menus: [
    { label: 'About Us', route: '/' },
    { label: 'Blog', route: '/' },
    { label: 'Contact Us', route: '/contactUs' },
    { label: 'Pricing', route: '/' },
    { label: 'Testimonials', route: '/' },
  ]


}

const supportMenu = {
  label: 'Support',
  menus: [
    { label: 'Help Center', route: '/' },
    { label: 'Terms Of Service', route: '/' },
    { label: 'Legal', route: '/' },
    { label: 'Privacy Policy', route: '/' },
    { label: 'Status', route: '/' },
  ]


}


const Footer = () => {

  const renderAboutPage = (data) => {
    const { heading, content, socialIcons } = data;

    return (
      <div className={Styles.aboutPage}>
        <div className={Styles.heading}>
          {heading.map((data, index) => <span key={index}>{data}</span>)}
        </div>

        <div className={Styles.content}>
          {content.map((data, index) => <div key={index}>{data} </div>)}
        </div>

        <div className={Styles.socialMediaIcons}>
          {socialIcons.map((icon, index) => <span key={index}>{icon}</span>)}
        </div>
      </div>
    );
  };

  const renderMenu = (data) => {
    const { label, menus } = data;

    return (
      <div className={Styles.menu}>
        <div className={Styles.subHeading}>
          {label}
        </div>
        <div className={Styles.menuItems}>
          {menus.map((menu, index) => (
            <Link
              to={menu.route}
              key={index}
            >
              {menu.label}
            </Link>
          ))}
        </div>

      </div>
    )
  };

  const handleNewsLetter = (event) => {
    event.preventDefault();
    console.log('form clicked')

  }

  const renderNewsLetter = () => {
    return (
      <div className={Styles.newsLetter}>
        <div className={Styles.label}> Stay up to date </div>
        
          <form onSubmit={handleNewsLetter}>
          <div className={Styles.emailContainer}>
            <input type="email" placeholder='Your Email Address' />
            <button type='submit' className={Styles.sendIcon}>
              <SendIcon />
            </button>
            </div>
          </form>
        </div>

     
    )
  }



  return (
    <footer>
      <div className={Styles.container}>
        {renderAboutPage(AboutData)}
        {renderMenu(companyMenu)}
        {renderMenu(supportMenu)}
        {renderNewsLetter()}

      </div>
    </footer>
  )
}

export default Footer