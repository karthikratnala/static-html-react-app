import React from "react";

function Home() {
  return (
    <>
    <section>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div  class="item slider1 active">
                    <img src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=940" alt=""/>
                    <div class="animate__animated animate__zoomInLeft carousel-caption slider-con">
                        <h2>Welcome to <span>Schemax University</span></h2>
                        <p>A learning community dedicated to building respectful and responsible citizens and empowering all learners.</p>
                        <a href="index.html#" class="bann-btn-1">All Courses</a>
                        <a href="index.html#" class="bann-btn-2">Read More</a>
                    </div>
                </div>
                <div class="item">
                    <img src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=940" alt=""/>
                    <div class="animate__animated animate__zoomInRight carousel-caption slider-con">
                        <h2>Admissions Open <span>2021</span></h2>
                        <p>When you enroll at Schemax University, you'll be joining over 17,000 students from all over the world.
          Find your community and earn your degree in a practical, supportive and affordable living and learning environment.</p>
                        <a href="index.html#" class="bann-btn-1">Admission</a><a href="index.html#" class="bann-btn-2">Read More</a>
                    </div>
                </div>
                <div class="item">
                    <img src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=600&w=1260" alt=""/>
                    <div class="animate__animated animate__zoomInUp carousel-caption slider-con">
                        <h2>Master In <span>Education</span></h2>
                        <p>
    Schemax University offers over 200 Masters degrees and certificate programs in high-demand fields, such as business,
        education, health care and more.Take your learning to a new level.</p>
                        <a href="index.html#" class="bann-btn-1">All Courses</a><a href="index.html#" class="bann-btn-2">Read More</a>
                    </div>
                </div>
            </div>

        
            <a class="left carousel-control" href="index.html#myCarousel" data-slide="prev">
                <i class="fa fa-chevron-left slider-arr"></i>
            </a>
            <a class="right carousel-control" href="index.html#myCarousel" data-slide="next">
                <i class="fa fa-chevron-right slider-arr"></i>
            </a>
        </div>
    </section>

    <section>
        <div class="container com-sp pad-bot-70">
            <div class="row">
                <div class="con-title">
                    <h2>Discover <span>More</span></h2>
                    <p>Here at Schemax University , we are committed To Lifelong Learning In A Caring Environment. We believe in
      Learning Today For A Better Tomorrow. Tap to know more</p>
                </div>
            </div>
            <div class="row">
                <div class="ed-course">
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="about.html">
                                <img src="images/h-about.jpg" alt=""/>
                                <span>Academics</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="admission.html">
                                <img src="images/h-adm1.jpg" alt=""/>
                                <span>Admission</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="dashboard.html">
                                <img src="images/h-cam.jpg" alt=""/>
                                <span>Student Profiles</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="research.html">
                                <img src="images/h-res.jpg" alt=""/>
                                <span>Research & Education</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="all-courses.html">
                                <img src="images/h-about1.jpg" alt=""/>
                                <span>Courses</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="db-time-line.html">
                                <img src="images/h-adm.jpg" alt=""/>
                                <span>News</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="seminar.html">
                                <img src="images/h-cam1.jpg" alt=""/>
                                <span>Seminars</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <div class="ed-course-in">
                            <a class="course-overlay" href="events.html">
                                <img src="images/h-res1.jpg" alt=""/>
                                <span>Schedules</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pop-cour">
        <div class="container com-sp pad-bot-70">
            <div class="row">
                <div class="con-title">
                    <h2>Popular <span>Courses</span></h2>
                    <p>Browse through the courses offered by Schemax University in a variety of subjects. 
          Here, you’ll discover your passions, strengths, and skills, and we’ll provide the tools that will help you find success.
          Select a course to learn more</p>
                </div>
            </div>
            <div class="animate__animated animate__fadeInUp row">
                <div class="col-md-3">
                    <div> 
                        <div class="card">
                            <img src="https://mpgi.edu.in/wp-content/uploads/2020/07/compuer-science-engineering-IOT.jpg" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Computer Science</h5>
                              <p class="card-text">Get world class training on the fastest growing technologies.The programme, which emphasises the basics of computer programming and networking, comprises a plethora of topics.</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/3861431/pexels-photo-3861431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Chemical Engineering</h5>
                              <p class="card-text"> Chemical Engineering course include Chemistry, Solid and Mechanics, Chemical Engineering basics, petrochemicals, Chemical Plant Designing and Operations, etc</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-md-3">
                    <div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Electrical Engineering</h5>
                              <p class="card-text">All Electrical Engineering courses. From signal processing, to telecommunications, and computer and mobile phone development, electrical engineers handle it ...</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>       
                    </div>
                    <div class="card">
                        <img src="https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="image"/>
                        <div class="card-body">
                          <h5 class="card-title">Aerospace Engineering</h5>
                          <p class="card-text">learn about  Aerodynamics · Space mission analysis and design · Mechanics of flight · Aircraft design · </p>
                          <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                        </div>
                      </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Fashion Technology</h5>
                              <p class="card-text">Learn about the fashion industry. If you want to pursue an education in fashion design and get more chances to be part of runways.</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://img.jagranjosh.com/imported/images/E/Articles/Business-Administration-250x250.jpg" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Business Admistration</h5>
                              <p class="card-text">Business Administration Courses · Accounting Actuarial Science · Business Analysis · Business Development · Business Law · Change Management ...</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Chartered Accountancy</h5>
                              <p class="card-text">A chartered accountant is the necessity of all kinds of businesses, whether it big or small or even led by an individual.</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="image"/>
                            <div class="card-body">
                              <h5 class="card-title">Architecture</h5>
                              <p class="card-text">Architecture course is the art and science of planning, designing, and engineering large structures and buildings aimed at optimum utilisation of space.</p>
                              <a href="#" class="btn btn-lg d-grid btn-primary">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w3l-stats py-lg-5 py-4" id="stats">
        <div class="gallery-inner container py-md-5 py-4">
          <div class="row stats-con text-white">
            <div class="col-md-3 col-6 stats_info counter_grid">
              <span class="fa fa-smile-o"></span>
              <p class="counter">196</p>
              <h4>Complete Courses</h4>
            </div>
            <div class="col-md-3 col-6 stats_info counter_grid1">
              <span class="fa fa-graduation-cap"></span>
              <p class="counter">96</p>
              <h4>Certified Teachers</h4>
            </div>
            <div class="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-5">
              <span class="fa fa-history"></span>
              <p class="counter">25</p>
              <h4>Years of Experience</h4>
            </div>
            <div class="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-5">
              <span class="fa fa-users"></span>
              <p class="counter">890</p>
              <h4>Students Enrolled</h4>
            </div>
          </div>
        </div>
    </section>

    <section class="w3l-index5" id="about">
        <div class="new-block py-5">
          <div class="container py-lg-3">
            <div class="header-section text-center">
              <h3>How we Teach?</h3>
              <p class="mt-3 mb-5">We amplify important ideas in mathematics education to help teachers grow their practice and our profession.
                </p>
            </div>
            <div class="list-single-view mt-5">
              <div class="row">
                <div class="col-md-12 mt-3">
                  <div class="grids5-info">
                    <a href="index.html#url" class="d-block zoom"><img src="https://feedvisor.com/wp-content/uploads/2020/10/What-Is-Amazon-Retail-Readiness.jpg" alt="" class="img-fluid news-image" /></a>
                    <div class="blog-info">
                      <p class="date">Step 01</p>
                      <h4>Assess readiness to learn</h4>
                      <p class="blog-text">Students need skills towards learning successful study. This involves students conducting a self-evaluation and involves evaluating past experiences with independent learning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-single-view mt-3">
              <div class="row">
                <div class="col-md-12 mt-3">
                  <div class="grids5-info">
                    <a href="index.html#url" class="d-block zoom"><img src="https://p1-tt.byteimg.com/origin/pgc-image/71e0e7073380442aa21e831e956d7527?from=pc" alt="" class="img-fluid news-image" /></a>
                    <div class="blog-info">
                      <p class="date">Step 02</p>
                      <h4>Set learning goals</h4>
                      <p class="blog-text">Communication of learning goals between a student and the advising instructor is critical. We've developed a set of questions for students to consider as they map out their learning goals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-single-view mt-3">
              <div class="row">
                <div class="col-md-12 mt-3">
                  <div class="grids5-info">
                    <a href="index.html#url" class="d-block zoom"><img src="https://cdn-www.literacyplanet.com/wp-content/uploads/2017/10/literacyplanet-Engage-the-7-Types-of-Learners-in-your-Classroom.jpg" alt="" class="img-fluid news-image" /></a>
                    <div class="blog-info">
                      <p class="date">Step 03</p>
                      <h4>Engage in the learning process</h4>
                      <p class="blog-text">Students need to understand themselves as learners in order to understand their needs as self-directed learning students.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-single-view mt-3">
              <div class="row">
                <div class="col-md-12 mt-3">
                  <div class="grids5-info">
                    <a href="index.html#url" class="d-block zoom"><img src="https://images.pexels.com/photos/7647951/pexels-photo-7647951.jpeg?cs=srgb&dl=pexels-rodnae-productions-7647951.jpg&fm=jpg" alt="" class="img-fluid news-image" /></a>
                    <div class="blog-info">
                      <p class="date">Step 04</p>
                      <h4>Evaluate learning</h4>
                      <p class="blog-text">For students to be successful in self-directed learning, they must be able to engage in self-reflection and self-evaluation of their learning goals and progress in a unit of study.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="w3l-get-started">
        <div class="new-block top-bottom">
          <div class="container">
            <div class="middle-section">
              <div class="section-width">
                <h2>Start your brightful future today in our institution.</h2>
              </div>
              <div class="link-list-menu">
                  <p class="mb-5">Schemax Educational focuses on imparting skills on cutting – edge technologies and shaping the students into disciplined young citizens of good character and lays emphasis on practical experience so as to enable them to secure employment in industry thereby to become entrepreneurs. The courses are so structured which leads to a linear growth and progressive insight into the engineering subjects as well as training in soft skills. Since inception in 2001, in its quest to offer quality education, our college has become a temple of knowledge and produced hundreds of eminent and skill full graduate engineers, who are successful in their careers, serving all over the world.</p>
                  <a href="about.html" class="btn btn-outline-light btn-lg btn-more">About Us</a>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="w3l-testimonials" id="testimonials">
        <div class="testimonials py-5">
          <div class="container py-lg-5">
            <div class="header-section text-center">
              <h3>What our Student Saying</h3>
            </div>
            <div class="row mt-4">
              <div class="col-md-10 mx-auto">
                <div class="owl-one owl-carousel owl-theme">
                  <div class="item">
                    <div class="slider-info mt-lg-4 mt-3">
                      <div class="img-circle">
                        <img src="images/student1.jpg" class="img-fluid testimonial-img" alt="client image"/>
                      </div>
                      <div class="message">
                        <span class="fa fa-quote-left" aria-hidden="true"></span>
                        <p>Studying at schemax was an amazing journey.Schemax is a platform where I started my new journey into web development and feel blessed to be part of this university.</p>
                        <div class="name mt-4">
                          <h4>Adam Ster</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="slider-info mt-lg-4 mt-3">
                      <div class="img-circle">
                        <img src="images/student2.jpg" class="img-fluid testimonial-img" alt="client image"/>
                      </div>
                      <div class="message">
                        <span class="fa fa-quote-left" aria-hidden="true"></span>
                        <p>They care about how the student is doing within the course and whether we understand,rather than just giving out information and letting the students absorb it however they want.</p>
                        <div class="name mt-4">
                          <h4>Dennis Jack</h4>
                        </div>
                      </div>
                  </div>
                  </div>
                  <div class="item">
                    <div class="slider-info mt-lg-4 mt-3">
                      <div class="img-circle">
                        <img src="images/student3.jpg" class="img-fluid testimonial-img" alt="client image"/>
                      </div>
                      <div class="message">
                        <span class="fa fa-quote-left" aria-hidden="true"></span>
                        <p>Education is the manifestation of perfection already existing in man.This is what I realised at Schemax University.It gave me a platform where I could bring up my talent and hidden capabilities.</p>
                        <div class="name mt-4">
                          <h4>Camillae</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="slider-info mt-lg-4 mt-3">
                      <div class="img-circle">
                        <img src="images/student4.jpg" class="img-fluid testimonial-img" alt="client image"/>
                      </div>
                      <div class="message">
                        <span class="fa fa-quote-left" aria-hidden="true"></span>
                        <p>I had a wonderful enriching learning experience in schemax University.The faculties are experts in their fields and more than ready to always guide me through everything.</p>
                        <div class="name mt-4">
                          <h4>Charlotte</h4>
                        </div>
                      </div>
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

export default Home;
