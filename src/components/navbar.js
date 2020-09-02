import React from 'react';

const navbar = () => {
    return (  
        <>
        <div class="container">
                {/* Logo container */}
                <div>
                    <a href="index.html" class="logo text-uppercase">
                        <img src="images/logo-light.png" alt="" class="logo-light" height="18" />
                        <img src="images/logo-dark.png" alt="" class="logo-dark" height="18" />
                    </a>
                </div>
                 {/* End Logo container */}
                <div class="menu-extras">
                    <div class="menu-item">
                         {/* Mobile menu toggle */}
                        <a class="navbar-toggle">
                            <div class="lines">
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
                    <ul class="navigation-menu">
                        <li class="has-submenu">
                            <a href="index.html#home">Home</a>
                            <span class="menu-arrow"></span>
                            <ul class="submenu">
                                <li>
                                    <a href="index.html">Home Default </a>
                                </li>
                                <li>
                                    <a href="index-1.html"> Home Style - 1 </a>
                                </li>
                                <li class="has-submenu">
                                    <a href="index-2.html"> Home Style - 2 </a>
                                </li>
                                <li class="has-submenu">
                                    <a href="index-3.html"> Home Style - 3 </a>
                                </li>
                                <li class="has-submenu">
                                    <a href="index-4.html"> Home Style - 4 </a>
                                </li>
                                <li class="has-submenu">
                                    <a href="index-5.html"> Home Style - 5 </a>
                                </li>
                            </ul>
                        </li>
                        <li class="">
                            <a href="index.html#features">features</a>
                        </li>
                        <li class="">
                            <a href="index.html#pricing">Pricing</a>
                        </li>
                        <li class="has-submenu">
                            <a href="index.html#">Pages</a>
                            <span class="menu-arrow"></span>

                            <ul class="submenu">
                                <li>
                                    <a href="about.html">About Us </a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="services.html">Services</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="login.html">Log In</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="signup.html">Sign Up</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="job.html">Jobs</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="index.html#">Sub Menu</a>
                                    <span class="menu-arrow submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="index.html#">Sub Menu Item 1</a></li>
                                        <li><a href="index.html#">Sub Menu Item 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="">
                            <a href="contact.html">Contact</a>
                        </li>

                        <li class="">
                            <a href="signup.html" >Ubicanos</a>
                            {/* class="btn-custom btn-rounded" */}
                        </li>
                    </ul>
                </div>
            </div>
        
        
        </>
    );
}
 
export default navbar;