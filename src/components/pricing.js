import React from 'react';

const pricing = () => {
    return ( 
        <>
          <section className="section" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title text-center mx-auto">
                            <h3 className="mb-4">Simple Pricing</h3>
                            <p className="text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="program-box bg-light mt-3">
                            <div className="price-box text-center pt-5 pb-5 pl-4 pr-4 mt-3">
                                <h5 className="text-muted">Economy Plan</h5>
                                <div className="h1 font-weight-bold mt-4"><sup className="h2 font-weight-bold">$</sup>15<span>/mo.</span></div>
                                <div className="price-desc p-3 mt-4">
                                    <p className="text-muted">Wordpress Theme</p>
                                    <p className="text-muted">50GB Disk Space</p>
                                    <p className="text-muted">50 Email Accounts</p>
                                    <p className="text-muted">High Speed Internet</p>
                                    <p className="text-muted">Free Theme Installation</p>
                                </div>
                                <div className="mt-4">
                                    <a href="index.html#" className="btn btn-outline">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="program-box pricing-active-border mt-3">
                            <div className="price-box  text-center pt-5 pb-5 pl-4 pr-4 mt-3">
                                <h5 className="text-muted">Deluxe Plan</h5>
                                <div className="h1 text-custom font-weight-bold mt-4"><sup className="h2 font-weight-bold">$</sup>35<span>/mo.</span></div>
                                <div className="price-desc p-3 mt-4">
                                    <p className="text-muted">Wordpress Theme</p>
                                    <p className="text-muted">50GB Disk Space</p>
                                    <p className="text-muted">50 Email Accounts</p>
                                    <p className="text-muted">High Speed Internet</p>
                                    <p className="text-muted">Free Theme Installation</p>
                                </div>
                                <div className="mt-4">
                                    <a href="index.html#" className="btn btn-custom">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="program-box bg-light mt-3">
                            <div className="price-box text-center pt-5 pb-5 pl-4 pr-4 mt-3">
                                <h5 className="text-muted">Ultimate Plan</h5>
                                <div className="h1 font-weight-bold mt-4"><sup className="h2 font-weight-bold">$</sup>55<span>/mo.</span></div>
                                <div className="price-desc p-3 mt-4">
                                    <p className="text-muted">Wordpress Theme</p>
                                    <p className="text-muted">50GB Disk Space</p>
                                    <p className="text-muted">50 Email Accounts</p>
                                    <p className="text-muted">High Speed Internet</p>
                                    <p className="text-muted">Free Theme Installation</p>
                                </div>
                                <div className="mt-4">
                                    <a href="index.html#" className="btn btn-outline">Join Now</a>
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
 
export default pricing;