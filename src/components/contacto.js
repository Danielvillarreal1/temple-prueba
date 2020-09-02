import React from 'react';
// import {form, input, booton} from 'reactstrap'

const contacto = () => {
    return (  
        <>
          {/* <section class="section bg-light"> */}
            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-3">
                        <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div class="contact-icon pt-3 pb-3">
                                <i class="mbri-home h1 text-custom"></i>
                            </div>
                            <div class="contact-details">
                                <h5 class="">Address</h5>
                                <p class="">1370 Valley View Drive
                                    <br></br>Brookline, MA 02146 </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div class="contact-icon pt-3 pb-3">
                                <i class="mbri-mobile2 h1 text-custom"></i>
                            </div>
                            <div class="contact-details">
                                <h5 class="">Phone</h5>
                                <p class="mb-0 f-14">617-730-0620</p>
                                <p class="f-14">770-650-9423</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div class="contact-icon pt-3 pb-3">
                                <i class="mbri-letter h1 text-custom"></i>
                            </div>
                            <div class="contact-details">
                                <h5 class="">E-mail</h5>
                                <p class="mb-0 f-14">example@abc.com</p>
                                <p class="f-14">example@xyz.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                            <div class="contact-icon pt-3 pb-3">
                                <i class="mbri-globe-2 h1 text-custom"></i>
                            </div>
                            <div class="contact-details">
                                <h5 class="f-16">Web</h5>
                                <p class="mb-0 f-14">www.example.com</p>
                                <p class="f-14">www.example.org</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center  pt-5 mt-5">
                    <div class="'col-lg-12">
                        <div class="section-title text-center mx-auto">
                            <h3 class="text-capitalize">Any query ?</h3>
                            <p class="text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center mt-5">
                      <div class="col-lg-10">
                        <div class="custom-form mt-4">
                            <div id="message"></div>
                            <form method="post" action="https://themesbrand.com/evral/layout/php/contact.php" name="contact-form" id="contact-form" />
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">                                            
                                            <input name="name" id="name" type="text" class="form-control" placeholder="Your name..." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="email" id="email" type="email" class="form-control" placeholder="Your email..." />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input name="text" id="sub" type="text" class="form-control" placeholder="Your subject..." />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <input type="submit" id="submit" name="send" class="submitBnt btn btn-custom" value="Send Message" />
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
 
export default contacto;

