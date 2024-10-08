import '../Stylesheets/Login.css'
import '../Stylesheets/Background.css'
import { Link } from 'react-router-dom'
import eye from './eyeimg.png'
import img1 from './bleed.png'
import logo from './logo.png'
import DataContext from '../Context/DataContext'
import { useContext, useState, useEffect } from 'react'

const Login = () => {

  const { userInput, setuserInput, pwdInput, setpwdInput, setloggedIn, setaccessKey, setuser, dark, navigate} = useContext(DataContext)
  const [loggingIn, setloggingIn] = useState(false)
  const [open, setopen] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [wrong, setwrong] = useState(false)
  const [noUsername, setnoUsername] = useState(false)
  const [noPassword, setnoPassword] = useState(false)

   const failed = () =>{
    alert('Wrong Login Details Provided')
    setwrong(true)
  }

  const usernamer= () => {
    alert('Username Required')
    setnoUsername(true)
    setloggingIn(false)
    if (!pwdInput) {
      setnoPassword(true)
    }
  }
  const passworder= () => {
    alert(`Password Required`)
    setnoPassword(true)
    setloggingIn(false)
  } 

  const theEye = async (e) =>{
    e.preventDefault()
    setopen(!open)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const handleLogin = async (e) => { 
  e.preventDefault()
  setopen(false)
  setnoPassword(false)
  setnoUsername(false)
  setwrong(false)
  setloggingIn(true)

  if (!userInput){
      usernamer()
  }

  if (!pwdInput){
      passworder()
  }

  if (pwdInput && userInput){

    if (pwdInput === 'admin' && userInput === 'admin'){
      console.log('logged in')
      setloggedIn(true)
      setloggingIn(false)
      setfetchError(false)
      setaccessKey(false)
      setuser(false)
      setpwdInput('')
      setuserInput('')
      navigate('/')
    }

    else{
      failed()
    }
    
  }

 }

  return (
    <div className='Login' style={{
      // backgroundImage:`url(${bgl})`,
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
      <div className='onTheLeft'> 
        <img src={img1} alt='homeimg' className='logimg'></img>
      <h1 className='TopLine1'>Because of You, A Life Will Go On</h1>
        <h1 className='LineTwo1'> Nigeria's National Blood Transfusion Service, NBTC, collects only 500,000 pints of blood every year</h1>
        <h1 className='LineThree1'>That leaves a shortfall of about 73%. Over 1.7 Million pints of Blood
      </h1>
      </div>
      <div className='Wrapper'>
        <form>
          <div className='central'>
            <img src={logo} className="App-login" alt="logo" />
          </div>
          <h1 className={!dark ? 'big' : 'dbig'}>Log into the Hub</h1>
          {fetchError && <p className='error'>{fetchError}</p>}
          {wrong && <p className='failed'>Wrong details provided</p>}
          {loggingIn && <p className='loading'>Loading...</p>}
          {noUsername && <p className='requirement'>Username and Password Required</p>}
          {!noUsername && noPassword && <p className='requirement'>Username and Password Required</p>}
          <h1 className='userText'>Username</h1>
          <div className={!noUsername ? 'UserinputBox' : 'UserinputBoxred'}>
            <input
            type='text'
            placeholder='Your Username'
            required
            value={userInput}
            onChange={(e)=>{setuserInput(e.target.value)}}/>
          </div>
          <h1 className='passText'>Password</h1>
          <div className={!noPassword ? 'passinputBox' : 'passinputBoxred'}>
            <input
            type={open ? 'text' : 'password'}
            placeholder='Your Password'
            required
            value={pwdInput}
            onChange={(e)=>{setpwdInput(e.target.value)}}/>
          </div>
            <button 
              type='submit' 
              onClick={(e)=>{theEye(e)}} 
              className='eyebtn1'
              title='Show Password'>
                <img src={eye} className='eye1' alt='eye'/>
              </button> 
          <div className='space'>
            <button type='submit' className='button' onClick={(e)=>{handleLogin(e)}}>Login</button> 
          </div>
        </form>
        <div className={!dark ? 'signup' : 'dsignup'}>
              <h3 className={!dark ? 'spaceout' : 'dspaceout'}>
                Dont have an account? 
              </h3>
              <Link to={'/register/personal'}>
                <h3 className={!dark ? 'spaceoutlink' : 'dspaceoutlink'}>Sign Up</h3>
              </Link>
              
        </div>
        <div>
              <Link to={'/forgot'}>
                <h2 className={!dark ? 'forgot' : 'dforgot'}>Forgotten Your Password?</h2>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
 