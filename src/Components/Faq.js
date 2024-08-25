import '../Stylesheets/Faq.css'
import '../Stylesheets/Background.css'
import DataContext from '../Context/DataContext'
import { useContext, useState } from 'react'

const Faq = () => {

  const { dark } = useContext(DataContext)
  const [open1, setopen1] = useState(false)
  const [open2, setopen2] = useState(false)
  const [open3, setopen3] = useState(false)
  const [open4, setopen4] = useState(false)
  const [open5, setopen5] = useState(false)
  const [open6, setopen6] = useState(false)
  const [open7, setopen7] = useState(false)

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
    <div className='Faq'>
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
      <h1 className={!dark ? 'faqhead' : 'dfaqhead'}>Frequently Asked Questions</h1>
      <h1 className={!dark ? 'faqdesc' : 'dfaqdesc'}>Dispel your doubts related to blood, donations and Afripulse</h1>
      <div className='questionwrapper'>
        <ul>
          <div className='qnawrap'>
            <li>  
              <p className={!dark ? 'question' : 'dquestion'} >Who can donate blood<button type='submit' className={!open1 ? 'ansbutton1' : 'ansbuttonopen1'}  onClick={(e)=>changeit(e, open1, setopen1)}>^</button></p>
              
              <p className={open1 ? 'answer1' : 'nanswer1'} >
                Most people can give blood if they are in good health, if you are aged between 18 and 65 and weigh at least 50 kg. You cannot donate if you have a cold, flu, sore throat, cold sore, stomach bug or any other infection. If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure. If you have visited the dentist for a minor procedure you must wait 24 hours before donating. A test will be administered at the donation site.
                <p>For more information, click <a className='wholink' href='https://www.who.int/campaigns/world-blood-donor-day/2018/who-can-give-blood#:~:text=Below%20are%20some%20basic%20eligibility,that%20appropriate%20consent%20is%20obtained.' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>    
          </div>   
          <div className='qnawrap'>
            <li>
              <p className={!dark ? 'question' : 'dquestion'} >How long do i wait after donating to donate again<button type='submit' className={!open2 ? 'ansbutton2' : 'ansbuttonopen2'}  onClick={(e)=>changeit(e, open2, setopen2)}>^</button></p>              
              <p className={open2 ? 'answer2' : 'nanswer2'} >
                <p>How often can I donate blood? You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between Power Red donations. Whole blood donors can donate up to 6 times a year. Platelet apheresis donors may give every 7 days up to 24 times per year.</p>
                <p>You must wait a minimum of 56 days between whole blood donations. You must wait at least 7 days after donating blood before you can donate platelets. After an automated double red cell collection, you must wait 112 days before donating again.</p>
                <p>You can donate platelets once in a seven day period and up to 24 times a year. You must wait at least 7 days after donating platelets before donating whole blood. After an automated double red cell collection, you must wait 112 days before donating again.
                In any eight (8) week period, you can make one blood donation and one platelet donation or six (6) platelet donations.</p>
              </p>
            </li>   
          </div>
          <div className='qnawrap'>     
            <li>
              <p className={!dark ? 'question' : 'dquestion'} >what are the precautions to take before donation<button type='submit' className={!open3 ? 'ansbutton3' : 'ansbuttonopen3'}  onClick={(e)=>changeit(e, open3, setopen3)}>^</button></p>              
              <p className={open3 ? 'answer3' : 'nanswer3'} >
                <p className='instructcontent'>- Drink plenty of water. Before you donate, drink at least 16 ounces of water for the best blood donation experience. </p>
                <p className='instructcontent'>-  Avoid foods high in fat, like fries or ice cream. Donating blood can make your iron level drop—you can prepare your body by eating foods rich in iron and vitamin C before you donate.</p>
                <p className='instructcontent'>- Abstain from alcohol and some medications like aspirin, blood thinners (such as Coumadin, Heparin, Lovenox, Warfarin) or bovine insulin</p>
                <p className='instructcontent'>- We recommend that you have a full night’s sleep of between 7 and 9 hours the night before your donation.</p>
                <p className='instructcontent'>- Avoid doing any vigorous exercise or heavy lifting the day of your donation.</p>
                <p>For more information, click <a className='wholink' href='https://www.redcrossblood.org/donate-blood/blood-donation-process/before-during-after.html' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>  
          </div>
          <div className='qnawrap'>     
            <li>
              <p className={!dark ? 'question' : 'dquestion'} >What should i do after donating blood<button type='submit' className={!open4 ? 'ansbutton4' : 'ansbuttonopen4'}  onClick={(e)=>changeit(e, open4, setopen4)}>^</button></p>              
              <p className={open4 ? 'answer4' : 'nanswer4'} >
                <p className='instructcontent'>- keep the pressure dressing on your arm for about 30 minutes after you have given blood, and the plaster on for 6 hours</p>
                <p className='instructcontent'>- Drink plenty of water to rehydrate</p>
                <p className='instructcontent'>- Sit/lay down if you feel dizzy or lightheaded</p>
                <p className='instructcontent'>- Eat iron rich foods to replenish lost iron content in the body. Iron supplements and/or iron rich foods are highly recomended</p>
                <p className='instructcontent'>- Avoid consuming alcoholic beverages</p>
                <p className='instructcontent'>- avoid having a hot bath after you have given blood</p>
                <p className='instructcontent'>- Avoid rigorous exercises for at least 24-48 hours</p>
              </p>
            </li>  
          </div> 
          <div className='qnawrap'>     
            <li>
              <p className={!dark ? 'question' : 'dquestion'} >What are the restrictions on blood donation<button type='submit' className={!open5 ? 'ansbutton5' : 'ansbuttonopen5'}  onClick={(e)=>changeit(e, open5, setopen5)}>^</button></p>              
              <p className={open5 ? 'answer5' : 'nanswer5'} >
                <p className='instructcontent'>The following qualities may disqualify you from donating blood: </p>
                <p className='instructcontent'>- Have ever had a positive test for HIV/AIDS or Have ever injected recreational drugs.</p>
                <p className='instructcontent'>- Most medications will not disqualify you from donating blood, but may require a waiting period after your final dose.</p>
                <p className='instructcontent'>- If you got a tattoo in the last three months, it is completely healed, and was applied by a state-regulated facility, which uses sterile needles and fresh ink—and you meet all blood donor eligibility requirements—you can donate blood!</p>
                <p className='instructcontent'>- Following pregnancy, the deferral period should last as many months as the duration of the pregnancy. It is not advisable to donate blood while breast-feeding.</p>
                <p className='instructcontent'>For more information on qualifying and disqualifying qualities, click <a href='https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements.html' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>  
          </div> 
          <div className='qnawrap'>   
            <li>
              <p className={!dark ? 'question' : 'dquestion'} >What does it mean to have a rare blood type<button type='submit' className={!open6 ? 'ansbutton6' : 'ansbuttonopen6'}  onClick={(e)=>changeit(e, open6, setopen6)}>^</button></p>              
              <p className={open6 ? 'answer6' : 'nanswer6'} >
                Every person has an ABO and rhesus blood group: i.e. group A, B, AB, or O and RhD negative or RhD positive. Occasionally, people have an unusual, specific red cell antigen. Alternatively, some individual's red cells lack an antigen which is common to most people. This would be recognised as a “rare” blood type. Some patients have antibodies against a specific blood type and in these circumstances it may be difficult to find blood from a regular blood donor which is compatible with that of the rare type of the patient.
                <p>For more information, click <a className='wholink' href='https://www.redcrossblood.org/donate-blood/dlp/rare-donors.html#:~:text=Rare%20Blood%20Donor&text=Your%20blood%20type%20is%20present,missing%20a%20combination%20of%20antigens.' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>  
          </div>   
          <div className='qnawrap'>      
            <li> 
              <p className={!dark ? 'question' : 'dquestion'} >What can i donate besides blood<button type='submit' className={!open7 ? 'ansbutton7' : 'ansbuttonopen7'}  onClick={(e)=>changeit(e, open7, setopen7)}>^</button></p>              
              <p className={open7 ? 'answer7' : 'nanswer7'} >
                Blood contains several components, including red cells, platelets and plasma which can be donated individually.
                <p className='instructcontent'>- During a whole blood donation, you typically donate a pint (about a half liter) of whole blood.</p>
                <p className='instructcontent'>- During plateletpheresis, only platelets are collected. Platelets help blood to clot and are commonly given to people with cancer or people having major surgery.</p>
                <p className='instructcontent'>- During plasmapheresis, only the liquid portion of the blood (plasma) is collected. Plasma is commonly given to people in emergency and trauma situations to help stop bleeding.</p>
                <p className='instructcontent'>- During double red blood cell donation, two units of red blood cells are collected. Red blood cells carry oxygen to all parts of the body. Red blood cells are typically given to people with sickle cell anemia or significant blood loss due to trauma or surgery.</p>
                <p>For more information, click <a className='wholink' href='https://www.mayoclinic.org/blood-donor-program/plasma-platelet-donations#:~:text=You%20may%20choose%20to%20give,blood%20cells%20or%20plasma%20donations.' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>    
          </div>   
          <div className='qnawrap'>      
            <li> 
              <p className={!dark ? 'question' : 'dquestion'} >What can i donate besides blood<button type='submit' className={!open7 ? 'ansbutton7' : 'ansbuttonopen7'}  onClick={(e)=>changeit(e, open7, setopen7)}>^</button></p>              
              <p className={open7 ? 'answer7' : 'nanswer7'} >
                Blood contains several components, including red cells, platelets and plasma which can be donated individually.
                <p className='instructcontent'>- During a whole blood donation, you typically donate a pint (about a half liter) of whole blood.</p>
                <p className='instructcontent'>- During plateletpheresis, only platelets are collected. Platelets help blood to clot and are commonly given to people with cancer or people having major surgery.</p>
                <p className='instructcontent'>- During plasmapheresis, only the liquid portion of the blood (plasma) is collected. Plasma is commonly given to people in emergency and trauma situations to help stop bleeding.</p>
                <p className='instructcontent'>- During double red blood cell donation, two units of red blood cells are collected. Red blood cells carry oxygen to all parts of the body. Red blood cells are typically given to people with sickle cell anemia or significant blood loss due to trauma or surgery.</p>
                <p>For more information, click <a className='wholink' href='https://www.mayoclinic.org/blood-donor-program/plasma-platelet-donations#:~:text=You%20may%20choose%20to%20give,blood%20cells%20or%20plasma%20donations.' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>    
          </div>   
          <div className='qnawrap'>      
            <li> 
              <p className={!dark ? 'question' : 'dquestion'} >What can i donate besides blood<button type='submit' className={!open7 ? 'ansbutton7' : 'ansbuttonopen7'}  onClick={(e)=>changeit(e, open7, setopen7)}>^</button></p>              
              <p className={open7 ? 'answer7' : 'nanswer7'} >
                Blood contains several components, including red cells, platelets and plasma which can be donated individually.
                <p className='instructcontent'>- During a whole blood donation, you typically donate a pint (about a half liter) of whole blood.</p>
                <p className='instructcontent'>- During plateletpheresis, only platelets are collected. Platelets help blood to clot and are commonly given to people with cancer or people having major surgery.</p>
                <p className='instructcontent'>- During plasmapheresis, only the liquid portion of the blood (plasma) is collected. Plasma is commonly given to people in emergency and trauma situations to help stop bleeding.</p>
                <p className='instructcontent'>- During double red blood cell donation, two units of red blood cells are collected. Red blood cells carry oxygen to all parts of the body. Red blood cells are typically given to people with sickle cell anemia or significant blood loss due to trauma or surgery.</p>
                <p>For more information, click <a className='wholink' href='https://www.mayoclinic.org/blood-donor-program/plasma-platelet-donations#:~:text=You%20may%20choose%20to%20give,blood%20cells%20or%20plasma%20donations.' target="_blank" rel="noopener noreferrer">Here</a></p>
              </p>
            </li>    
          </div>   
        </ul>
      </div>
    </div>
  )
}

export default Faq
