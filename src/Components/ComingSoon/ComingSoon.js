import React from 'react'
import Styles from './ComingSoon.module.scss'
import { Link } from 'react-router-dom'
import UnderConstruction from '../../Assets/images/underConstruction.gif'

const Defaultconfig = {
    title: 'Coming Soon',
    description: 'We are working on something awesome',
    buttonText: 'Go to Home',
    imgSrc: UnderConstruction,
    route: '/',

}

const ComingSoon = ({ config = Defaultconfig }) => {
    const { title, description, buttonText, imgSrc, route } = config;
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <h1 className={Styles.title}>{title}</h1>
                <p className={Styles.discription}>{description}</p>
                <img src={imgSrc} alt={title} />
                <button className={Styles.button}>
                    <Link to={route}>{buttonText}</Link>
                </button>
            </div>
        </div>
    )
}


export default ComingSoon