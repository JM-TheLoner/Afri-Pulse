import React from 'react'
import '../Stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext'
import { useContext, useState } from 'react'
import logo from './logo.png'
import cont from './contact.png'
import abo from './about.png'
import quest from './faq.png'
import use from './users.png'
import house from './home.png'
import stat from './stats.png'

const Header = () => {

  const { loggedIn, setaccessKey, setuser, setloggedIn, dark, setdark, navigate, setanalysis } = useContext(DataContext)

  const[visibility, setvisibility] = useState(false)

  const handlevisibility = () =>{
    setvisibility(!visibility)
  }

  const darkmode = async (e) => {
    e.preventDefault()
    await localStorage.setItem('darkMode', !dark)
    await setdark(JSON.parse(localStorage.getItem('darkMode')))
  }

  const handleLogout = async () => {
    await setaccessKey('') 
    await setuser('')
    
    console.log('logged out')
    
    setaccessKey('')
    setuser('')
    setloggedIn(false)
    setanalysis('General')
    navigate('/')
        
}
    const navhome = (e) =>{            
        navigate('/')
        setvisibility(false)
    }
    const navstat = (e) =>{        
        navigate('/statistics')
        setvisibility(false)
    }
    const navfaq = (e) =>{        
        navigate('/faq')
        setvisibility(false)
    }
    const navabout = (e) =>{        
        navigate('/about')
        setvisibility(false)
    }
    const navcontact = (e) =>{        
        navigate('/contact')
        setvisibility(false)
    }
    const navlogin = (e) =>{        
        navigate('/login')
        setvisibility(false)
    }
    const navuser = (e) =>{        
        navigate('/users')
        setvisibility(false)
    }

const linkstyle = {
    textDecoration:"none",
    color: 'black'
}


if (!loggedIn){
  return (      
    <header className={!dark ? 'Header' : 'dHeader'}>
        <div className='Topbar'>
            <img src={logo} className="App-logo2" alt="logo"/>
            <p className='headbtnlinetwo'>AfriPulseHub Blood Works</p>
            <button  className={!dark ? 'btn' : 'dbtn'} onClick={(e) => {darkmode(e)}}>Dark Mode</button>
        </div>        
        <div className={visibility === true ? 'links' : 'linksclosed'}>
            <div className='Navbar'>
                <button  className='menubtn' onClick={(e)=>handlevisibility(e)}>
                    <div className='headbtnline'>
                        <p className='headbtnlineone'>=</p>
                    </div>
                </button>
                <img src={logo} className="App-logo1" alt="logo"/>
                <div>      
                    <div className='linklist' onClick={(e)=>{navhome()}}>    
                        <img src={house} className="homelogo" alt="logo"/>  
                        <Link to={'/'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='homepos'>Home</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navabout()}}>
                        <img src={abo} className="aboutlogo" alt="logo"/>  
                        <Link to={'/about'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='aboutpos'>About</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navcontact()}}>
                        <img src={cont} className="contlogo" alt="logo"/>  
                        <Link to={'/contact'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='contpos'>Contact</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navfaq()}}>
                        <img src={quest} className="questionlogo" alt="logo"/>  
                        <Link to={'/faq'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='questionpos'>FAQ</Link>  
                    </div>
                    <div className='linklist' onClick={(e)=>{navlogin()}}>
                        <img src={use} className="loglogo" alt="logo"/>  
                        <Link to={'/login'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='logpos'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
)}

if (loggedIn){
  return (
    <header className={!dark ? 'Header' : 'dHeader'}>
        <div className='Topbar'>
            <img src={logo} className="App-logo2" alt="logo"/>
            <p className='headbtnlinetwo'>AfriPulseHub Blood Works</p>
            <button className='logoutbutton' onClick={() => {handleLogout()}}>Logout</button>
            <button  className='btnlogged' onClick={(e) => {darkmode(e)}}>Dark Mode</button>
        </div>        
        <div className={visibility === true ? 'links' : 'linksclosed'}>
            <div className='Navbar'>
                <button  className='menubtn' onClick={(e)=>handlevisibility(e)}>
                    <div className='headbtnline'>
                        <p className='headbtnlineone'>=</p>
                    </div>
                </button>
                <img src={logo} className="App-logo1" alt="logo"/>
                <div>         
                    <div className='linklist' onClick={(e)=>{navhome()}}> 
                        <img src={house} className="homelogo" alt="logo"/>  
                        <Link to={'/'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='homepos'>Home</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navstat()}}>
                        <img src={stat} className="statlogo" alt="logo"/>  
                        <Link to={'/statistics'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='statpos'>Statistics</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navabout()}}>
                        <img src={abo} className="aboutlogo" alt="logo"/>  
                        <Link to={'/about'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='aboutpos'>About</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navcontact()}}>
                        <img src={cont} className="contlogo" alt="logo"/>  
                        <Link to={'/contact'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='contpos'>Contact</Link>
                    </div>
                    <div className='linklist' onClick={(e)=>{navfaq()}}>
                        <img src={quest} className="questionlogo" alt="logo"/>  
                        <Link to={'/faq'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='questionpos'>FAQ</Link>  
                    </div>
                    <div className='linklist' onClick={(e)=>{navuser()}}>
                        <img src={use} className='userlogo' alt="logo"/> 
                        <Link to={'/users'} onClick={(e)=>{handlevisibility(e)}} style={linkstyle} className='userpos'>Users</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>

)}
}

export default Header
