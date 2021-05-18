import React from "react";

function ContactUs() {
  return (
    <>
    <section>
        <div class="container com-sp pad-bot-70">
            <div class="row">
                <div class="cor about-sp">
                    <div class="ed-about-tit">
                        <div class="con-title">
                            <h2>Contact <span> Us</span></h2>
                        </div>
                    </div>
                    <div class="pg-contact">
                        <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con1">
                            <h2>Schemax <span>Educational</span></h2>
                            <p>We Provide Outsourced Software Development Services To Over 50 Clients From 21 Countries.</p>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con1"> <img src="img/contact/1.png" alt=""/>
                            <h4>Address</h4>
                            <p>Schemax Technologies,Andhra University, visakhaptnam.
                                <br/>Landmark : Next To Principal block</p>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con3"> <img src="img/contact/2.png" alt=""/>
                            <h4>CONTACT INFO:</h4>
                            <p> <a href="tel://0099999999" class="contact-icon">Phone: 01 234874 965478</a>
                                <br/> <a href="tel://0099999999" class="contact-icon">Mobile: 01 654874 965478</a>
                                <br/> <a href="mailto:mytestmail@gmail.com" class="contact-icon">Email: info@schemaxtechnologies.com</a> </p>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con4"> <img src="img/contact/3.png" alt=""/>
                            <h4>Website</h4>
                            <p> <a href="#">Website: <www class="schemaxtechnologies"></www>schemaxtechnologies.com</a>
                                <br/> <a href="#">Facebook: www.facebook/schemaxtechnologies</a>
                                <br/> <a href="#">Blog: <www class="blog.schemaxtechnologies"></www>schemaxtechnologies.com</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="map">
        <div class="row contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.462240597174!2d83.31741661733894!3d17.733745932556996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434e8e5cce43%3A0x4923da867e2c7bc5!2sMaddilapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1620098858212!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            <div class="container">
                <div class="overlay-contact footer-part footer-part-form">
                    <div class="map-head">
                        <p>Send Us Now</p>
                        <h2>we Are Here Ready Here To Help</h2> <span class="footer-ser-re">Service Request Form</span> </div>
                    <form id="contact_form" name="contact_form" action="send.php">
                        <ul>
                            <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                                <input type="text" id="f1" value="" name="f1" placeholder="Name" required="" /> </li>
                            <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                                <input type="text" id="f2" value="" name="f2" placeholder="Phone" required="" /> </li>
                            <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                                <input type="text" id="f3" value="" name="f3" placeholder="City" required="" /> </li>
                            <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                                <input type="text" id="f4" value="" name="f4" placeholder="Country" required="" /> </li>
                            <li class="col-md-12 col-sm-12 col-xs-12 contact-input-spac">
                                <textarea id="f5" name="f5" required=""></textarea>
                            </li>
                            <li class="col-md-6">
                                <input type="submit" value="SUBMIT" /> </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default ContactUs;
    