import React from 'react'
import features1 from '../../src/images/feacture/features1.png'
import features2 from '../../src/images/feacture/features2.png'
import '../css/es.css/bootstrap.min.css'


 const feacture = () => {
    return (
        <>
              <section className="section bg-light" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title text-center mx-auto">
                            <h3 className="mb-4">Awesome Features</h3>
                            <p className="text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                        </div>
                    </div>
                </div>
                <div className="row vertical-content justify-content-center mt-5 pb-4">
                    <div className="col-lg-6">
                        <div>
                        <img src={features1} alt="" className="img-fluid mx-auto d-block" />
                            {/* <img src="images/features-1.png" alt="" className="img-fluid mx-auto d-block" /> */}
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="more-features">
                            <i className="mbri-idea"></i>
                            <h4 className="pt-4 font-weight-light">Fully Responsive Bootstrap</h4>
                            <p className="text-muted preference-subtitle mt-3 mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century a pseudo-Latin language.</p>

                            <p className="text-muted preference-subtitle mt-3 mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa Lorem ipsum dolor sit amet.</p>

                            <a href="index.html#" className="text-custom preference-more">Learn More.....</a>
                        </div>
                    </div>
                </div>

                <div className="row vertical-content mt-5">
                    <div className="col-lg-5">
                        <div className="more-features">
                            <i className="mbri-like"></i >
                                <h4 className="pt-4 font-weight-light">Works on all platforms</h4>
                                <p className="text-muted preference-subtitle mt-3 mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century a pseudo-Latin language.</p>

                                <p className="text-muted preference-subtitle mt-3 mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa Lorem ipsum dolor sit amet.</p>

                                <a href="index.html#" className="text-custom preference-more">Learn More.....</a>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div>
                            <img src={features2} alt="" className="img-fluid mx-auto d-block" />
                                <img src="images/features-2.png" alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default feacture;