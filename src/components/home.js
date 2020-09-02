import React from 'react';

const home = () => {
    return ( 
        <>
        
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="bg-overlay"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h6 class="home-title text-white">Evral - A Beautiful Responsive Bootstrap 4 Landing Page Template</h6>
                                <p class="pt-4 home-sub-title text-white mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo eget dolor Cum sociis natoque penatibus.</p>
                                <div class="pt-4">
                                    <a href="contact.html" class="btn btn-custom btn-rounded"><span>Contact Us</span></a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-0">
                                    <div class="video-wrapper">
                                        <iframe src="https://player.vimeo.com/video/109054393?color=ff6aa7&amp;title=0&amp;byline=0&amp;portrait=0" width="555" height="315" class="frame-border"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
     );
}
 
export default home;