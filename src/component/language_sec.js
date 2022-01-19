import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

class LanguagesSec   extends Component {


    render(){
       
        return(
            <div className="languages_sec overflow-hidden">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-right">Center for Promotion of Indian Languages </h3>
                    <div className="languages_wrapp">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 languages_grid">
                                <div className="languages_content"  data-aos="fade-left">
                                    <span className="language text-white">Indian Language</span>
                                    <div className="languages_photo">
                                        <img src="images/languages_photo_one.png" alt="Innovate Photo One"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-1</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <div className="btn_sec">
                                            <BrowserRouter>
                                                <Link class="read_btn text-white font-weight-light mr-3" to="#">Read</Link>
                                            </BrowserRouter>
                                            <BrowserRouter>
                                                <Link class="watch_btn text-white font-weight-light" to="#">Watch</Link>
                                            </BrowserRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 languages_grid">
                                <div className="languages_content"  data-aos="fade-top">
                                    <div className="innovate_grid">
                                        <span className="language text-white">English</span>
                                        <div className="languages_photo">
                                            <img src="images/languages_photo_two.png" alt="Innovate Photo Two"/>
                                        </div>
                                        <div className="text_content">
                                            <h4 className="title text-uppercase font-weight-bold mt-3">Project-2</h4>
                                            <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                            <div className="btn_sec">
                                                <BrowserRouter>
                                                    <Link class="read_btn text-white font-weight-light mr-3" to="#">Read</Link>
                                                </BrowserRouter>
                                                <BrowserRouter>
                                                    <Link class="watch_btn text-white font-weight-light" to="#">Watch</Link>
                                                </BrowserRouter>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 languages_grid">
                                <div className="languages_content"  data-aos="fade-right">
                                    <span className="language text-white">Hindi</span>
                                    <div className="languages_photo">
                                        <img src="images/languages_photo_one.png" alt="Innovate Photo One"/>
                                    </div>
                                    <div className="text_content">
                                        <h4 className="title text-uppercase font-weight-bold mt-3">Project-1</h4>
                                        <p>Lorem Ipsum is simply dummy text of the prin ting and typesetting industry. Lorem Ips</p>
                                        <div className="btn_sec">
                                            <BrowserRouter>
                                                <Link class="read_btn text-white font-weight-light mr-3" to="#">Read</Link>
                                            </BrowserRouter>
                                            <BrowserRouter>
                                                <Link class="watch_btn text-white font-weight-light" to="#">Watch</Link>
                                            </BrowserRouter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <BrowserRouter>
                        <Link class="boeder_btn float-right" to="#"  data-aos="fade-down">Add Your Story </Link>
                    </BrowserRouter>
                </div>
            </div>

            
        );

        
    }

}
export default  LanguagesSec;