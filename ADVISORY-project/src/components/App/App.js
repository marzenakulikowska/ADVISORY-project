import React, {useState} from 'react';
import './App.scss';
import {  HashRouter as Router ,  Route, NavLink} from 'react-router-dom'; 
import AboutUs from "../AboutUs/AboutUs.js";
import Products from "../Products/Products.js";
import Contact from "../Contact/Contact.js";
import MainPage from "../MainPage/MainPage.js";
import Services from "../Services/Services.js";
import Transport from "../Transport/Transport.js";
import Accountancy from "../Accountancy/Accountancy.js";
import Cleaning from "../Cleaning/Cleaning.js";
import Certificates from "../Certificates/Certificates.js";
import products from "../../../src/database/db.json";
import logo from '../../assets/logo.png'

const icon ={
  fontSize: "2rem",
  marginLeft: "0.5rem",
}
const Navigation = () => {
  const [ulstyle, setUlstyle] = useState("none");
  const liststyle = {
    display: ulstyle
  }
  const handleOver = ()=> {
   setUlstyle("block")
//onMouseEnter={handleOver}
 }
 const handleLeave = () => {
   setUlstyle("none")
 }
 const activeStyle = {
   borderBottom: "5px solid #e3000f",
   paddingBottom: "0.7rem",
   paddingLeft: "0.3rem",
   paddingRight: "0.3rem"
 };
  return (
      <>
      <div>
        <NavLink to="/"><img src={logo} title="logo" alt="logo"></img></NavLink>
      </div>
      <div className="header-sections">
              <li><NavLink exact activeStyle={activeStyle} to="/">Strona główna</NavLink></li>
              <li><NavLink activeStyle={activeStyle} to="/produkty">Produkty</NavLink></li> 
              <li className="toto" onMouseEnter={handleOver} onMouseLeave={handleLeave}><NavLink  activeStyle={activeStyle} to="/uslugi">Usługi</NavLink><i className="fa fa-caret-down" style={icon}></i>
                  <ul className="services-list" style={liststyle}>
                    <li><NavLink to="/uslugi/transport">Transport</NavLink></li>
                    <li><NavLink to="/uslugi/ksiegowosc">Księgowość</NavLink></li>
                    <li><NavLink to="/uslugi/czyszczenie">Czyszczenie ziaren</NavLink></li>
                  </ul>
              </li> 
              <li><NavLink activeStyle={activeStyle} to="/onas">O nas</NavLink></li>
              <li><NavLink activeStyle={activeStyle} to="/certyfikaty">Certyfikaty</NavLink></li>
              <li><NavLink activeStyle={activeStyle} to="/kontakt">Kontakt</NavLink></li>
      </div> 
      </>
  )
}
const Header = ()=> {
    return (
      <header className="header-container">
        <Navigation/>
      </header>
    )
}
const Footer = () => {
  return (
    <>
      <footer>
          <div>
            <NavLink to="/"><img src={logo} title="logo" alt="logo"></img></NavLink>
          </div>
          <div className="footer-adress-details">
            <h1>ADVISORY Sp. z o.o.</h1>
            <div className="adress">
              <p>ul. Słowackiego 33A</p>
              <p>58-371 Boguszów-Gorce</p>
              <p>Polska</p>
            </div>
          </div>
          <div className="footer-contact-details">
            <div className="footer-contact-text">
              <h1>Skontaktuj się z nami</h1>
              <NavLink to="/kontakt">Formularz kontaktowy</NavLink>
              <br></br>
              <br></br>
              <NavLink to="/onas">Kontakt z przedstawicielami</NavLink>
              <div className="footer-contact-icons">
                    <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <p>+48 606 424 027</p>
                </div>
              <div className="footer-contact-icons">
                    <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                    <p>advisory.import@gmail.com</p>
                </div>
            </div>
          </div>
      </footer>
    </>
  )
}
const App = () => {
  const[selected, setSelected]=useState([]);
  return (
      <>
      <Router>
        
          <Header/>
          <Route exact path="/" component={MainPage}/>
          <Route path="/produkty" component={()=><Products products={products} selected={selected} onSelect={setSelected} />}/>
          <Route exact path="/uslugi" component={Services}/>
          <Route path="/uslugi/transport" component={Transport}/>
          <Route path="/uslugi/ksiegowosc" component={Accountancy}/>
          <Route path="/uslugi/czyszczenie" component={Cleaning}/>
          <Route path="/certyfikaty" component={Certificates}/>
          <Route path="/onas" component={AboutUs}/>
          <Route path="/kontakt" component={()=><Contact selectedProd={selected}/>}/>
          <Footer/>
      </Router>
      </>
  )
}


export default App;
