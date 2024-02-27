import React, { useEffect, useState } from 'react'
import Styles from './Header.module.scss'
import { headerConfig, NavItems } from '../../Constants'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const RenderTitle = ({ data }) => {
  const { title, options, subTitle } = data;
  return (
    <div className={Styles.sectionOne}>
      <h1 className={Styles.title}>{title}<span className={Styles.subTitle}>{subTitle}</span> </h1>
      <div className={Styles.options}>
        {options.map((val, index) =>
          <div key={index}> <span>{val} </span><ArrowDropDownIcon /></div>)}

      </div>
    </div>
  )
}



const RenderNavigationLinks = ({ data, setCurrentNav, currentNav, setIsMenuOpen }) => {

  return (
    <div className={Styles.sectiontwo}>
      <nav className={Styles.navigation}>
        {data.map(nav => (
          <Link
            className={nav.id === currentNav.id ? Styles.active : ''}
            to={nav.route}
            key={nav.id}
            onClick={() => { setCurrentNav(nav); setIsMenuOpen(false); }}
          >
            {nav.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}



const RenderButtons = () => {
  return (
    <div className={Styles.sectionThree}>
      <button >Log In</button>
      <button className={Styles.signup}>Sign Up</button>
    </div>
  )
}






const Header = ({ navData = NavItems, headerData = headerConfig }) => {

  const [currentNav, setCurrentNav] = useState({});

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const nav = navData.find(nav => nav.route === pathname)                           //mounting 
    setCurrentNav(nav)
  }, [pathname, navData])


  const renderMobileMenu = () => {
    return (
      <div className={Styles.mobileContainer}>
        <RenderNavigationLinks
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
          data={navData}
          setIsMenuOpen={setIsMenuOpen} />

        <RenderButtons />

        <div className={Styles.closeIcon}
          onClick={() => setIsMenuOpen(false)}><CloseIcon /></div>
      </div>
    )
  }





  return (
    <header>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <RenderTitle data={headerData} />
          <RenderNavigationLinks
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
            setIsMenuOpen={setIsMenuOpen}
            data={navData} />
          <RenderButtons />
          <div className={Styles.mobileMenuicon}
            onClick={() => setIsMenuOpen(true)}
          ><MenuIcon /></div>

        </div>
        {isMenuOpen ? renderMobileMenu() : ''}
      </div>

    </header>
  )
}

export default Header