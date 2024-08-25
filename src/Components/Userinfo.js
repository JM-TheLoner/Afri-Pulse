import '../Stylesheets/Register.css'
import '../Stylesheets/Background.css'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import eye from './eyeimg.png'


const Userinfo = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const { setstatus, dark, passInput, setpassInput, confirmInput, setconfirmInput,navigate, usernameInput, setusernameInput ,birthInput,genInput,lastNameInput, firstNameInput,  addressInput,emailregInput,phoneInput,setbirthInput,setgenInput,setlastNameInput, setfirstNameInput,  setaddressInput,setemailregInput,setphoneInput} = useContext(DataContext)
  const [openPwd, setopenPwd] = useState(false)
  const [openConf, setopenConf] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [incomplete, setincomplete] = useState(false)
  const [nouser, setnouser] = useState(false)
  const [nopwd, setnopwd] = useState(false)
  const [noconf, setnoconf] = useState(false)

  const theEyepwd = async (e) =>{
    e.preventDefault()
    setopenPwd(!openPwd)
  }
  const theEyeconf = async (e) =>{
    e.preventDefault()
    setopenConf(!openConf)
  }

  const handleCreate = async (e) =>{ 
    e.preventDefault()
    setisLoading(true)
    setfetchError(null)
    setnopwd(false)
    setnoconf(false)
    setnouser(false)
    
    if (!passInput || !confirmInput || !usernameInput){
      setincomplete(true)    
      alert(`Incomplete information given`)
      if(!passInput){
        setnopwd(true)
      }
      if(!confirmInput){
        setnoconf(true)
      }
      if(!usernameInput){
        setnouser(true)
      }    
    }
    
    else{    

    if (passInput === confirmInput){
    navigate('/login')
    setfetchError(fetchError)
    setstatus('')
    console.log(`Firstname: ${firstNameInput}`)
    console.log(`Lastname: ${lastNameInput}`)
    console.log(`Gender: ${genInput}`)
    console.log(`D.0.b: ${birthInput}`)
    console.log(`Phone: ${phoneInput}`)
    console.log(`email: ${emailregInput}`)
    console.log(`Address: ${addressInput}`)
    console.log(`username: ${usernameInput}`)
    console.log(`Password: ${passInput}`)
    setfirstNameInput('')
    setlastNameInput('')
    setgenInput('')
    setbirthInput('')
    setphoneInput('')
    setemailregInput('')
    setaddressInput('')
    setusernameInput('')
    setpassInput('')
    setconfirmInput('')
  }
  else{
    alert('Password mismatch')
    setnoconf(true)
    setnopwd(true)
  }
    }
    setisLoading(false)
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
      <div className='reguserWrapper'>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>User information</h1>
      <form>
      {incomplete && <p className='requiredreg'>All fields must be filled</p>}
      {isLoading && <p className='registering'>Loading...</p>}
      <h1 className='userTextreg'>Username</h1>
      <div className={!nouser ? 'inputBoxusername' : 'inputBoxusernamered'}>
        <input
        type='text'
        placeholder='Username'
        required
        value={usernameInput}
        onChange={(e)=>{setusernameInput(e.target.value)}}/>
      </div>
      <h1 className='pwdTextreg'>Password</h1>
      <div className={!nopwd ? 'inputBoxpassword' : 'inputBoxpasswordred'}>
        <input
        type={openPwd ? 'text' : 'password'}
        placeholder='Password'
        required
        value={passInput}
        onChange={(e)=>{setpassInput(e.target.value)}}/>
      </div>
      <button 
        type='submit' 
        onClick={(e)=>{theEyepwd(e)}} 
        className='eyebtnpwdreg'
        title='Show Password'>
            <img src={eye} className='eyepwdreg' alt='eye'/>
      </button> 
      <h1 className='confTextreg'>Confirm Password</h1>
      <div className={!noconf ? 'inputBoxconfirm' : 'inputBoxconfirmred'}>
        <input
        type={openConf ? 'text' : 'password'}
        placeholder='Confirm password'
        required
        value={confirmInput}
        onChange={(e)=>{setconfirmInput(e.target.value)}}/>
      </div>
      <button 
              type='submit' 
              onClick={(e)=>{theEyeconf(e)}} 
              className='eyebtnconfreg'
              title='Show Password'>
                <img src={eye} className='eyeconfreg' alt='eye'/>
              </button> 
      <button type='submit' className='regbtn' onClick={(e)=>{handleCreate(e)}}>Add User</button> 
      <button type='button' className='regbash' onClick={()=>{navigate(`/`)}}>Discard</button> 
      </form>
      </div>
    </div>
  )
}

export default Userinfo