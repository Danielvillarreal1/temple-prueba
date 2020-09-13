import React from 'react'

const registry = () => {
    return (
        <>
     
            <section className="bg-login-form home-height-full mt-5 pt-5">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <form  className="intro-form bg-white p-4 rounded">
                                        <h5 className="text-center pb-3 font-weight-bold"> Sign In Daniel</h5>

                                        <div className="form-group">
                                            <label className="">User</label>
                                            <input type="text" className="form-control" placeholder="User" required="required" />
                                        </div>

                                        <div className="form-group">
                                            <label className="">E-mail Address</label>
                                            <input type="email" className="form-control" placeholder="Daniel@enve.com" required="required" />
                                        </div>

                                        <div className="form-group">
                                            <label className="">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" required="required" />
                                        </div>

                                        <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label" for="customControlInline">Remember Me</label>
                                        </div>

                                        <div className="form-group text-center pt-4 mb-0">
                                            <button type="submit" className="btn btn-custom btn-block text-uppercase">Sign Up Free</button>
                                        </div>
                                        <div className="mx-auto text-center">
                                            <p className="mb-0 mt-4"><a href="login.html#" className="text-dark">Forgot your password ?</a></p>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <p className="pt-5 text-white">Create new account ?<a href="signup.html" className="text-dark ml-1"><b className="text-white">Sign Up</b></a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
            </section>
  
    
        </>
    );
}

export default registry;