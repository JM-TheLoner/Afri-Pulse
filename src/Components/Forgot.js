import '../Stylesheets/Forgot.css'
import '../Stylesheets/Background.css'
import DataContext from '../Context/DataContext'
import { useContext, useState, useEffect } from 'react'
import eye from './eyeimg.png'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {

  const { newPwd, setnewPwd, confirmPwd, setconfirmPwd, dark } = useContext(DataContext)

  const [idInput, setidInput] = useState('')
  const [isLoading, setisLoading] = useState('')
  const navigate = useNavigate()
 /*  const [wrong, setwrong] = useState(false) */
  const [openPwd, setopenPwd] = useState(false)
  const [openConf, setopenConf] = useState(false)
  const [noId, setnoId] = useState(false)
  const [noPassword, setnoPassword] = useState(false)
  const [noConfirm, setnoConfirm] = useState(false)
  const [fetchError, setfetchError] = useState(false)

/*   const failed = () =>{
    alert('No existing user matches specified details')
    setwrong(true)
  } */

  const ider= () => {
    alert('email Required')
    setnoId(true)
    setisLoading(false)
    if (!newPwd) {
      setnoPassword(true)
    }
    if (!confirmPwd) {
      setnoConfirm(true)
    }
  }
  const passworder= () => {
    alert(`Password Required`)
    setnoPassword(true)
    setisLoading(false)
    if (!confirmPwd) {
      setnoConfirm(true)
    }
  }
  const confirmer= () => {
    alert(`Confirm the Password`)
    setnoConfirm(true)
  }

  const mismatch = () =>{
    alert(`New password must match confirmation password`)    
    setnoPassword(true)
    setnoConfirm(true)
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const handleForgot = async (e) => {
    e.preventDefault()
    setnoConfirm(false)
    setisLoading(true)
    setnoId(false)
    setnoPassword(false)
    if (!idInput) {
        ider()
    }
    if (idInput && !newPwd){
        passworder()
    }
    if (newPwd && newPwd !== confirmPwd && idInput) {
        if (!confirmPwd){
            confirmer()
        } else if (confirmPwd){
          mismatch()
        }
    }
    if (newPwd && newPwd === confirmPwd && idInput) {
        setisLoading(true)
        alert('Attempt to log in now')
        navigate(`/login`)
        setisLoading(false)
        setidInput('')
        setnewPwd('')
        setconfirmPwd('')
        setfetchError(false)
        }}
  
        const theEyepwd = async (e) =>{
          e.preventDefault()
          setopenPwd(!openPwd)
        }
        const theEyeconf = async (e) =>{
          e.preventDefault()
          setopenConf(!openConf)
        }

  return (
<div className='Forgotten'>
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
          <div className='forgotWrapper'>
            <form> 
              <h1 className={!dark ? 'title' : 'dtitle'}>Forgotten Password</h1>
              {fetchError && <p className='error1'>{fetchError}</p>}
              {isLoading && <p className='changing'>Please Wait...</p>}
              {/* {wrong && <p className='failed'>Wrong details provided</p>} */}
              {noId && <p className='required1'>All fields must be filled</p>}
              {!noId && noPassword && <p className='required1'>All fields must be filled</p>}
              {!noId && !noPassword && noConfirm && <p className='required1'>All fields must be filled</p>}
              <h1 className='usernameText'>Username</h1>
              <div className={!noId ? 'EmailinputBox' : 'EmailinputBoxred'}>
                <input
                type='text'
                placeholder='Username'
                required
                value={idInput}
                onChange={(e)=>{setidInput(e.target.value)}}/>
              </div>
              <h1 className='pwdText'>Password</h1>
              <div className={!noPassword ? 'pwdinputBox' : 'pwdinputBoxred'}>
                <input
                type={openPwd ? 'text' : 'password'}
                placeholder='New Password'
                required
                value={newPwd}
                onChange={(e)=>{setnewPwd(e.target.value)}}/>
              </div>
              <button 
              type='submit' 
              onClick={(e)=>{theEyepwd(e)}} 
              className='eyebtnpwd'
              title='Show Password'>
                <img src={eye} className='eyepwd' alt='eye'/>
              </button> 
              <h1 className='confirmText'>Confirm Password</h1>
              <div className={!noConfirm ? 'confinputBox1' : 'confinputBox1red'}>
                <input
                type={openConf ? 'text' : 'password'}
                placeholder='Confirm Password'
                required
                value={confirmPwd}
                onChange={(e)=>{setconfirmPwd(e.target.value)}}/>
              </div>
              <button 
              type='submit' 
              onClick={(e)=>{theEyeconf(e)}} 
              className='eyebtnconf'
              title='Show Password'>
                <img src={eye} className='eyeconf' alt='eye'/>
              </button> 
              <button type='submit' className='forgotbtn' onClick={(e)=>{handleForgot(e)}}> Reset </button>
            </form>
          </div>
        </div>
  )
}

export default Forgot
