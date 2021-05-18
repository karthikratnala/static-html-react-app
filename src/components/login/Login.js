import React from "react";

function Login() {
  return (

  <section class="w3l-login">
  <div class="w3l-form-36-mian">
    <div class="container">
      <div class="logo text-center">
        <a class="brand-logo" href="/">
          <img src="images/logo.png" alt="Your logo" title="Your logo" style={{width:"300px",height:"85px"}} />
        </a>
      </div>
      <div class="form-inner-cont">
        <h3>Login</h3>
        <h6>To continue with Us</h6>
        <form action="#" method="post" class="signin-form">
          <div class="form-input">
            <input type="email" name="email" placeholder="Email address or username" required="" autofocus />
          </div>
          <div class="form-input">
            <input type="password" name="password" placeholder="Password" required="" />
          </div>
          <label class="check-remaind">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <p class="remember">Remember me</p>

          </label>

          <button type="submit" class="btn btn-primary theme-button mt-4">Log in</button>
          <div class="new-signup">
            <a href="/login" class="signuplink">Forgot username or password?</a>

          </div>
        </form>
        <p class="signup">Don’t have account yet? <a href="/signup" class="signuplink">Get it now</a></p>
      </div>
    </div>
  </div>
</section>

  );
}

export default Login;
