import { useState, createContext, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const navigate = useNavigate()
    const [dark, setdark] = useState('')
    const [userInput, setuserInput] = useState('')
    const [pwdInput, setpwdInput] = useState('')
    const [user, setuser] = useState('')
    const [loggedIn, setloggedIn] = useState(false)
    const [accessKey, setaccessKey] = useState('')
    const [emailInput, setemailInput] = useState('')
    const [newPwd, setnewPwd] = useState('')
    const [confirmPwd, setconfirmPwd] = useState('')
    const [status, setstatus] = useState('')
    const [firstNameInput, setfirstNameInput] = useState('')
    const [lastNameInput, setlastNameInput] = useState('')
    const [genInput, setgenInput] = useState('')
    const [birthInput, setbirthInput] = useState('')
    const [phoneInput, setphoneInput] = useState('')
    const [emailregInput, setemailregInput] = useState('')
    const [addressInput, setaddressInput] = useState('')  
    const [passInput, setpassInput] = useState('')
    const [confirmInput, setconfirmInput] = useState('')
    const [usernameInput, setusernameInput] = useState('')
    const [ analysis, setanalysis ] = useState('General')

    useEffect(()=>{
      setdark(JSON.parse(localStorage.getItem('AfriPulseDarkMode')) || false) 
      !JSON.parse(localStorage.getItem('AfriPulseDarkMode')) ? localStorage.setItem('AfriPulseDarkMode', false) : console.log('')
    }, [])

    const handleRefresh = () => {
      console.log('refresh')
      navigate('/')
    }
    let locationDataobj = [
      {name : 'Lagos', donatedamount : 36293, donors : 134, recipientamount : 23013, recipients : 91, address: 'loremipsum loremipsum'},
      {name : 'Lagos', donatedamount : 34293, donors : 534, recipientamount : 23613, recipients : 94, address: 'loremipsum lorem'},
      {name : 'Lagos', donatedamount : 36765, donors : 144, recipientamount : 23353, recipients : 93, address: 'loremipsum lorem ipsum'},
      {name : 'Lagos', donatedamount : 36876, donors : 104, recipientamount : 23563, recipients : 75, address: 'lorem loremipsum'},
      {name : 'Lagos', donatedamount : 36265, donors : 134, recipientamount : 25463, recipients : 31, address: 'ipsum loremipsum'},
      {name : 'Lagos', donatedamount : 36535, donors : 34, recipientamount : 23013, recipients : 91, address: 'loremipsum loremipsum lorem'},
      {name: 'abuja', donatedamount : 36243, donors : 123, recipientamount : 23157, recipients : 85, address: 'loremipsum loremipsum lorem'},
      {name: 'abuja', donatedamount : 36287, donors : 143, recipientamount : 24567, recipients : 87, address: 'loremipsum lorem loremipsum'},
      {name: 'abuja', donatedamount : 33457, donors : 13, recipientamount : 238765, recipients : 5, address: 'lorem loremipsum loremipsum'},
      {name: 'ogun', donatedamount : 4390, donors : 204, recipientamount : 47820, recipients : 13, address: 'lorem ipsumloremipsum'},
      {name: 'ogun', donatedamount : 4920, donors : 24, recipientamount : 45420, recipients : 103, address: 'loremipsumlorem ipsumloremipsum'},
      {name: 'ogun', donatedamount : 420, donors : 20, recipientamount : 46420, recipients : 3, address: 'loremipsumlorem ipsum'},
      {name: 'ogun', donatedamount : 4390, donors : 4, recipientamount : 43830, recipients : 10, address: 'loremipsumlorem ipsumlorem'},
      {name: 'anambra', donatedamount : 920, donors : 4, recipientamount : 293, recipients : 23, address: 'lorem ipsumlorem'},
      {name: 'anambra', donatedamount : 9920, donors : 50, recipientamount : 283, recipients : 19, address: 'lorem ipsum lorem'},
      {name: 'anambra', donatedamount : 4920, donors : 54, recipientamount : 983, recipients : 9, address: 'lorem ipsum ipsum'},
      {name: 'borno', donatedamount : 396, donors : 32, recipientamount : 2129, recipients : 22, address: 'loremipsum loremipsum loremipsum'},
      {name: 'borno', donatedamount : 39826, donors : 372, recipientamount : 21029, recipients : 122, address: 'loremipsum loremipsum lor'}
    ]
  
    return (
        <DataContext.Provider value={{setaccessKey, accessKey, userInput, setuserInput, pwdInput, setpwdInput, emailInput, setemailInput, newPwd, setnewPwd, confirmPwd, setconfirmPwd, loggedIn, setloggedIn, setuser, user, status, setstatus, dark, setdark, navigate, handleRefresh, birthInput, setbirthInput,genInput, setgenInput,firstNameInput, setfirstNameInput, lastNameInput, setlastNameInput, addressInput, setaddressInput,emailregInput, setemailregInput, phoneInput, setphoneInput, passInput, setpassInput, confirmInput, setconfirmInput, usernameInput, setusernameInput, analysis, setanalysis, locationDataobj }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
