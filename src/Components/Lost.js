import '../Stylesheets/Lost.css'
import '../Stylesheets/Background.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Lost = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
      <div className="Lost">
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
        <div className="topline">
          <h1><span className="first">404</span><span className="second">|</span><span className="third">Page not found</span></h1>
        </div>
        <div>
          <h3 className="bottomline">click <Link to={'/'} className="link">Here</Link> to see our home page</h3>
        </div>
      </div>
  )
}

export default Lost