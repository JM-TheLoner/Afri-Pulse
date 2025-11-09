import React from 'react'
import '../Stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext'
import { useContext, useState } from 'react'
import logo from './logo.png'
import cont from '../Assets/contact.png'
import abo from '../Assets/about.png'
import quest from '../Assets/faq.png'
import house from '../Assets/home.png'

const Header = () => {

  const { navigate, } = useContext(DataContext)

  const[visibility, setvisibility] = useState(false)

  const handlevisibility = () =>{
    setvisibility(!visibility)
  }

    const navhome = (e) =>{            
        navigate('/')
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
    
const linkstyle = {
    textDecoration:"none",
    color: 'black'
}


  return (      
    <header className='Header'  >
        <div className='Topbar'>
            <img src={logo} className="App-logo2" alt="logo"/>
            <p className='headbtnlinetwo'>AfriPulseHub Blood Works</p>
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
                </div>
            </div>
        </div>
    </header>
   )

}

export default Header
