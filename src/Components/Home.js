import '../Stylesheets/Home.css'
import '../Stylesheets/Background.css'
import DataContext from '../Context/DataContext'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import img from './homeimg.jpg'
import bloodbag from './bloodbag.png'
import bloodhand from './bloodhand.png'
// import bg from './bg.jpg'

const Home = () => {

  const { navigate, locationDataobj, dark } = useContext(DataContext)

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const linkstyle = {
  color: 'red'
}

 const donormen = 5982;
 const donorwomen = 3856;

 const totalDonors = donormen + donorwomen 

  const move = (e) =>{
    e.preventDefault()
    navigate('/register/personal')
  }
  const move1 = (e) =>{
    e.preventDefault()
    navigate('/faq')
  }
  
  const locationslength = Object.keys(locationDataobj).length

  return (
    <div className='Home' style={{
      // backgroundImage:`url(${bg})`,
      // backgroundSize:'cover'
    }}>
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
      <div className='spliting'>
        <div className='leftside'>
          <h1 className='TopLine'>A drop of blood for you could be a drop of life for someone else</h1>
          <h1 className='LineTwo'>In Nigeria, There is an urgent need for blood. Nigeria's National Blood Transfusion Service, NBTC, collects only 500,000 pints of blood every year</h1>
          <h1 className='LineThree'>That leaves a shortfall of about 73%. Over 1.7 Million pints of Blood</h1>          
          <h1 className='LineFour'>The person who needs this blood could be a child with stage 3 Leukemia, or a father who got in an accident on his way to work</h1>
          <div className='sidebuttons'>
            <button className='donbtnhome' onClick={(e)=>{move(e)}}>Become A Donor</button>
            <button className='donbtnhome1' onClick={(e)=>{move1(e)}}>Find Out More</button>
          </div>
        </div>
        <div className='rightside'>
          <img src={bloodbag} alt='bloodbag' className='homeimg'></img>
        </div>
      </div>      

      <div className='homeWrapper'>
        <img src={bloodhand} alt='imgone' className='bloodimg'></img>
        <p className='gift'>Gift a Life</p>

        <div className='sidepanels'>
          <div className='totalwrapper5'>
            <img src={img} alt='imgone' className='imgone'></img>
            <p className='totaltitle'>Why Donate?</p>
            <p className='smalltitle1'>Donors change lives. They save families. Finding a reason to donate isn't hard. Just take a look around you. Communities thrive when people help eachother. It can even just be your good deed of the month. We have {totalDonors} Donors right now</p>
            <Link className='smalltitle' style={linkstyle} to={'/register/personal'}>Become one Today</Link>
          </div>

          <div className='totalwrapper6'>
            <img src={img} alt='imgone' className='imgone'></img>
            <p className='totaltitlehome'>Where can I Donate</p>
            <p className='smalltitle11'>We have {locationslength} locations accross the country</p>
            <Link className='smalltitle2' style={linkstyle} to={'/contact'}>Find the location closest to you</Link>
          </div>

          <div className='totalwrapper7'>
            <img src={img} alt='imgone' className='imgone'></img>
            <p className='totaltitle'>Am I Eligible to Donate</p>
            <p className='smalltitle1'>There are many criteria that you need to meet to qualify for blood donation.</p>
            <p className='smalltitle3'>Tattoos, diseases or even pregnancy need to be talked about with a doctor before you can safely donate blood</p>
            <a className='wholinkhome' href='https://www.who.int/campaigns/world-blood-donor-day/2018/who-can-give-blood#:~:text=Below%20are%20some%20basic%20eligibility,that%20appropriate%20consent%20is%20obtained.' target="_blank" rel="noopener noreferrer">Read More...</a>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Home
