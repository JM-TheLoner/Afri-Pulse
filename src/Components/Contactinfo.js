import '../Stylesheets/Register.css'
import '../Stylesheets/Background.css'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../Context/DataContext'

const Contactinfo = () => {
  
  const { dark, navigate, addressInput,emailregInput,phoneInput, setaddressInput, setemailregInput,  setphoneInput } = useContext(DataContext)

  const[incomplete, setincomplete]=useState(false)
  const[nophone, setnophone]=useState(false)
  const[noemail, setnoemail]=useState(false)
  const[noaddress, setnoaddress]=useState(false)
  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const Continue = (e) =>{
  e.preventDefault()
  setincomplete(false)
  setnoaddress(false)
  setnoemail(false)
  setnophone(false)

  if (!addressInput || !emailregInput || !phoneInput){
    setincomplete(true)    
    alert(`Incomplete information given`)
    if(!phoneInput){
      setnophone(true)
    }
    if(!emailregInput){
      setnoemail(true)
    }
    if(!addressInput){
      setnoaddress(true)
    }    
  }
  
  else{    
    navigate('/register/user')
  }
 }

  return (
    <div className='Register'>
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
      <div className='regconWrapper'>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>Contact info</h1>
      <form>
      {incomplete && <p className='requiredreg'>All fields must be filled</p>}
      <h1 className='phoneText1'>Phone Number</h1>
      <div className={!nophone ? 'inputBoxphone' : 'inputBoxphonered'}>
        <input
        type='text'
        placeholder='Phone Number'
        required
        value={phoneInput}
        onChange={(e)=>{setphoneInput(e.target.value)}}/>
      </div>
      <h1 className='emailText1'>Email</h1>
      <div className={!noemail ? 'inputBoxemail' : 'inputBoxemailred'}>
        <input
        type='text'
        placeholder='Email'
        required
        value={emailregInput}
        onChange={(e)=>{setemailregInput(e.target.value)}}/>
      </div>
      <h1 className='addressText1'>Address</h1>
      <div className={!noaddress ? 'inputBoxaddress' : 'inputBoxaddressred'}>
        <input
        type='text'
        placeholder='Address'
        required
        value={addressInput}
        onChange={(e)=>{setaddressInput(e.target.value)}}/>
      </div>
      <button type='submit' className='contb' onClick={(e)=>Continue(e)}>Continue</button> 
      </form>
      </div>
    </div>
  )
}

export default Contactinfo
