import React from 'react';
// import {mdiFacebook} from ''
import { SiFacebook } from 'react-icons' 
// import { FaHeart } from "react-icons/fa";
// import '../../src/css/es.css/materialdesignicons.min.css'
// import M from 'materialize-css';
import {Icon} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const footer = () => {
    return ( 
        <>
          <div className="container"> 
                <div className="row pt-5">
                    <div className="col-lg-4">
                        <h5 className="text-white footer-title ">About Evral</h5>
                        <div className="mt-4">
                            <p className="footer-desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="mt-4 ">
                            <ul className="list-unstyled text-white footer-social list-inline">
                                <li className="list-inline-item "><a href="index-4.html#"><i className="" >  </i> < FacebookIcon /></a></li>
                                {/* <li className="list-inline-item"><a href="index-4.html#"><i className="mdi mdi-instagram instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="index-4.html#"><i className=""> </i><InstagramIcon /></a></li>
                                {/* <li className="list-inline-item"><a href="index-4.html#"><i className="mdi mdi-twitter twitter"></i></a></li> */}
                                <li className="list-inline-item"><a href="index-4.html#"><i className="mdi "></i><TwitterIcon /></a></li>
                                <li className="list-inline-item"><a href="index-4.html#"><i className="mdi  "></i><LinkedInIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-white footer-title">Support</h5>
                        <div className="mt-4">
                            <ul className="list-unstyled text-white footer-list">
                                <li><a href="index-4.html#">Help & Support</a></li>
                                <li><a href="index-4.html#">Privacy & Policy</a></li>
                                <li><a href="index-4.html#">News</a></li>
                                <li><a href="index-4.html#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-white footer-title">Social links</h5>
                        <div className="mt-4">
                            <ul className="list-unstyled footer-list">
                                <li><a href="index-4.html#">Facebook</a></li>
                                <li><a href="index-4.html#">Twitter</a></li>
                                <li><a href="index-4.html#">Behance</a></li>
                                <li><a href="index-4.html#">Dribbble</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="text-white footer-title">Get in touch</h5>
                        <div className="mt-4">
                            <p>Europe: +1 00 12 34 5</p>
                            <p>US: +1 67 89 01 23 4</p>
                            <p>Canada: +1 00 12 34 5</p>
                            <p>support@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-border"></div>
                <div className="row pb-4">
                    <div className="col-lg-12">
                        <div className="float-right pull-none">
                            <p className="mb-0">© Evral 2018 - All Right Reserved</p>
                        </div>
                        <div className="float-left pull-none">
                            <p className="footer-terms">Crafted with love by Themesbrand</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default footer;