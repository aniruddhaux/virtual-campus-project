import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import 'aos/dist/aos.css';


class GallerySec extends Component {


    render(){
       
        return(
            <div className="gallery_sec">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-left">Gallery</h3>
                    <div className="gallery_wrapp">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 gallery_grid"  data-aos="fade-up-left">
                                <BrowserRouter>
                                    <Link className="gallery_photo d-block" to="#">
                                        <img src="images/gallery_photo_one.png" alt="Gallery Photo One"/>
                                    </Link>
                                </BrowserRouter>   
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 gallery_grid" data-aos="fade-up-top">
                                <BrowserRouter>
                                    <Link className="gallery_photo d-block" to="#">
                                       
                                        <img src="images/gallery_photo_two.png" alt="Gallery Photo Two"/>
                                    </Link>
                                </BrowserRouter>   
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 gallery_grid" data-aos="fade-up-right">
                                <BrowserRouter>
                                    <Link className="gallery_photo d-block" to="#">
                                        <img src="images/gallery_photo_three.png" alt="Gallery Photo Three"/>
                                    </Link>
                                </BrowserRouter>   
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 gallery_grid" data-aos="fade-down-left">
                                <BrowserRouter>
                                    <Link className="gallery_photo d-block" to="#">
                                        <img src="images/gallery_photo_four.png" alt="Gallery Photo Four"/>
                                    </Link>
                                </BrowserRouter>   
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 gallery_grid" data-aos="fade-down-down">
                                <BrowserRouter>
                                    <Link className="gallery_photo d-block" to="#">
                                        <img src="images/gallery_photo_five.png" alt="Gallery Photo Five"/>
                                    </Link>
                                </BrowserRouter>   
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 gallery_grid" data-aos="fade-down-right">
                                <BrowserRouter>
                                    <Link className="gallery_photo d-block" to="#">
                                        <img src="images/gallery_photo_six.png" alt="Gallery Photo Six"/>
                                    </Link>
                                </BrowserRouter>   
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

            
        );

        
    }

}
export default  GallerySec;