import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Styles from './Featured.module.scss'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import cx from 'classnames'
import { images } from '../../Assets/images';
import PersonIcon from '@mui/icons-material/Person';
import WifiIcon from '@mui/icons-material/Wifi';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const tabConfig = [
  { label: 'House', id: 'house', icon: <HomeIcon /> },
  { label: 'Villa', id: 'villa', icon: <VillaIcon /> },
  { label: 'Apartment', id: 'apartment', icon: <ApartmentIcon /> },
]

const houseConfig = [
  {
    label: 'Ikeja, Lagos',
    id: 'ikeja-lagos',
    price: '200,000',
    interest: '31',
    rating: 4.5,
    imgSrc: images.house1,
    bedroom: 5
  },
  {
    label: 'Jabi, Abuja',
    id: 'jabi-abuja',
    price: '800,000',
    interest: '23',
    rating: 6.5,
    imgSrc: images.house2,
    bedroom: 6,
  },
  {
    label: 'Apapa, Lagos',
    id: 'apapa-lagos',
    price: '50,000',
    interest: '18',
    rating: 3.5,
    imgSrc: images.house3,
    bedroom: 3,
  },
  {
    label: 'Lekki, Lagos',
    id: 'lekki-lagos',
    price: '200,000',
    interest: '43',
    rating: 4.5,
    imgSrc: images.house4,
    bedroom: 4,
  },
  {
    label: 'Thalha, Villa',
    id: 'thalha-villa',
    price: '600,000',
    interest: '40',
    rating: 5.8,
    imgSrc: images.house5,
    bedroom: 7,
  },
  {
    label: 'John, palace',
    id: 'john-palace',
    price: '550,000',
    interest: '20',
    rating: 3.8,
    imgSrc: images.house6,
    bedroom: 4,
  },
  {
    label: 'Rose, palace',
    id: 'rose-palace',
    price: '300,000',
    interest: '32',
    rating: 5.3,
    imgSrc: images.house7,
    bedroom: 2,
  },
  {
    label: 'Danish, Villa',
    id: 'danish-villa',
    price: '900,000',
    interest: '42',
    rating: 7.5,
    imgSrc: images.house8,
    bedroom: 7,
  },
  {
    label: 'King, Palace',
    id: 'king-palace',
    price: '1100,000',
    interest: '20',
    rating: 8.0,
    imgSrc: images.house9,
    bedroom: 10,
  },
  {
    label: 'Lords, Villa',
    id: 'lords-villa',
    price: '350,000',
    interest: '26',
    rating: 4.2,
    imgSrc: images.house10,
    bedroom: 4,
  },
]

const Featured = () => {

  const [currentTab, setCurrentTab] = useState();
  const [currentHouse, setCurrentHouse] = useState();
  const [activeArrow, setActiveArrow] = useState();

  useEffect(() => {
    setCurrentTab(tabConfig[0])
  }, [])

  const handlePreviousHouse = () => {

  }

  const handleNextHouse = () => {

  }

  const renderTab = (data) => {
    const { label, id, icon } = data;
    return (
      <div
        key={id}
        className={cx(Styles.tab,
          currentTab?.id === id ? Styles.activeTab : ' '
        )}
        onClick={() => setCurrentTab(data)}
      >
        {icon} <span>{label}</span>
      </div>
    );
  };


  const renderHouses = (data) => {
    const {label, id, price, rating, imgSrc, interest, bedroom } = data;
    return (
       <div key={id} className={Styles.building}>
        <img src={imgSrc} alt={label} />
        <div className={Styles.details}>
          <div className={Styles.label}>{label}</div>
          <div className={Styles.otherDetails}>
            <div className={Styles.section}>
              <PersonIcon />
              <div className={Styles.bedroom}>{bedroom}&nbsp;Bedroom</div>
            </div>
            <div className={Styles.section}>
              <WifiIcon />
              <div className={Styles.section}>Wi-Fi</div>
            </div>
          </div>
        </div>
        <div className={Styles.price}>
          <span className={Styles.Lkr}>LKR </span> {price}
          <span className={Styles.Lkr}>&nbsp;/&nbsp;annum</span>
        </div>
        <div className={Styles.interest}>
          {interest} have interest in this property
        </div>
        <button className={Styles.viewMore}>
          <span>View More&nbsp;&nbsp;</span> <ArrowForwardIcon />
          </button>
       </div>
    )
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.title}>
          <span>Featured</span>
          Houses</div>
        <div className={Styles.tabs}>{tabConfig.map(renderTab)}</div>
        <div className={Styles.scrollButtons}>
          <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <div className={Styles.houses}>
        {houseConfig.map(renderHouses)}
      </div>

    </div>
  )
}

export default Featured