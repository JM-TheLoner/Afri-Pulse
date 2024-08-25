import '../Stylesheets/Dash.css'
import '../Stylesheets/Background.css'
import { useEffect, useContext } from 'react'
import { PieChart, Pie, Tooltip, Cell, Label } from 'recharts'
import DataContext from '../Context/DataContext'
import danceblood from './Untitled17_20240329172633.png'


const Dash = () => {

  const { analysis, setanalysis, navigate, locationDataobj } = useContext(DataContext)

  const handleanalysisG = async (e) =>{
    e.preventDefault()
    setanalysis('General')
  }
  const handleanalysisP = async (e) =>{
    e.preventDefault()
    setanalysis('Personal')
  }


  let generalStats={
    collected : {
      wholeBlood : {
        aTypePos: 6,
        bTypePos: 1,
        abTypePos: 362,
        oTypePos: 378,
        aTypeNeg: 43,
        bTypeNeg: 5,
        abTypeNeg: 56,
        oTypeNeg: 796,
      },
      platelets : {
        aTypePos: 85,
        bTypePos: 9,
        abTypePos: 310,
        oTypePos: 161,
        aTypeNeg: 12,
        bTypeNeg: 183,
        abTypeNeg: 14,
        oTypeNeg: 145,
      },
      plasma : {
        aTypePos: 164,
        bTypePos: 17,
        abTypePos: 138,
        oTypePos: 19,
        aTypeNeg: 205,
        bTypeNeg: 218,
        abTypeNeg: 22,
        oTypeNeg: 234,
      },
      powerRed : {
        aTypePos: 24,
        bTypePos: 253,
        abTypePos: 263,
        oTypePos: 27,
        aTypeNeg: 28,
        bTypeNeg: 299,
        abTypeNeg: 30,
        oTypeNeg: 314,
      }
    },
    delivered : {
      wholeBlood : {
        aTypePos: 20,
        bTypePos: 134,
        abTypePos: 26,
        oTypePos: 343,
        aTypeNeg: 469,
        bTypeNeg: 543,
        abTypeNeg: 623,
        oTypeNeg: 757,
      },
      platelets : {
        aTypePos: 87,
        bTypePos: 93,
        abTypePos: 610,
        oTypePos: 116,
        aTypeNeg: 120,
        bTypeNeg: 132,
        abTypeNeg: 146,
        oTypeNeg: 15,
      },
      plasma : {
        aTypePos: 16,
        bTypePos: 17,
        abTypePos: 128,
        oTypePos: 19,
        aTypeNeg: 207,
        bTypeNeg: 21,
        abTypeNeg: 322,
        oTypeNeg: 23,
      },
      powerRed : {
        aTypePos: 245,
        bTypePos: 252,
        abTypePos: 26,
        oTypePos: 272,
        aTypeNeg: 28,
        bTypeNeg: 298,
        abTypeNeg: 30,
        oTypeNeg: 371,
      }
    },
    storage : {
      wholeBlood : {
        aTypePos: 10000,
        bTypePos: 10090,
        abTypePos: 20060,
        oTypePos: 30003,
        aTypeNeg: 42997,
        bTypeNeg: 53532,
        abTypeNeg: 62835,
        oTypeNeg: 75790,
      },
      platelets : {
        aTypePos: 8,
        bTypePos: 9,
        abTypePos: 10,
        oTypePos: 11,
        aTypeNeg: 12,
        bTypeNeg: 13,
        abTypeNeg: 14,
        oTypeNeg: 15,
      },
      plasma : {
        aTypePos: 16,
        bTypePos: 17,
        abTypePos: 18,
        oTypePos: 19,
        aTypeNeg: 20,
        bTypeNeg: 21,
        abTypeNeg: 22,
        oTypeNeg: 23,
      },
      powerRed : {
        aTypePos: 24,
        bTypePos: 25,
        abTypePos: 26,
        oTypePos: 27,
        aTypeNeg: 28,
        bTypeNeg: 29,
        abTypeNeg: 30,
        oTypeNeg: 31,
      }
    }
  }

  const generalRecievedWholeTotal = generalStats.collected.wholeBlood.aTypePos + generalStats.collected.wholeBlood.abTypePos + generalStats.collected.wholeBlood.bTypePos + generalStats.collected.wholeBlood.oTypePos + generalStats.collected.wholeBlood.aTypeNeg + generalStats.collected.wholeBlood.abTypeNeg + generalStats.collected.wholeBlood.bTypeNeg + generalStats.collected.wholeBlood.oTypeNeg
  const generalRecievedPlasmaTotal = generalStats.collected.plasma.aTypePos + generalStats.collected.plasma.abTypePos + generalStats.collected.plasma.bTypePos + generalStats.collected.plasma.oTypePos + generalStats.collected.plasma.aTypeNeg + generalStats.collected.plasma.abTypeNeg + generalStats.collected.plasma.bTypeNeg + generalStats.collected.plasma.oTypeNeg
  const generalRecievedRBCTotal = generalStats.collected.powerRed.aTypePos + generalStats.collected.powerRed.abTypePos + generalStats.collected.powerRed.bTypePos + generalStats.collected.powerRed.oTypePos + generalStats.collected.powerRed.aTypeNeg + generalStats.collected.powerRed.abTypeNeg + generalStats.collected.powerRed.bTypeNeg + generalStats.collected.powerRed.oTypeNeg
  const generalRecievedPlateletTotal = generalStats.collected.platelets.aTypePos + generalStats.collected.platelets.abTypePos + generalStats.collected.platelets.bTypePos + generalStats.collected.platelets.oTypePos + generalStats.collected.platelets.aTypeNeg + generalStats.collected.platelets.abTypeNeg + generalStats.collected.platelets.bTypeNeg + generalStats.collected.platelets.oTypeNeg

  // const generalDonatedWholeTotal = generalStats.delivered.wholeBlood.aTypePos + generalStats.delivered.wholeBlood.abTypePos + generalStats.delivered.wholeBlood.bTypePos + generalStats.delivered.wholeBlood.oTypePos + generalStats.delivered.wholeBlood.aTypeNeg + generalStats.delivered.wholeBlood.abTypeNeg + generalStats.delivered.wholeBlood.bTypeNeg + generalStats.delivered.wholeBlood.oTypeNeg
  // const generalDonatedPlasmaTotal = generalStats.delivered.plasma.aTypePos + generalStats.delivered.plasma.abTypePos + generalStats.delivered.plasma.bTypePos + generalStats.delivered.plasma.oTypePos + generalStats.delivered.plasma.aTypeNeg + generalStats.delivered.plasma.abTypeNeg + generalStats.delivered.plasma.bTypeNeg + generalStats.delivered.plasma.oTypeNeg
  // const generalDonatedRBCTotal = generalStats.delivered.powerRed.aTypePos + generalStats.delivered.powerRed.abTypePos + generalStats.delivered.powerRed.bTypePos + generalStats.delivered.powerRed.oTypePos + generalStats.delivered.powerRed.aTypeNeg + generalStats.delivered.powerRed.abTypeNeg + generalStats.delivered.powerRed.bTypeNeg + generalStats.delivered.powerRed.oTypeNeg
  // const generalDonatedPlateletTotal = generalStats.delivered.platelets.aTypePos + generalStats.delivered.platelets.abTypePos + generalStats.delivered.platelets.bTypePos + generalStats.delivered.platelets.oTypePos + generalStats.delivered.platelets.aTypeNeg + generalStats.delivered.platelets.abTypeNeg + generalStats.delivered.platelets.bTypeNeg + generalStats.delivered.platelets.oTypeNeg
  
  let currentid = 0
  let times = 0
  let currentuser = {
    id: null,
    Name: null,
    Username: null,
    usertype: null,
    Age: null,
    Weight: null,
    Gender: null,
    Email: null,
    Phonenum: null,
    Location: null,
    Address: null,
    Donnum: null,
    Recnum: null,
    Pendnum: null,
    Bloodtype: null,
    applicationid_0: null,
    applicationid_1: null,
    applicationid_2: null
  }

  let personalStats=[
    {
      id: 0,
      Name: 'FirstName LastName',
      Username: 'First',
      usertype: 'Personal',
      Age: 23,
      Weight: 185,
      Gender: 'Male',
      Email: 'gmail.com',
      Phonenum: '6736271910',
      Address: 'loremipsum lorem',
      Location: 'Lagos',
      Donnum: 3,
      Recnum: 0,
      Pendnum: 1,
      Bloodtype: 'O+',
      applicationid_0: '1001',
      applicationid_1: null,
      applicationid_2: null
    },
    {
      id: 1,
      Name: 'Admin istrator',
      Username: 'admin',
      usertype: 'Business',
      Age: 33,
      Weight: 115,
      Gender: 'Male',
      Email: 'gmail.com',
      Phonenum: '69277400',
      Address: 'loremipsum loremips',
      Location: 'Lagos',
      Donnum: 4,
      Recnum: 1,
      Pendnum: 3,
      Bloodtype: 'A+',
      applicationid_0: '1002',
      applicationid_1: '1003',
      applicationid_2: '1004'
    },
    {
      id: 2,
      Name: 'First Last',
      Username: 'last',
      usertype: 'Personal',
      Age: 23,
      Weight: 185,
      Gender: 'Female',
      Email: 'gmail.com',
      Phonenum: '673936820',
      Address: 'loremi psum lorem',
      Location: 'Abuja',
      Donnum: 1,
      Recnum: 0,
      Pendnum: 1,
      Bloodtype: 'AB+',
      applicationid_0: '1000',
      applicationid_1: null,
      applicationid_2: null
    },
    {
      id: 4,
      Name: 'FirstName LastName',
      Username: 'User',
      usertype: 'Personal',
      Age: 42,
      Weight: 195,
      Gender: 'Male',
      Email: 'gmail.com',
      Phonenum: '773020910',
      Address: 'loremipsum lorem',
      Location: 'Borno',
      Donnum: 3,
      Recnum: 1,
      Pendnum: 1,
      Bloodtype: 'O+',
      applicationid_0: '1005',
      applicationid_1: null,
      applicationid_2: null
    },
    {
      id: 5,
      Name: 'FirstName LastName',
      Username: 'Namer',
      usertype: 'Business',
      Age: 23,
      Weight: 185,
      Gender: 'Male',
      Email: 'gmail.com',
      Phonenum: '6736271910',
      Address: 'loremipsum lorem',
      Location: 'Anambra',
      Donnum: 5,
      Recnum: 2,
      Pendnum: 0,
      Bloodtype: 'B+',
      applicationid_0: null,
      applicationid_1: null,
      applicationid_2: null
    }
  ]

  personalStats.map((user) => (
    user.id === currentid ?
      (currentuser = user)
    :
      times + 1
    )
  )

  const GeneralCollectedData = [
    {name: "Whole Blood", amounts: generalRecievedWholeTotal, color: "brown"},
    {name: "Double RBC", amounts: generalRecievedRBCTotal, color: "red"},
    {name: "Plasma", amounts: generalRecievedPlasmaTotal, color: "yellow"},
    {name: "Platelets", amounts: generalRecievedPlateletTotal, color: "purple"}
  ]

  const totalGeneralCollectedData = generalRecievedWholeTotal + generalRecievedRBCTotal + generalRecievedPlasmaTotal + generalRecievedPlateletTotal

  let appointments = [
    {time: "10:30 AM", name: "John Doe", appType: "Donation", bloodType: "A-", appSubstance: "Whole Blood", id: '1000'},
    {time: "11:30 AM", name: "Jane Doe", appType: "Reciept", bloodType: "A-", appSubstance: "Plasma", id: '1001'},
    {time: "11:38 AM", name: "Jack Doe", appType: "Donation", bloodType: "A-", appSubstance: "Whole Blood", id: '1002'},
    {time: "12:34 AM", name: "James Doe", appType: "Donation", bloodType: "A-", appSubstance: "Double RBC", id: '1003'},
    {time: "1:26 PM", name: "Joe Doe", appType: "Reciept", bloodType: "A-", appSubstance: "Whole Blood", id: '1004'},
    {time: "3:00 PM", name: "Jeffery Doe", appType: "Donation", bloodType: "A-", appSubstance: "Whole Blood", id: '1005'}
  ]

  const appointmentslength = Object.keys(appointments).length

const locationslength = Object.keys(locationDataobj).length

let numoflocs = 0

const findpersonalizedlocs = () =>{
    locationDataobj.map((location)=>(
      location.name === currentuser.Location 
      ?
        numoflocs = numoflocs + 1 
      :
        numoflocs = numoflocs + 0
    ))
}

findpersonalizedlocs()

let maxlocdon = 0
let maxlocrec = 0
// let maxlocdonamt = 0
// let maxlocrecamt = 0
let maxdonloc = ''
let maxrecloc = ''
let maxdonlocarea = ''
let maxreclocarea = ''
// let maxdonamtloc = ''
// let maxrecamtloc = ''

const findmaxlocdon = () =>{
  let init = 0
  locationDataobj.map((location) =>(
    location.donors > init ? init = location.donors : init += 0
  ))
  locationDataobj.map((location) =>(
    location.donors === init ? maxdonloc = location.name : init += 0
  ))
  locationDataobj.map((location) =>(
    location.donors === init ? maxdonlocarea = location.address : init += 0
  ))
  maxlocdon=init
}
// const findmaxlocdonamt = () =>{
//   let init = 0
//   locationDataobj.map((location) =>(
//     location.donatedamount > init ? init = location.donatedamount : init += 0
//   ))
//   locationDataobj.map((location) =>(
//     location.donatedamount === init ? maxdonamtloc = location.name : init += 0
//   ))
//   maxlocdonamt=init
// }

const findmaxlocrec = () =>{
  let init = 0
  locationDataobj.map((location) =>(
    location.recipients > init ? init = location.recipients : init += 0
  ))
  locationDataobj.map((location) =>(
    location.recipients === init ? maxrecloc = location.name : init += 0
  ))
  locationDataobj.map((location) =>(
    location.recipients === init ? maxreclocarea = location.address : init += 0
  ))
  maxlocrec=init
}

// const findmaxlocrecamt = () =>{
//   let init = 0
//   locationDataobj.map((location) =>(
//     location.recipientamount > init ? init = location.recipientamount : init += 0
//   ))
//   locationDataobj.map((location) =>(
//     location.recipientamount === init ? maxrecamtloc = location.name : init += 0
//   ))
//   maxlocrecamt=init
// }

  const men = 5982;
  const women = 3856;
  const children = 1583;

  const totalRecipients = men + women + children 
  
  const pendingRecipients = 4902
  const completedRecipients = totalRecipients - pendingRecipients

  const donormen = 5982;
  const donorwomen = 3856;

  const totalDonors = donormen + donorwomen 
  
  const pendingDonors = 4902
  const completedDonors = totalDonors - pendingDonors

  const genderBreakdown = [
    {name: "Men", amounts: men, color: "blue"},
    {name: "Women", amounts: women, color: "green"},
    {name: "Children", amounts: children, color: "orange"},
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])
 
  findmaxlocdon()
  // findmaxlocdonamt()
  findmaxlocrec()
  // findmaxlocrecamt()

 const goDonate = (e) =>{
  e.preventDefault()
  navigate('/donate')
 }
 const goRequest = (e) =>{
  e.preventDefault()
  navigate('/request')
 }

  return (
    <div className='Dash'>
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
      <div className='topOptions'>
        { analysis === 'General' ?
          <>
            <p className='firstOptionSelected'> GENERAL </p>
            <p className='optionDivider'>|</p>
            <button type='submit' className='secondOption' onClick={(e)=>handleanalysisP(e)}> PERSONAL </button>
          </>
        :
          <>
            <button type='submit' className='firstOption' onClick={(e)=>handleanalysisG(e)}> GENERAL </button>
            <p className='optionDivider'>|</p>
            <p className='secondOptionSelected'> PERSONAL </p>
          </>
        }        
      </div>
      {analysis === 'General' ? 
        <div className='page'>
          <div className="totalWrap">
            <div className='wraptotheleft'>
              <div className='storageWrapper1'>
                <p className='divisionName1'>Patient Statistics</p>
                
                  <div className='personalwrapper1'>
                    <div className="dashcharts1">
                      <PieChart width={405} height={255}>
                        <Tooltip />
                        <Pie
                          data = { genderBreakdown }
                          dataKey = "amounts"
                          isAnimationActive={true}
                          legendType='circle'
                          startAngle={180}                          
                          endAngle={-180}                          
                          outerRadius={85}
                          innerRadius={55}
                          paddingAngle={-10}
                        >
                          {genderBreakdown.map((entry, index) =>(
                            <Cell key={`slice-${index}`} fill={entry.color} />
                          ))}
                          <Label width={50} position="center" color='black' fontWeight={500}>
                            {totalRecipients} Patients
                          </Label>
                        </Pie>
                      </PieChart>
                    </div>
                    <div className='words'>
                      <div className='straight'>
                        <div className='green'></div>
                        <p className='norp1'> Women {Math.floor((women*100)/totalRecipients)}%</p>
                      </div>
                      <div className='straight'>
                        <div className='blue'></div>
                        <p className='norp1'> Men {Math.floor((men*100)/totalRecipients)}%</p>
                      </div>
                      <div className='straight'>
                        <div className='orange'></div>
                        <p className='norp1'> Children {Math.floor((children*100)/totalRecipients)}%</p>
                      </div>
                    </div>
                  </div>
                  <div className='personalwrapper2'>
                    <p className="letter1">Total Donations</p>
                    <p className='cap1'>{totalRecipients}</p>
                  </div>
                  <div className='personalwrapper3'>
                    <p className="letter2">Fulfilled Donations</p>
                    <p className='cap2'>{completedRecipients}</p>
                  </div>
                  <div className='personalwrapper4'>
                    <p className="letter3">Pending Donations</p>
                    <p className='cap3'>{pendingRecipients}</p>
                  </div>
                  <div className='personalwrapper5'>
                    <p className='totaltitle1'>Total Amounts Recieved</p>
                    <p className='totaltitle2'>(in Pints)</p>
                    <div className="dashcharts2">
                      <PieChart width={525} height={270}>
                        <Tooltip />
                        <Pie
                          data = { GeneralCollectedData }
                          dataKey = "amounts"
                          isAnimationActive={true}
                          legendType='circle'
                          startAngle={180}                          
                          endAngle={-180}                          
                          outerRadius={85}
                          innerRadius={55}
                          paddingAngle={-10}
                          
                        >
                          {GeneralCollectedData.map((entry, index) =>(
                            <Cell key={`slice-${index}`} fill={entry.color} />
                          ))}
                          <Label width={50} position="center" color='black' fontWeight={500}>
                            {totalGeneralCollectedData}pt
                          </Label>
                        </Pie>
                      </PieChart>
                    </div>
                    <div className='words1'>
                      <div className='straight'>
                        <div className='brown'></div>
                        <p className='norp1'> Whole Blood: {generalRecievedWholeTotal}pt</p>
                      </div>
                      <div className='straight'>
                        <div className='red'></div>
                        <p className='norp1'> RBC: {generalRecievedRBCTotal}pt</p>
                      </div>
                      <div className='straight'>
                        <div className='yellow'></div>
                        <p className='norp1'> Plasma {generalRecievedPlasmaTotal}pt</p>
                      </div>
                      <div className='straight'>
                        <div className='purple'></div>
                        <p className='norp1'> Platelets {generalRecievedPlateletTotal}pt</p>
                      </div>
                    </div>
                  </div>
                </div>
            

            <div className='storageWrapper2'>
              <div className='personalwrapper6'>
                <p className='totaltitle4'>{totalDonors}</p>
                <p className='filler1'> Donors</p>
                <p className='filler2'>{pendingDonors} Pending Donations</p>
                <p className='filler3'>{completedDonors} Completed Donations</p>
              </div>

              <div className='personalwrapper7'>
                <p className='totaltitle5'>The most Popular Recipient location is</p>
                <p className='filler5'>{maxreclocarea} in {maxrecloc}</p>
                <p className='filler6'>with</p> 
                <p className='filler4'>{maxlocrec}</p>                                
              </div>

              <div className='personalwrapper8'>
                <p className='totaltitle6'>The most Popular donor location is</p>
                <p className='filler5'>{maxdonlocarea} in {maxdonloc}</p>
                <p className='filler6'>with</p>       
                <p className='filler41'>{maxlocdon}</p>         
              </div>              
            </div>

            <div className='storageWrapper3'>
              <p className='totaltitle3'>Storage</p>

                <div className='positivewrapper1'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp2'>Whole Blood</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

                <div className='positivewrapper2'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp3'>Double RBC</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

                <div className='positivewrapper2'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp4'>Plasma</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap7'>{generalStats.storage.plasma.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap7'>{generalStats.storage.plasma.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap7'>{generalStats.storage.plasma.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap7'>{generalStats.storage.plasma.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap7'>{generalStats.storage.plasma.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap7'>{generalStats.storage.plasma.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap7'>{generalStats.storage.plasma.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap7'>{generalStats.storage.plasma.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

                <div className='positivewrapper2'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp5'>Platelets</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap8'>{generalStats.storage.platelets.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap8'>{generalStats.storage.platelets.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap8'>{generalStats.storage.platelets.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap8'>{generalStats.storage.platelets.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap8'>{generalStats.storage.platelets.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap8'>{generalStats.storage.platelets.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap8'>{generalStats.storage.platelets.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap8'>{generalStats.storage.platelets.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>  

          <div className='wraptotheright'>
            <div className='storageWrapper4'>
              <p className='totaltitle8'>Location Data</p>
              {(locationslength === 0) ? (
                <div>
                  <img src={danceblood} className='danceblood1' alt='blood'/>
                  <p className='noLocations'>There are no locations loaded</p>
                </div>
                )
                :
                (
                <div>
                  {locationDataobj.map((location) => (
                    <div className='positivewrapper4'>
                      <div className='psubwrapperloc'>
                        <p className='locname'>{location.name}</p>
                        <p className='locadd'>{location.address}</p>
                      </div>
                      <p className='locdon'>Registered Donors: {location.donors}</p>          
                      <p className={location.donors === maxlocdon ? 'locdonmax' : 'nothere'}>Highest</p>         
                      <p className='locrec'>Registered Recipients: {location.recipients}</p>
                      <p className={location.recipients === maxlocrec ? 'locrecmax' : 'nothere'}>Highest</p> 
                    </div>
                  )
                  )}                  
                </div>
                )
              }
            </div>

            <div className='storageWrapper5'>
              <p className='totaltitle7'>Today's Appointments</p>
              {(appointmentslength === 0) ? (
                <div>
                  <img src={danceblood} className='danceblood' alt='blood'/>
                  <p className='noAppointments'>There are no appointments left for today</p>
                </div>
                )
                :
                (
                <div>
                  {appointments.map((appointment) => (
                    <div className='positivewrapper3'>
                      <div className='psubwrapper3'>
                        <p>{appointment.time}</p>
                      </div>
                      <div className='psubwrapper4'>
                        <div className='appointmentlineone'>
                          <p className='appName'>{appointment.name}</p>   
                        </div>     
                        <div className='appointmentlinetwo'>                 
                          <p className='appSub'>{appointment.appSubstance}</p>                 
                          <p className='appType'>{appointment.appType}</p>
                          <p className='appBlood'>{appointment.bloodType}</p>  
                        </div>
                      </div>
                    </div>
                  )
                  )}                  
                </div>
                )
              }


            </div>
          </div>              
        </div>

      :
        <div className='page'>
          <div className="totalWrap">
            <div className='wraptotheleft'>
              <div className='storageWrapper1'>
                <p className='divisionName1'>Personal Information</p>
                
                  <div className='personalwrapper11'>
                      <div>
                        <p className='totaltitle91'>Contact Info</p>
                        <div>
                          <p className='norp21'>Address: </p>
                          <p className='norp11'>{currentuser.Address}</p>
                        </div>
                        <div>
                          <p className='norp21'>Phone Number: </p>
                          <p className='norp11'>{currentuser.Phonenum}</p>
                        </div>
                        <div>
                          <p className='norp21'>Email: </p>
                          <p className='norp11'>{currentuser.Email}</p>
                        </div>
                      </div>               
                  </div>
                  <div className='personalwrapper21'>
                    <p className="letter1">Total Donations</p>
                    <p className='cap1'>{currentuser.Donnum}</p>
                  </div>
                  <div className='personalwrapper31'>
                    <p className="letter2">Total Reciepts</p>
                    <p className='cap2'>{currentuser.Recnum}</p>
                  </div>
                  <div className='personalwrapper41'>
                    <p className="letter3">Pending Appointments</p>
                    <p className='cap3'>{currentuser.Pendnum}</p>
                  </div>
                  <div className='personalwrapper51'>
                    <div>
                      <p className='totaltitle9'>User Info</p>
                      <p className='norp21'>Name: </p>
                      <p className='norp111'>{currentuser.Name}</p>
                      <p className='norp21'>Age: </p>
                      <p className='norp111'>{currentuser.Age}</p>
                      <p className='norp21'>Weight: </p>
                      <p className='norp111'>{currentuser.Weight}</p>
                      <p className='norp21'>Gender: </p>
                      <p className='norp111'>{currentuser.Gender}</p>
                      <p className='norp21'>Blood Type: </p>
                      <p className='norp111'>{currentuser.Bloodtype}</p>
                    </div>  
                  </div>
                </div>
            

            <div className='storageWrapper2'>
              <div className='personalwrapper6'>
                <p className='totaltitle5'>Account Type</p>
                <p className='fillerword'>{currentuser.usertype}</p>
                {currentuser.usertype === 'Personal' 
                ?
                  <>
                    <p className='filler61'>This is a Private User</p>    
                    <p className='nothere'>This is a Public Corporation</p> 
                  </>   
                :          
                  <>                 
                    <p className='nothere'>This is a Private User</p>  
                    <p className='filler61'>This is a Public Corporation</p>   
                  </> 
                }
              </div>

              <div className='personalwrapper7'>

                <p className='filler11'> Total Visits</p>
                <p className='totaltitle4'>{currentuser.Donnum + currentuser.Recnum}</p>
                <p className='filler2'>{currentuser.Donnum} Donations</p>
                <p className='filler3'>{currentuser.Recnum} Recipets</p>                              
              </div>

              <div className='personalwrapper8'>
                <p className='totaltitle6'>There are</p>
                <p className='filler411'>{numoflocs}</p>  
                <p className='filler51'>Locations Around You</p>             
              </div>              
            </div>

            <div className='storageWrapper3'>
              <p className='totaltitle3'>Storage</p>

                <div className='positivewrapper1'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp2'>Whole Blood</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap5'>{generalStats.storage.wholeBlood.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

                <div className='positivewrapper2'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp3'>Double RBC</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap6'>{generalStats.storage.powerRed.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap6'>{generalStats.storage.powerRed.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

                <div className='positivewrapper2'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp4'>Plasma</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap7'>{generalStats.storage.plasma.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap7'>{generalStats.storage.plasma.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap7'>{generalStats.storage.plasma.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap7'>{generalStats.storage.plasma.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap7'>{generalStats.storage.plasma.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap7'>{generalStats.storage.plasma.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap7'>{generalStats.storage.plasma.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap7'>{generalStats.storage.plasma.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

                <div className='positivewrapper2'>
                  <div className='psubwrapper1'>
                    <div className='words2'>
                      <p className='norp5'>Platelets</p>
                    </div>
                  </div>
                  <div className='psubwrapper2'>
                    <div className='types1'>
                      <p className="letter5">A+</p>
                      <p className='cap8'>{generalStats.storage.platelets.aTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">A-</p>
                      <p className='cap8'>{generalStats.storage.platelets.aTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB+</p>
                      <p className='cap8'>{generalStats.storage.platelets.abTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">AB-</p>
                      <p className='cap8'>{generalStats.storage.platelets.abTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B+</p>
                      <p className='cap8'>{generalStats.storage.platelets.bTypePos}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">B-</p>
                      <p className='cap8'>{generalStats.storage.platelets.bTypeNeg}pt</p>
                    </div>
                    <div className='types2'>
                      <p className="letter5">O+</p>
                      <p className='cap8'>{generalStats.storage.platelets.oTypePos}pt</p>
                    </div>
                    <div className='types3'>
                      <p className="letter5">O-</p>
                      <p className='cap8'>{generalStats.storage.platelets.oTypeNeg}pt</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>  

          <div className='wraptotheright'>
            <div className='storageWrapper4'>
              <p className='totaltitle8'>Nearby Locations</p>
              {(numoflocs === 0) ? (
                <div>
                  <img src={danceblood} className='danceblood1' alt='blood'/>
                  <p className='noLocations'>There are no locations in your area</p>
                </div>
                )
                :
                (
                <div>
                  {locationDataobj.map((location) => (
                    location.name === currentuser.Location 
                    ? 
                      <div className='positivewrapper4'>
                        <div className='psubwrapperloc'>
                          <p className='locname'>{location.name}</p>
                          <p className='locadd'>{location.address}</p>
                        </div>
                        <p className='locdon'>{location.donors} Donors registered at this location</p>                 
                        <p className='locrec'>{location.recipients} Recipients registered at this location</p>
                      </div>
                    :
                      <p></p>
                  )
                  )}                  
                </div>
                )
              }
            </div>

            <div className='storageWrapper5'>
              <p className='totaltitle7'>Pending Appointments</p>
              {(currentuser.Pendnum === 0) ? (
                <div>
                  <img src={danceblood} className='danceblood' alt='blood'/>
                  <p className='noAppointments'>You Have no Scheduled appointments</p>
                </div>
                )
                :
                (
                <div>
                  {appointments.map((appointment) => (
                    appointment.id === currentuser.applicationid_0 || appointment.id === currentuser.applicationid_1 || appointment.id === currentuser.applicationid_2 
                    ?
                      <div className='positivewrapper3'>
                        <div className='psubwrapper3'>
                          <p>{appointment.time}</p>
                        </div>
                        <div className='psubwrapper4'>
                          <div className='appointmentlineone'>
                            <p className='appName'>{appointment.name}</p>   
                          </div>     
                          <div className='appointmentlinetwo'>                 
                            <p className='appSub'>{appointment.appSubstance}</p>                 
                            <p className='appType'>{appointment.appType}</p>
                            <p className='appBlood'>{appointment.bloodType}</p>  
                          </div>
                        </div>
                      </div>
                    :
                      <p></p>
                  )
                  )}                  
                </div>
                )
              }


            </div>
          </div>              
          <button type='submit' className='godon' onClick={(e)=>goDonate(e)}>Donate</button>
          <button type='submit' className='goreq' onClick={(e)=>goRequest(e)}>Request</button>
        </div>
      }
    </div>
  )
}

export default Dash
          

