import '../Stylesheets/About.css'
import '../Stylesheets/Background.css'
import logo from './abtimg.jpg'
import { useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'

const About = () => {

  const { dark } = useContext(DataContext)
 
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='About'>
      <div className='backgroundspread'>
        <div className='wave4'>
          <div className='bg4'></div>
        </div>
      </div>
      <div className='backgroundspread'>
        <div className='wave3'>
          <div className='bg3'></div>
        </div>
      </div>
      <div className='backgroundspread'>
        <div className='wave2'>
          <div className='bg2'></div>          
        </div>
      </div>
      <div className='backgroundspread'>
        <div className='wave1'>
          <div className='bg1'></div>
        </div>
      </div>
        <div className='textbox'>
          <h1 className={!dark ? 'story' : 'dstory'}>About us</h1>
          <p className={!dark ? 'para1' : 'dpara1'}>
            AfriPulseHub aims to efficiently connect Donors with blood banks, recipients and hospitals while ensuring data
            safety between the donor and the recipient. We want to ensure data safety between the donor and the recipient with timely and accessible blood supply. In a nutshell,
            we aim to streamline the blood donation process as well as to foster a culture of regular donation and contributionto saving
            lives in emergent situations.
          </p>
          <img src={logo} className="aboutimage" alt="logo" />
          <h1 className={!dark ? 'hours' : 'dhours'}>Our Mission</h1>
          <p className={!dark ? 'para2' : 'dpara2'}>
            AfriPulseHub aims to efficiently connect Donors with blood banks, recipients and hospitals while ensuring data
            safety between the donor and the recipient. We want to ensure data safety between the donor and the recipient with timely and accessible blood supply. In a nutshell,
            we aim to streamline the blood donation process as well as to foster a culture of regular donation and contributionto saving
            lives in emergent situations.
          </p>
          <h1 className={!dark ? 'clientelle' : 'dclientelle'}>Our Locations</h1>    
          <div className='aboutlocations'>
            <h2 className={!dark ? 'day1' : 'dday1'}>            
              <a
                className="abloc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='address1'>Lorem Ipsum Lorem </p>
                <p className='address3'>Ipsum Lorem Ipsum Lorem</p>
                <p className='address2'>Ipsum Lorem</p>
              </a>
            </h2>
            <h2 className={!dark ? 'day2' : 'dday2'}>            
              <a
                className="abloc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='address1'>Lorem Ipsum Lorem </p>
                <p className='address3'>Ipsum Lorem Ipsum Lorem</p>
                <p className='address2'>Ipsum Lorem</p>
              </a>
            </h2>
            <h2 className={!dark ? 'day3' : 'dday3'}>            
              <a
                className="abloc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='address1'>Lorem Ipsum Lorem </p>
                <p className='address3'>Ipsum Lorem Ipsum Lorem</p>
                <p className='address2'>Ipsum Lorem</p>
              </a>
            </h2>
            <h2 className={!dark ? 'day4' : 'dday4'}>            
              <a
                className="abloc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='address1'>Lorem Ipsum Lorem </p>
                <p className='address3'>Ipsum Lorem Ipsum Lorem</p>
                <p className='address2'>Ipsum Lorem</p>
              </a>
            </h2>
            <h2 className={!dark ? 'day5' : 'dday5'}>            
              <a
                className="abloc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='address1'>Lorem Ipsum Lorem </p>
                <p className='address3'>Ipsum Lorem Ipsum Lorem</p>
                <p className='address2'>Ipsum Lorem</p>
              </a>
            </h2>
          </div>      
        </div>
      </div>
  )
}

export default About
