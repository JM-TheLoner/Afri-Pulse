import { Link } from 'react-router-dom';
import '../Stylesheets/Footer.css'

const Footer = () => {

  return (  
    <>
      <footer className={'Footer'}>
        <ul className='FootSpace3'>
            <a
            className={"App-link"}
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
        <div className={'Footertext'}>
          <h5 className={'FooterCopyright'}>&copy; 2023 - Powered By let me cook</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
