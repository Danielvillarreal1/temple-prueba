import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';

const contact = () => {
    return (  
        <>
          {/* <section className="section bg-light"> */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div className="contact-icon pt-3 pb-3">
                                <i className=" h1 text-custom"> <HomeIcon /></i>
                            </div>
                            <div className="contact-details">
                                <h5 className="">Address</h5>
                                <p className="">1370 Valley View Drive
                                    <br></br>Brookline, MA 02146 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div className="contact-icon pt-3 pb-3">
                                {/* <i className="mbri-mobile2 h1 text-custom"></i> */}
                                <i className="h1 text-custom"> <PhoneIcon /> </i>
                            </div>
                            <div className="contact-details">
                                <h5 className="">Phone</h5>
                                <p className="mb-0 f-14">617-730-0620</p>
                                <p className="f-14">770-650-9423</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div className="contact-icon pt-3 pb-3">
                                <i className="h1 text-custom"> <EmailIcon /></i>
                            </div>
                            <div className="contact-details">
                                <h5 className="">E-mail</h5>
                                <p className="mb-0 f-14">example@abc.com</p>
                                <p className="f-14">example@xyz.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div className="contact-icon pt-3 pb-3">
                                <i className="h1 text-custom"> <WebIcon /></i>
                            </div>
                            <div className="contact-details">
                                <h5 className="f-16">Web</h5>
                                <p className="mb-0 f-14">www.example.com</p>
                                <p className="f-14">www.example.org</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center  pt-5 mt-5">
                    <div className="'col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <h3 className="text-capitalize">Any query ?</h3>
                            <p className="text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                      <div className="col-lg-10">
                        <div className="custom-form mt-4">
                            <div id="message"></div>
                            <form method="post" action="https://themesbrand.com/evral/layout/php/contact.php" name="contact-form" id="contact-form" />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">                                            
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your name..." />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input name="text" id="sub" type="text" className="form-control" placeholder="Your subject..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                                
                            
                        </div>  
                    </div>                  


                </div>
                </div>
        {/* </section> */}
        </>
    );
}
 
export default contact;

