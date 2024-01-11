import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
import Styles from './Footer.module.scss'


const AboutData = {
  heading: ['Red ', 'Fin'],
  content: ['Copyrights RedFin Homes and Properties. ', 'All rights reserved. '],
  socialIcons: [<InstagramIcon />, <FacebookIcon />, <LinkedInIcon />, <TwitterIcon />]
}

const companyMenu = {
  label: 'company',
  menus: [
    { label: 'About Us', route: '/'},
    { label: 'Blog', route: '/' },
    { label: 'Contact Us', route: '/contactUs' },
    { label: 'Pricing', route: '/' },
    { label: 'Testimonials', route: '/' }, 
  ]


}

const supoortMenu = {
  label: 'Support',
  menus: [
    { label: 'Help Center', route: '/'},
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
          {Array.isArray(heading) && heading.map((data, index) => <span key={index}>{data}</span>)}
        </div>
  
        <div className={Styles.content}>
          {Array.isArray(content) && content.map((data, index) => <div key={index}>{data}</div>)}
        </div>
  
        <div className={Styles.socialMediaIcons}>
          {Array.isArray(socialIcons) && socialIcons.map((icon, index) => <span key={index}>{icon}</span>)}
        </div>
      </div>
    );
  };
  


  return (
    <div>
      {renderAboutPage(AboutData)}
    </div>
  )
}

export default Footer