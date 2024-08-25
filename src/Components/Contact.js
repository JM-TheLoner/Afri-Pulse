import '../Stylesheets/Contact.css'
import email from './email.png'
import lov from './lov.png'
import soc from './soc.png'
import phone from './phone.png'
import { useEffect, useState, useContext } from 'react'
import DataContext from '../Context/DataContext'


const Contact = () => {
  const { dark, navigate, locationDataobj } = useContext(DataContext)

  const[fullname, setfullname] = useState('')
  const[contactemail, setcontactemail] = useState('')
  const[contactaddress, setcontactaddress] = useState('')
  const[message, setmessage] = useState('')
  const[nofullname, setnofullname] = useState(false)
  const[nocontactemail, setnocontactemail] = useState(false)
  const[nocontactaddress, setnocontactaddress] = useState(false)
  const[nomessage, setnomessage] = useState(false)
  const[openlocs, setopenlocs] = useState(false)


  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const fullnamer= () => {
  setnofullname(true)
} 
 const emailer= () => {
  setnocontactemail(true)
} 
 const addresser= () => {
  setnocontactaddress(true)
} 
 const messager= () => {
  setnomessage(true)
} 

 const handleContact = async (e) => { 
  e.preventDefault()
  setnofullname(false)
  setnocontactaddress(false)
  setnocontactemail(false)
  setnomessage(false)

  if (!fullname || !contactaddress || !contactemail || !message){
    alert(`All Fields Required`)
  }

  if (!fullname){
      fullnamer()
  }
  if (!contactaddress){
      addresser()
  }
  if (!contactemail){
      emailer()
  }
  if (!message){
      messager()
  }
  if (fullname && contactaddress && contactemail && message){
    setfullname('')
    setcontactaddress('')
    setcontactemail('')
    setmessage('')
    console.log(`Full Name: ${fullname}`)
    console.log(`Email: ${contactemail}`)
    console.log(`Address: ${contactaddress}`)
    console.log(`Message: ${message}`)
    navigate('/contacted')
  }
}
const changeit = async (e, open, setopen) =>{
  e.preventDefault()
  if (open === true){
    setopen(false)
  }
  else{
    setopen(true)
  }
}

  return ( 
    <div className='Contact'>
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
      <div className='contactleft'>
        <div className='contacttext'>
          <p className='contacthead'>Contact Us</p>
          <p className='contactbody'>Trying to donate some blood, or do you just want to find out about blood donation? Reach out to us and we'll tell you everything you want to know.</p>
        </div>
        <div className='contactsameline'>
          <img src={lov} className="ogo1" alt="logo" />
          <figcaption className='ImgTag'>
            <a
              className="loc"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className={!dark ? 'holes' : 'dholes'}>
                <p className='line1'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
              </div>
            </a>
          </figcaption> 
        </div>
        <div className='contactsameline'>
          <img src={phone} className="ogo2" alt="logo" />
          <figcaption className='ImgTag'>
            <div className={!dark ? 'phone1' : 'dphone1'}>
              <p>+234 809 864 6023</p>
              <p>+234 802 923 7128</p>
            </div>
          </figcaption>
        </div>
        <div className='contactsameline'>
          <img src={email} className="ogo3" alt="logo" />
          <figcaption className='ImgTag'>
            <p className={!dark ? 'email' : 'demail'}>AfriPulseHub@gmail.com</p>
          </figcaption>
        </div>
        <div>
          <p className={!dark ? 'soc1' : 'dsoc1'}>Social Media</p>
          <div className='contactsamelinesocs'>
            <a
                className="loc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soc} className="social1" alt="logo" />
              </a>
            <a
                className="loc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soc} className="social2" alt="logo" />
              </a>
            <a
                className="loc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soc} className="social3" alt="logo" />
              </a>
            <a
                className="loc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soc} className="social4" alt="logo" />
              </a>
            <a
                className="loc"
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soc} className="social5" alt="logo" />
              </a>
          </div>

        </div>
        <div className='locationwrap'>     
          <p className='locationlistopener' >See all our locations<button type='submit' className={!openlocs ? 'ansbuttonlocs' : 'ansbuttonopenlocs'}  onClick={(e)=>changeit(e, openlocs, setopenlocs)}>^</button></p>              
          <p className={openlocs ? 'answerloc' : 'nanswerloc'} >
            {locationDataobj.map((location)=>(
            <p className='loccontent'>{location.address}, {location.name}</p>
            ))}                
          </p>
        </div>
      </div>
      <div className='contactwrapper'>
        <div className='getin'><h1 className={!dark ? 'right1' : 'dright1'}>Get In </h1><h2 className={!dark ? 'right2' : 'dright2'}>Touch</h2></div>        
        <h2 className={!dark ? 'right3' : 'dright3'}>We'd Love To Hear From You!</h2>
        <div className='contactsameline'>
          <h1 className='fullnameText'>Full Name</h1>
          <h1 className='contactemailText'>Email</h1>
        </div>
        <div className='contactsameline'>
          <div className={!nofullname ? 'fullnameinputBox' : 'fullnameinputBoxred'}>
            <input
            type='text'
            placeholder=''
            required
            value={fullname}
            onChange={(e)=>{setfullname(e.target.value)}}/>
          </div>

          <div className={!nocontactemail ? 'contactemailinputBox' : 'contactemailinputBoxred'}>
            <input
            type='email'
            placeholder='example@untitled.com'
            required
            value={contactemail}
            onChange={(e)=>{setcontactemail(e.target.value)}}/>
          </div>
        </div>
        <h1 className='contactaddressText'>Address</h1>
        <div className={!nocontactaddress ? 'contactaddressinputBox' : 'contactaddressinputBoxred'}>
            <input
            type='text'
            placeholder=''
            required
            value={contactaddress}
            onChange={(e)=>{setcontactaddress(e.target.value)}}/>
        </div>

        <h1 className='messageText'>Your Message</h1>
        <div className={!nomessage ? 'messageinputBox' : 'messageinputBoxred'}>
            <textarea
            type='text'
            placeholder='Type Your Message Here'
            required
            value={message}
            onChange={(e)=>{setmessage(e.target.value)}}/>
        </div>
        <button type='submit' className='contactbutton' onClick={(e)=>{handleContact(e)}}>Submit</button> 
      </div>
    </div>
  )
}

export default Contact
