import React from 'react';
import {BrowserRouter as Router, Route, Link ,MenuLink} from "react-router-dom";
const navbar = () => {
    return (  
        <>
        <div className="container">
                {/* Logo container */}
                <div>
                    <a href="index.html" className="logo text-uppercase">
                        <img src="images/logo-light.png" alt="" className="logo-light" height="18" />
                        <img src="images/logo-dark.png" alt="" className="logo-dark" height="18" />
                    </a>
                </div>
                 {/* End Logo container */}
                <div className="menu-extras">
                    <div className="menu-item">
                         {/* Mobile menu toggle */}
                        <a className="navbar-toggle">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                         {/* End mobile menu toggle */}
                    </div>
                </div>
                <div id="navigation">
                     {/* Navigation Menu */}
                    <ul className="navigation-menu">
                        <li className="has-submenu">
                            {/* <a href="index.html#home">Home</a> */}
                            <Link to="/"> Home</Link>
                            <span className="menu-arrow"></span>
                            <ul className="submenu">
                                {/* <li>
                                    <a href="index.html">Home Default </a>
                                </li>
                                <li>
                                    <a href="index-1.html"> Home Style - 1 </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="index-2.html"> Home Style - 2 </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="index-3.html"> Home Style - 3 </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="index-4.html"> Home Style - 4 </a>
                                </li>
                                <li className="has-submenu">
                                    <a href="index-5.html"> Home Style - 5 </a>
                                </li> */}
                            </ul>
                        </li>
                        <li className="">
                            {/* <a href="index.html#features">features</a> */}
                            <Link to="/feacture"> Feature</Link> 
                        </li>
                        <li className="">
                            {/* <a href="index.html#pricing">Pricing</a> */}
                            <Link to="/pricing"> Pricing</Link>
                        </li>
                        <li className="has-submenu">
                            {/* <a href="index.html#">Pages</a> */}
                            <span className="menu-arrow"></span>

                            <ul className="submenu">
                                {/* <li>
                                    <a href="about.html">About Us </a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="services.html">Services</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="login.html">Log In</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="signup.html">Sign Up</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li className="has-submenu">
                                    <a href="job.html">Jobs</a>
                                </li> */}
                                {/* <li className="has-submenu">
                                    <a href="index.html#">Sub Menu</a>
                                    <span className="menu-arrow submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="index.html#">Sub Menu Item 1</a></li>
                                        <li><a href="index.html#">Sub Menu Item 2</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li className="">
                            {/* <a href="contact.html">Contact</a> */}
                            <Link to="/contact"> Contact</Link>
                        </li>

                        <li className="">
                            {/* <a href="signup.html" >Registry</a> */}
                            <Link to="/registry"> Registry</Link>
                            {/* className="btn-custom btn-rounded" */}
                        </li>
                    </ul>
                </div>
            </div>
        
        
        </>
    );
}
 
export default navbar;