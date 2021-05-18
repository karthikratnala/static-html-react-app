import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AboutUs from './AboutUs'
import Gallery from './gallery/Gallery'
import ContactUs from './ContactUs'
import Home from './Home'
import Login from './login/Login'
import SignUp from './login/SignUp'
import Blog from './Blog'



  function Header() {

  return (
    
    <Router>
  	<header>
        <section>
            <div class="ed-mob-menu">
              <div class="ed-mob-menu-con">
                  <div class="ed-mm-left">
                      <div class="wed-logo animate__animated animate__wobble">
                          <a href="index.html"><img src="images/logo.png" alt="" />
                          </a>
                      </div>
                  </div>
                  <div class="ed-mm-right">
                      <div class="ed-mm-menu">
                          <a href="index.html#!" class="ed-micon"><i class="fa fa-bars"></i></a>
                          <div class="ed-mm-inn">
                              <a href="index.html#!" class="ed-mi-close"><i class="fa fa-times"></i></a>
                              <h4>All Pages</h4>
                              <ul>
                                  <li> <Link to="/">Home</Link></li>
                                  <li> <Link to="/about">About</Link></li>
                                  <li> <Link to="/gallery">Gallery</Link></li>
                                  <li> <Link to="/blog">Blog</Link></li>
                                  <li> <Link to="/contactUs">Contact Us</Link></li>
                                  <li> <Link to="/login">Login</Link></li>
                                  <li> <Link to="/signUp">SignUp</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        <section>
            <div class="top-logo bg-lightr" data-spy="affix" data-offset-top="250">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="wed-logo animate__animated animate__wobble">
                                <a href="index.html#"><img src="images/logo.png" alt="" />
                                </a>
                            </div>
                            <div  class="main-menu">
                                <ul>
                                    <li><a class="" href="/">Home</a>
                                    </li>
                                    <li> <Link to="/about">About</Link></li>
                                    <li> <Link to="/gallery">Gallery</Link></li>
                                    <li> <Link to="/blog">Blog</Link></li>
                                    <li> <Link to="/contactUs">Contact Us</Link></li>
                                    <li> <Link to="/login">Login</Link></li>
                                    <li> <Link to="/signUp">SignUp</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </header>
    <Switch>
        <Route path="/about"> <AboutUs /></Route>
        <Route path="/gallery"> <Gallery /></Route>
        <Route path="/contactUs"> <ContactUs /> </Route>
        <Route path="/blog"> <Blog /> </Route>
        <Route path="/signUp"> <SignUp /> </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/"><Home /> </Route>
    </Switch>
    </Router>

  );
}

export default Header;
