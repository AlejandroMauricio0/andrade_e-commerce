import './App.css';



// importación de styles / estilos
import './assets/styles/logo.css'
import './assets/styles/color.css'
import './assets/styles/style.css'
import './assets/styles/borders.css'
import './assets/styles/responsive.css'
import './assets/styles/login.css'


import NavBar from './components/navbar';
import SubNavBar from './components/subnabvar';
import Carousel from './components/carousel';
import Footer from './components/footer';
import FooteContact from './components/footer_contact';
import Login from './pages/login'

function App() {
  return (
    <div className="App">
{/*       
      <NavBar />
      <SubNavBar /> 
      <Carousel />
      <Footer/>
    <FooteContact/> 
  */}
      
      <NavBar />
      <Login />
      <FooteContact /> 
     
    </div>
  );
}

export default App;
