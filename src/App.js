import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer'
import Contacto from './components/contacto';
import Feacture from './components/feacture';
import Pricing from './components/pricing';
import Registry from './components/registry'

function App() {
  return (
    <>
           {/* <div className="App">
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
           </div>  */}


         {/* <Router>
           <div id="topnav" class="defaultscroll fixed-top bg-dark sticky">
              <Navbar />
              <Route exact path="/" components={Home} />
              <Route exact path="/Contacto" components={contacto} />
            </div>
          </Router */}


           <Router>
           <div id="topnav" class="defaultscroll fixed-top bg-dark sticky">
              <Navbar />
            </div>
            <div>
            <Switch>
            
            <Route path="/" exact> <Home /> </Route>
           
            </Switch>
            <Switch>  
            <Route path="/feacture" exact> <Feacture /> </Route>
            </Switch>
            <Switch>  
            <Route path="/pricing" exact> <Pricing /> </Route>
            </Switch>
            <Switch>  
            <Route path="/Contacto"> <Contacto /> </Route>
            </Switch>
            <Switch>
            <Route path="/registry"> <Registry /> </Route>
            </Switch>
            <Switch>
            <Route path="/Footer">  <Footer /> </Route>
            </Switch>
            </div>
          </Router> 
          
    </>
  );
}

export default App;
