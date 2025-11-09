import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Dash from './Components/Dash';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Lost from './Components/Lost';
import Contacted from './Components/Contacted';
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
