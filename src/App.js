import './App.css';



// importación de styles / estilos
import './assets/styles/logo.css'
import './assets/styles/color.css'
import './assets/styles/style.css'
import './assets/styles/borders.css'
import './assets/styles/responsive.css'
import './assets/styles/login.css'
import './assets/styles/loading.css'
import './assets/styles/zoom.css'
// 

import NavBar from './components/navbar';
import SubNavBar from './components/subnabvar';
import Carousel from './components/carousel';
import Footer from './components/footer';
import FooteContact from './components/footer_contact';
import Login from './pages/login'
import Public from './routes/public';
import Loading from './components/loading';

import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/*' element={
          <div className=''>
            <Public />
          </div>
        } />
        <Route path='/' element={
          <div className='heigth-100-vh width-100 center'>
            <Loading />
          </div>
        } />
        <Route path='*' element={<center>404 no found</center>} />
      </Routes>
    </div>
  );
}

export default App;
