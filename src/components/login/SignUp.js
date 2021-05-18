import React from "react";


function SignUp() {
  return (
          <>
          <section class="w3l-login">
            <div class="w3l-form-36-mian">
              <div class="container">
                <div class="logo text-center">
                          <a class="brand-logo" href="index.html">
                            <img src="images/logo.png" alt="Your logo" title="Your logo" style={{width:"300px",height:"85px"}} />
                          </a>
                </div>
                <div class="form-inner-cont">
                  <h3>Sign up</h3>
                  <h6>To continue with Us</h6>
                  <form action="#" method="post" class="signin-form">
                    <div class="form-input">
                      <input type="text" name="name" placeholder="Enter your name" required="" autofocus />
                    </div>
                    <div class="form-input">
                      <input type="email" name="email" placeholder="Email address" required="" />
                    </div>
                    <div class="form-input">
                      <input type="password" name="password" placeholder="Password" required="" />
                    </div>
                    <div class="form-input">
                      <input type="password" name="password" placeholder="Confirm Password" required="" />
                    </div>
                    <button type="submit" class="btn btn-orange  theme-button mt-4">Sign Up</button>
                  </form>
                  <p class="signup">Already registered? <a href="/login" class="signuplink">Login now</a></p>
                </div>
              </div>
            </div>
          </section>
          <div id = "v-w3layouts"></div>
          </>

  );
}

export default SignUp;
