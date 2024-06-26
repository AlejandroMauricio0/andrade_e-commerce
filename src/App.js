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
import './assets/styles/drop_button.css'
import './assets/styles/drop_file.css'
import './assets/styles/card_product.css'
import './assets/styles/modal.css'
import './assets/styles/navbar_left.css'
import './assets/styles/card_payment.css'
// import './assets/styles/404.css'

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
import { useState } from 'react';
import Private from './routes/private_admin';
import NoFound from './pages/404_error';
import PrivateUser from './routes/private_user';

function App() {
  const [myCart, setMyCart] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path='/user*' element={
          <>
            <PrivateUser myCart={myCart} setMyCart={setMyCart} />
          </>
        }
        />
        <Route path='/admin*' element={
          <>
            <Private />
          </>
        }
        />
        <Route path='/*' element={
          <div className=''>
            <Public myCart={myCart} setMyCart={setMyCart} />
          </div>
        } />
        <Route path='/' element={
          <div className='heigth-100-vh width-100 center'>
            <Loading />
          </div>
        } />
        <Route path='*' element={
          <NoFound />
        } />
      </Routes>
    </div>
  );
}

export default App;
