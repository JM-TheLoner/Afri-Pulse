import '../Stylesheets/About.css'
import '../Stylesheets/Background.css'
import logo from '../Assets/abtimg.jpg'
import { useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'

const About = () => {

  const { setvisibility } = useContext(DataContext)

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='About' onClick={setvisibility(false)}>
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
          <h1 className={'story'}>About us</h1>
          <p className={'para1'}>
            AfriPulseHub aims to efficiently connect Donors with blood banks, recipients and hospitals while ensuring data
            safety between the donor and the recipient. We want to ensure data safety between the donor and the recipient with timely and accessible blood supply. In a nutshell,
            we aim to streamline the blood donation process as well as to foster a culture of regular donation and contributionto saving
            lives in emergent situations.
          </p>
          <img src={logo} className="aboutimage" alt="logo" />
          <h1 className={'hours'}>Our Mission</h1>
          <p className={'para2'}>
            AfriPulseHub aims to efficiently connect Donors with blood banks, recipients and hospitals while ensuring data
            safety between the donor and the recipient. We want to ensure data safety between the donor and the recipient with timely and accessible blood supply. In a nutshell,
            we aim to streamline the blood donation process as well as to foster a culture of regular donation and contributionto saving
            lives in emergent situations.
          </p>
          <h1 className={'clientelle'}>Our Locations</h1>    
          <div className='aboutlocations'>
            <h2 className={'day1'}>            
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
            <h2 className={'day2'}>            
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
            <h2 className={'day3'}>            
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
            <h2 className={'day4'}>            
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
            <h2 className={'day5'}>            
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
