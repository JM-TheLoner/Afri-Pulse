import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext'
import { useContext } from 'react'
import '../Stylesheets/Footer.css'

const Footer = () => {

  const { dark } = useContext(DataContext)

  return (  
    <>
      <footer className={!dark ? 'Footer' : 'dFooter'}>
        <ul className='FootSpace3'>
            <a
            className={!dark ? "App-link" : "dApp-link"}
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Address Address Lorem Ipsum Address, kyiv, germany, africa
          </a>
        </ul>
        <ul className='FootSpace2'>
          <li className='gone'><Link to={'/contact'}>Instagram</Link></li>
          <li className='gone'><Link to={'/contact'}>Twitter</Link></li>
          <li><Link to={'/contact'}>Whatsapp</Link></li>
          <li><Link to={'/contact'}>Phone Number</Link></li>
          <li><Link to={'/contact'}>Email</Link></li>
        </ul>
        <div className={!dark ? 'Footertext' : 'dFootertext'}>
          <h5 className={!dark ? 'FooterCopyright' : 'dFooterCopyright'}>&copy; 2023 - Powered By let me cook</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
