import React from 'react';
// import {BrowserRouter as Router, Route, Link ,MenuLink} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer'
import Contacto from './components/contacto';
import contacto from './components/contacto';


function App() {
  return (
    <>
           <div className="App">
             <div id="topnav" class="defaultscroll fixed-top bg-dark sticky">
              <Navbar />
            </div>

            <section class="home-height-half bg-home-1" id="home">
            <Home />
            </section>

            <section class="section bg-light">
              <Contacto />
              </section>

            <section class="bg-dark footer pt-2" id="contact">
              <Footer />
            </section>
           </div> 


{/* 
           <Router>
    
              <Route exact path="/" components={Home} />
              <Route exact path="/Contacto" components={contacto} />

          </Router> */}
          
    </>
  );
}

export default App;
