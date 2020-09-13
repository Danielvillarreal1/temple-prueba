import React from 'react';

const home = () => {
    return ( 
        <>
            <section className="home-height-half bg-home-1 " id="home">
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h6 className="home-title text-white">Evral - A Beautiful Responsive Bootstrap 4 Landing Page Template</h6>
                                <p className="pt-4 home-sub-title text-white mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo eget dolor Cum sociis natoque penatibus.</p>
                                <div className="pt-4">
                                    <a href="contact.html" className="btn btn-custom btn-rounded"><span>Contact Us</span></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-0">
                                    <div className="video-wrapper">
                                        <iframe src="https://player.vimeo.com/video/109054393?color=ff6aa7&amp;title=0&amp;byline=0&amp;portrait=0" width="555" height="315" className="frame-border"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        
        </>
     );
}
 
export default home;