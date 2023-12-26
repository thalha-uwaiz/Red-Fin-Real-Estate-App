import React, { useEffect, useState } from 'react'
import Styles from './Header.module.scss'
import { headerConfig, NavItems } from '../../Constants'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";


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



const RenderNavigationLinks = ({ data, setCurrentNav, currentNav }) => {

  return (
    <div className={Styles.sectiontwo}>
      <nav className={Styles.navigation}>
        {data.map(nav => (
          <Link
            className={nav.id === currentNav.id ? Styles.active : ''}
            to={nav.route}
            key={nav.id}
            onClick={() => setCurrentNav(nav)}
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
    <div>Login</div>
  )
}





const Header = ({ navData = NavItems, headerData = headerConfig }) => {

  const [currentNav, setCurrentNav] = useState({});

  useEffect(() => {                               //mounting 
    setCurrentNav(navData[0])
  }, [])




  return (
    <header>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <RenderTitle data={headerData} />
          <RenderNavigationLinks
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
            data={navData} />
          <RenderButtons />

        </div>
      </div>

    </header>
  )
}

export default Header