import '../Stylesheets/Donate.css'
import '../Stylesheets/Background.css'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../Context/DataContext'

const Donate = () => {

  const subs = 'Other Information (only select the ones that apply to you)'

  const { navigate, dark, locationDataobj } = useContext(DataContext)

  const [weight, setweight] = useState()
  const [gender, setgender] = useState()
  const [bloodType, setbloodType] = useState()
  const [rhesus, setrhesus] = useState('')
  const [genoType, setgenoType] = useState()
  const [date, setdate] = useState()
  const [substance, setsubstance] = useState(false)
  const [substancelist, setsubstancelist] = useState('')
  const [tatoo, settatoo] = useState(false)
  const [pregnant, setpregnant] = useState(false)
  const [tatootime, settatootime] = useState('')
  const [pregnanttime, setpregnanttime] = useState('')
  const [Location, setLocation] = useState('')
  
  const getGen =async () =>{
    setgender(document.getElementById('usergender').value)
  }
  const getBlood =async () =>{
    setbloodType(document.getElementById('userBlood').value)
  }
  const getRhesus =async () =>{
    setrhesus(document.getElementById('userRhesus').value)
  }
  const getGeno =async () =>{
    setgenoType(document.getElementById('userGeno').value)
  }
  const getlocs =async () =>{
    setLocation(document.getElementById('userlocs').value)
  }
  const handletats = () =>{
    tatoo === true ?
    settatoo(false) :
    settatoo(true)
  }
  const handlesubs = () =>{
    substance === true ?
    setsubstance(false) :
    setsubstance(true)
  }
  const handlepregs = () =>{
    pregnant === true ?
    setpregnant(false) :
    setpregnant(true)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const goDonate = (e) =>{
  e.preventDefault()

  console.log(`Weight: ${weight}`)
  console.log(`Date: ${date}`)
  console.log(`Location: ${Location}`)
  console.log(`Blood Type: ${bloodType}${rhesus}`)
  console.log(`Genotype: ${genoType}`)
  console.log(`Tatoo: ${tatoo}`)
  console.log(`Substance: ${substance}`)
  substancelist !== '' ? console.log(`Substances listed: ${substancelist}`) : console.log(null)
  setweight('')
  setbloodType('')
  setrhesus('')
  setgenoType('')
  setsubstance(false)
  setsubstancelist('')
  settatoo(false)
  setdate('')

  navigate('/thankyou')
 }


  return (
    <div className='Donate'>
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
      <div className='donwrapper'>
        <h1 className={!dark ? 'dontitle' : 'ddontitle'}>Donate Blood</h1>
        <form>
          <p className='genTextdon'>Select Your Gender</p>
          <div className='inputBoxgender'>            
            <select name='usergender' id='usergender' defaultValue={gender} onChange={getGen} required>
              <option value='' selected>Select your Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
          <p className='weightTextdon'>Enter your Weight(in lbs)</p>
          <div className='inputBoxweight'>
            <input
            type='text'
            placeholder='Weight in Kg'
            required
            value={weight}
            onChange={(e)=>{setweight(e.target.value)}}/>
          </div> 
          <p className='bloodTextdon'>Select Your Bloodtype</p>
          <div className='inputBoxblood'>            
            <select name='userBlood' id='userBlood' defaultValue={bloodType} onChange={getBlood} required>
              <option value='' selected>Select your Bloodtype</option>
              <option value='A'>A</option>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='AB'>AB</option>
              <option value='O'>O</option>
            </select>
          </div> 
          <p className='rhesusTextdon'>Select Your Rhesus Factor</p>
          <div className='inputBoxrhesus'>
            <select name='userRhesus' id='userRhesus' defaultValue={rhesus} onChange={getRhesus} required>
              <option value='' selected>Select your Rhesus</option> 
              <option value='+'>+</option>
              <option value='-'>-</option>
            </select>
          </div> 
          <p className='genoTextdon'>Select Your Genotype</p>
          <div className='inputBoxgeno'>
            <select name='userGeno' id='userGeno' defaultValue={genoType} onChange={getGeno} required>
              <option value='' selected>Select your Genotype</option> 
              <option value='AA'>AA</option>
              <option value='AS'>AS</option>
              <option value='SS'>SS</option>
              <option value='AC'>AC</option>
              <option value='CC'>CC</option>
              <option value='SC'>SC</option>
            </select>
          </div> 
          <h3 className='dateTextdon'>Preffered Date</h3>
          <div className='inputBoxdate'>
            <input
            type='date'
            placeholder='Date Available'
            required
            value={date}
            onChange={(e)=>{setdate(e.target.value)}}/>
          </div>
          <p className='locsTextdon'>Select A Prefered Location</p>
          <div className='inputBoxlocs'>
            <select name='userlocs' id='userlocs' defaultValue={Location} onChange={getlocs} required>
              <option value='' selected>Select A Location</option> 
              {locationDataobj.map((location)=>(
              <option value={location.address}>{location.address}, {location.name}</option>
              ))}
            </select>
          </div>           
          <p className='subsTextdon'>{subs}</p>

          <p className='pregTextdon'>Were you Pregnant within the last 12 months</p>
          <div className='inputBoxPreg'>
            <input
            type='checkbox'
            required
            name="pregnant"
            checked={pregnant}
            onChange={(e)=>{handlepregs(e)}}/>             
          </div> 
          {pregnant === true
        ? 
          <div className='inputBoxPregtxt'> 
            <input
            type='text'
            placeholder='How long ago? input 0 if you are still pregnant'
            value={pregnanttime}
            onChange={(e)=>{setpregnanttime(e.target.value)}}/>
          </div> 
        : 
          <p></p>
        }
          <p className='tatTextdon'>Do you have any tattoos</p>
          <div className='inputBoxtat'>
            <input
            type='checkbox'
            required
            name='tatoo'
            checked={tatoo}
            onChange={(e)=>{handletats(e)}}/>            
          </div>        
          { tatoo === true 
        ?
          <div className='inputBoxtattxt'>
            <input
            type='text'
            placeholder='How long have you had them'
            value={tatootime}
            onChange={(e)=>{settatootime(e.target.value)}}/>
          </div>
        :
          <p></p>
        }
          <p className='histTextdon'>Are you on any medication or do you abuse any drugs</p>
          <div className='inputBoxhist'>
            <input
            type='checkbox'
            required
            name='substance'
            checked={substance}
            onChange={(e)=>{handlesubs(e)}}/>            
          </div>
        {substance === true 
        ?
          <div className='inputBoxhistory'>
            <textarea
            type='text'
            placeholder='List the Substances'
            value={substancelist}
            onChange={(e)=>{setsubstancelist(e.target.value)}}/>
          </div>
        :
          <p></p>
        }
        </form>
        <button type='submit' className='godonbtn' onClick={(e)=>goDonate(e)}>Confirm</button>
      </div>
    </div>
  )
}

export default Donate
