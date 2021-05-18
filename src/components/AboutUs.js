import React from "react";

function AboutUs() {
  return (
    
    <div class="container">
            <div class="about">
                <h1 class="text-left">About<span>Us</span> </h1>
            </div>
            <div class="quote">
                <h2><span>“</span>An investment in knowledge pays the best interest<span>”</span> </h2>
            </div>
            <div class="content1">
                <div class="container">
                    <img class="img-responsive" src="images/book.jpg"/>
                    <h2>UNIQUE EXPERIENCES</h2>
                    <p>
                        There is no such thing as "one size fits all" in education; each educator and child has unique challenges and goals. We celebrate the diversity of our users by offering differentiated resources that can meet a wide range of educational needs - and raise kids' confidence in learning.
                    </p>
                </div>
            </div>
            <div class="content2">
                <div class="container">
                    <img class="img-responsive" src="images/class.jpg"/>
                    <h2>EMPOVERED EDUCATORS</h2>
                    <p>
                        From school teachers and tutors to home schoolers and parents, engaged adults are the key to unlocking each child's potential and drive to learn. We empower all kinds of educators to teach kids by providing the best educational resources in any form or device to be used at home, at school, and everywhere in-between.
                    </p>
                </div>
            </div>     
        <div class="bg-light py-5">
            <div class="container py-5">
                <div class="row mb-4">
                    <div class="col-lg-5">
                      <h2 class="team" >Our <span>Team</span></h2>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-xl-6 col-sm-6 mb-5" id="card">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/instructor1.jpg " alt="" width="40%" class="img-fluid mb-3 img-thumbnail shadow-sm" style={{borderRadius: "4%"}}/>
                            <h5 class="mb-0" style={{fontSize: "2rem"}}>Manuella Nevoresky</h5><span class="small text-uppercase text-muted" style={{fontSize: "2rem"}} >PRINCIPAL</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f" style={{width: "25px"}}></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-6 col-sm-6 mb-5" id="card">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/instructor2.jpg" alt="" width="40%" class="img-fluid  mb-3 img-thumbnail shadow-sm" style={{borderRadius: "4%"}}/>
                            <h5 class="mb-0" style={{fontSize: "2rem"}}>Samuel Hardy</h5><span class="small text-uppercase text-muted" style={{fontSize: "2rem"}}>VICE-PRICIPAL</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-6 col-sm-6 mb-5" id="card">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/instructor3.jpg" alt="" width="40%" class="img-fluid mb-3 img-thumbnail shadow-sm" style={{borderRadius: "4%"}}/>
                            <h5 class="mb-0" style={{fontSize: "2rem"}}>Tom Sunderland</h5><span class="small text-uppercase text-muted" style={{fontSize: "2rem"}}>ACADEMIC DEAN</span>
                            <ul class="social mb-0 list-inline mt-3">
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-6 col-sm-6 mb-5" id="card">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="images/instructor4.jpg" alt="" width="40%" class="img-fluid  mb-3 img-thumbnail shadow-sm" style={{borderRadius: "4%"}}/>
                            <h5 class="mb-0" style={{fontSize: "2rem"}}>John Tarly</h5><span class="small text-uppercase text-muted" style={{fontSize: "2rem"}}>MENTOR</span>
                            <ul class="social mb-0 list-inline mt-3">
                              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f" ></i></a></li>
                              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                              <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default AboutUs;
