import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge  } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';




class IntroSec extends Component {


    render(){
        return(
            <div className="intro_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="intro_grid border " data-aos="fade-right">
                                <div className="top_sec ">
                                    <div class="icon intro_icon text-center rounded-circle d-flex align-items-center justify-content-center  m-auto">
                                        <img src="images/message_icon.png" alt="Message Icon"/>
                                    </div>
                                    <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Welcome Message</h4>
                                </div>
                                <div className="list_content">
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p> Assistants  <BrowserRouter> <Link class="more_btn text-white font-weight-bold" to="#">Click here</Link> </BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program </p>
                                            <p> Assistants  <BrowserRouter> <Link class="more_btn text-white font-weight-bold" to="#">Click here</Link> </BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program </p>
                                            <p> Assistants  <BrowserRouter> <Link class="more_btn text-white font-weight-bold" to="#">Click here</Link> </BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program </p>
                                            <p> Assistants  <BrowserRouter> <Link class="more_btn text-white font-weight-bold" to="#">Click here</Link> </BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program </p>
                                            <p> Assistants  <BrowserRouter> <Link class="more_btn text-white font-weight-bold" to="#">Click here</Link> </BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program </p>
                                            <p> Assistants  <BrowserRouter> <Link class="more_btn text-white font-weight-bold" to="#">Click here</Link> </BrowserRouter> </p>
                                        </ListGroupItem>
                                    </ListGroup>
                                        
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 " data-aos="fade-down">
                            <div className="intro_grid border">
                                <div className="top_sec ">
                                    <div class="icon intro_icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                                        <img src="images/introduction_icon.png" alt="Introduction Icon"/>
                                    </div>
                                    <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Introduction</h4>
                                </div>
                                <div className="text_content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu
stry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                        
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="intro_grid border" data-aos="fade-left">
                                <div className="top_sec ">
                                    <div class="icon intro_icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                                        <img src="images/announcements_icon.png" alt="Announcements Icon"/>
                                    </div>
                                    <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Welcome Message</h4>
                                </div>
                                <div className="list_content">
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program Assistant <BrowserRouter><Badge pill>New</Badge></BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program Assistant <BrowserRouter><Badge pill>New</Badge></BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program Assistant <BrowserRouter><Badge pill>New</Badge></BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program Assistant <BrowserRouter><Badge pill>New</Badge></BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program Assistant <BrowserRouter><Badge pill>New</Badge></BrowserRouter> </p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p className="time">10.10.2020 | 7:30 – 8:30 PM</p>
                                            <p>Orientation Session for Program Assistant <BrowserRouter><Badge pill>New</Badge></BrowserRouter> </p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        );

        
    }

}
export default  IntroSec;