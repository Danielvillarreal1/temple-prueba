import React from 'react'

const registry = () => {
    return (
        <>
     
            <section class="bg-login-form home-height-full mt-5 pt-5">
                <div class="bg-overlay"></div>
                <div class="home-center">
                    <div class="home-desc-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <form  class="intro-form bg-white p-4 rounded">
                                        <h5 class="text-center pb-3 font-weight-bold"> Sign In Daniel</h5>

                                        <div class="form-group">
                                            <label class="">User</label>
                                            <input type="text" class="form-control" placeholder="User" required="required" />
                                        </div>

                                        <div class="form-group">
                                            <label class="">E-mail Address</label>
                                            <input type="email" class="form-control" placeholder="Daniel@enve.com" required="required" />
                                        </div>

                                        <div class="form-group">
                                            <label class="">Password</label>
                                            <input type="password" class="form-control" placeholder="Password" required="required" />
                                        </div>

                                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                            <input type="checkbox" class="custom-control-input" id="customControlInline" />
                                            <label class="custom-control-label" for="customControlInline">Remember Me</label>
                                        </div>

                                        <div class="form-group text-center pt-4 mb-0">
                                            <button type="submit" class="btn btn-custom btn-block text-uppercase">Sign Up Free</button>
                                        </div>
                                        <div class="mx-auto text-center">
                                            <p class="mb-0 mt-4"><a href="login.html#" class="text-dark">Forgot your password ?</a></p>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <p class="pt-5 text-white">Create new account ?<a href="signup.html" class="text-dark ml-1"><b class="text-white">Sign Up</b></a></p>
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