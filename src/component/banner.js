import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Banner extends Component {

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 10) {
          document.querySelector(".banner").className = "banner actice"
        } else {
          document.querySelector(".banner").className = "banner";
        }
      };


    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            button: false,
          };
        return(
            <div className="banner"  onScroll={ this.handleScroll }>
               <Slider {...settings}>
                    <div>
                        <div className="banner-photo overflow-hidden" style={{background:`url('/images/banner_photo_one.png')`,}}>
                            <div className="container">
                                <div className="text_content float-right">
                                    <h5 className="text-white welcome text-uppercase pb-2 mb-3">Welcome to i-ADMISSION</h5>
                                    <h3 className="banner_title text-white font-weight-bold pb-5">We Ensure <span>better Education</span> for a better World</h3>
                                    <BrowserRouter>
                                        <Link class="more_btn text-white font-weight-light text-uppercase" to="#">Learn More</Link>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="banner-photo overflow-hidden" style={{background:`url('/images/banner_photo_one.png')`,}}>
                            <div className="container">
                                <div className="text_content float-right">
                                    <h5 className="text-white welcome text-uppercase pb-2 mb-3">Welcome to i-ADMISSION</h5>
                                    <h3 className="banner_title text-white font-weight-bold pb-5">We Ensure <span>better Education</span> for a better World</h3>
                                    <BrowserRouter>
                                        <Link class="more_btn text-white font-weight-light text-uppercase" to="#">Learn More</Link>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="banner-photo overflow-hidden" style={{background:`url('/images/banner_photo_one.png')`,}}>
                            <div className="container">
                                <div className="text_content float-right">
                                    <h5 className="text-white welcome text-uppercase pb-2 mb-3">Welcome to i-ADMISSION</h5>
                                    <h3 className="banner_title text-white font-weight-bold pb-5">We Ensure <span>better Education</span> for a better World</h3>
                                    <BrowserRouter>
                                        <Link class="more_btn text-white font-weight-light text-uppercase" to="#">Learn More</Link>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                  
                    
                </Slider>
            </div>

            
        );

        
    }

}
export default  Banner;