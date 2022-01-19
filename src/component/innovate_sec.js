import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

class InnovateSec   extends Component {


    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            button: false,
            responsive: [
                {
                  breakpoint: 1366,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 990,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }

              ]
          };
        return(
            <div className="innovate_sec">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-left">Innovate for India Club</h3>
                    <div className="innovate_slider" data-aos="fade-right">

                        <Slider {...settings}>
                            <div>
                                <div className="innovate_grid">
                                    <div className="innovate_photo overflow-hidden">
                                        <img src="images/innovate_photo_one.png" alt="Innovate Photo One"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-1</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <BrowserRouter>
                                            <Link class="explore_btn text-white font-weight-light" to="#">Explore</Link>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="innovate_grid">
                                    <div className="innovate_photo overflow-hidden">
                                        <img src="images/innovate_photo_two.png" alt="Innovate Photo Two"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-2</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <BrowserRouter>
                                            <Link class="explore_btn text-white font-weight-light" to="#">Explore</Link>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="innovate_grid">
                                    <div className="innovate_photo overflow-hidden">
                                        <img src="images/innovate_photo_three.png" alt="Innovate Photo Three"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-3</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <BrowserRouter>
                                            <Link class="explore_btn text-white font-weight-light" to="#">Explore</Link>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="innovate_grid">
                                    <div className="innovate_photo overflow-hidden">
                                        <img src="images/innovate_photo_three.png" alt="Innovate Photo Three"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-4</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <BrowserRouter>
                                            <Link class="explore_btn text-white font-weight-light" to="#">Explore</Link>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="innovate_grid">
                                    <div className="innovate_photo overflow-hidden">
                                        <img src="images/innovate_photo_three.png" alt="Innovate Photo Three"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-4</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <BrowserRouter>
                                            <Link class="explore_btn text-white font-weight-light" to="#">Explore</Link>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </Slider>
                    </div>
                </div>
            </div>

            
        );

        
    }

}
export default  InnovateSec;