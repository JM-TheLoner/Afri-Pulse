import '../Stylesheets/Register.css'
import '../Stylesheets/Background.css'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../Context/DataContext'

const Register = () => {
  const { dark, navigate, birthInput,genInput,lastNameInput, firstNameInput, setbirthInput, setgenInput, setfirstNameInput, setlastNameInput } = useContext(DataContext)

  const[incomplete, setincomplete]=useState(false)
  const[nofirst, setnofirst]=useState(false)
  const[nolast, setnolast]=useState(false)
  const[nogen, setnogen]=useState(false)
  const[nodob, setnodob]=useState(false)

  const getGender =async () =>{
    setgenInput(document.getElementById('userGender').value)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const Continue = (e) =>{
  e.preventDefault()
  setincomplete(false)
  setnodob(false)
  setnofirst(false)
  setnolast(false)
  setnogen(false)

  if (!firstNameInput || !lastNameInput || !genInput || !birthInput){
    setincomplete(true)
    if(!firstNameInput){
      setnofirst(true)
    }
    if(!lastNameInput){
      setnolast(true)
    }
    if(!genInput){
      setnogen(true)
    }
    if(!birthInput){
      setnodob(true)
    }
    
    alert(`Incomplete information given`)    
  }
  
  else{    
    navigate('/register/contact')
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
      <div className='regWrapper'>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>Create New User</h1>
      <form>
      {incomplete && <p className='requiredreg'>All fields must be filled</p>}
      <h1 className='firstText1'>FirstName</h1>
      <div className={!nofirst ? 'inputBoxfirst' : 'inputBoxfirstred'}>
        <input
        type='text'
        placeholder='Firstname'
        required
        value={firstNameInput}
        onChange={(e)=>{setfirstNameInput(e.target.value)}}/>
      </div>
      <h1 className='lastText1'>Lastname</h1>
      <div className={!nolast ? 'inputBoxlast' : 'inputBoxlastred'}>
        <input
        type='text'
        placeholder='Lastname'
        required
        value={lastNameInput}
        onChange={(e)=>{setlastNameInput(e.target.value)}}/>
      </div>
      <h1 className='genText1'>Gender</h1>
      <div className={!nogen ? 'inputBoxgen' : 'inputBoxgenred'}>
        <select name='userGender' id='userGender' defaultValue={genInput} onChange={getGender}>
          <option value='' selected>Select a Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div> 
      <h1 className='dobText1'>Date of Birth</h1>
      <div className={!nodob ? 'inputBoxdob' : 'inputBoxdobred'}>
        <input
        type='date'
        placeholder='D.O.B'
        required
        value={birthInput}
        onChange={(e)=>{setbirthInput(e.target.value)}}/>
      </div>
    </form>
      <button type='submit' className='conta' onClick={(e)=>Continue(e)}>Continue</button>
    </div>
    </div>
  )
}

export default Register
