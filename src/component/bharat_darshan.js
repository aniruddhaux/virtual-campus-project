import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import 'aos/dist/aos.css';



class BharatDarshan extends Component {


    render(){
       
        return(
            <div className="bharat_darshan_sec overflow-hidden">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-left">BHARAT DARSHAN CLUB</h3>

                    <div className="top_sec" data-aos="fade-right">
                        <div className="place_day d-flex m-auto align-items-center text-white font-weight-bold overflow-hidden">
                            Place of the Day : <span>Jaipur</span>
                        </div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className="bharat_darshan_wrapp">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 bharat_darshan_grid">
                                <div className="bharat_darshan_content" data-aos="fade-left">
                                    
                                    <div className="bharat_darshan_photo">
                                        <img src="images/bharat_darshan_photo_one.png" alt="Bharat Darshan Photo One"/>
                                    </div>

                                    <BrowserRouter>
                                        <Link class="more_btn text-white font-weight-light border" to="#">Know More</Link>
                                    </BrowserRouter>   
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 bharat_darshan_grid">
                                <div className="bharat_darshan_content" data-aos="fade-down">
                                    
                                    <div className="bharat_darshan_photo">
                                        <img src="images/bharat_darshan_photo_two.png" alt="Bharat Darshan Photo Two"/>
                                    </div>

                                    <BrowserRouter>
                                        <Link class="more_btn text-white font-weight-light border" to="#">Know More</Link>
                                    </BrowserRouter>   
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 bharat_darshan_grid">
                                <div className="bharat_darshan_content"  data-aos="fade-right">
                                    
                                    <div className="bharat_darshan_photo">
                                        <img src="images/bharat_darshan_photo_three.png" alt="Bharat Darshan Photo Three"/>
                                    </div>

                                    <BrowserRouter>
                                        <Link class="more_btn text-white font-weight-light border" to="#">Know More</Link>
                                    </BrowserRouter>   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <BrowserRouter>
                        <Link class="boeder_btn float-right" to="#"  data-aos="fade-down">Share your Bharat Darshan</Link>
                    </BrowserRouter>
                </div>
            </div>

            
        );

        
    }

}
export default  BharatDarshan;