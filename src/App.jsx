import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Header from './Components/Header.jsx';
import Dash from './Components/Dash.jsx';
import Faq from './Components/Faq.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Lost from './Components/Lost.jsx';
import Contacted from './Components/Contacted.jsx';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <div> 
      <DataProvider>
        <Header title={'AfriPulse Hub'}/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/contacted' element={<Contacted/>}></Route>
          <Route exact path='/faq' element={<Faq/>}></Route>
          <Route exact path='/statistics' element={<Dash/>}></Route>
          <Route exact path='/*' element={<Lost/>}></Route>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
