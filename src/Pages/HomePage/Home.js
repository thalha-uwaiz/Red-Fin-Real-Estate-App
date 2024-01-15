import React from 'react'
import Styles from './Home.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Icon1 from '../../Assets/images/icon1.png'
import Icon2 from '../../Assets/images/icon2.png'
import Icon3 from '../../Assets/images/icon3.png'


const Home = () => {

  const processConfig = [
    { imgSrc: Icon1, subHeading: 'Find A Listing', content: 'Make a choice of the type of apartment and qualities that appeal to your interest.' },
    { imgSrc: Icon2, subHeading: 'Talk to an Agent', content: 'Our Agents are available 24 Hours Mon-Sat.' },
    { imgSrc: Icon3, subHeading: 'Set the date and Move in!', content: 'Make payments, get reciept and all other important documents, set your move-in date.' }
  ]

  const renderProcess = (data, index) => {
    const { imgSrc, subHeading, content } = data

    return (
      <div className={Styles.processConteiner} key={index}>
        <div className={Styles.icon}>
          <img src={imgSrc} alt={subHeading} />
          <div className={Styles.subSection}>
            <div className={Styles.subHeading}>{subHeading}</div>
            <div className={Styles.content}>{content}</div>
          </div>
        </div>
        {processConfig.length !== index + 1 ? <ArrowForwardIcon /> : ''} 
      </div>
    )
  }


  return (
    <div className={Styles.container}>


      <div className={Styles.sectionOne}>
        <div className={Styles.title}>Buy, Sell, Rent </div>
        <div className={Styles.heading}> The best deals, for both Realtors and Customers.</div>
        <div className={Styles.subHeading}><span>Explore More</span><ArrowForwardIcon /></div>
      </div>

      <div className={Styles.sectionTwo}>
        <div className={Styles.heading}>How It Works</div>
        <div className={Styles.steps}>{processConfig.map(renderProcess)}</div>
        
      </div>

      <div className={Styles.sectionThree}>
        <div className={Styles.heading}>What Do you need?</div>
        <div>form-helper</div>
      </div>



    </div>
  )
}

export default Home