import React, {Component} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import { ListGroup, ListGroupItem, } from 'reactstrap';
import { Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';





class CornorSec extends Component {


    render(){
        return(
            <div className="cornor_sec">
                <div className="container">
                <ListGroup>
                    <ListGroupItem tag="a" href="#" className="cornor_grid border-0" data-aos="fade-right">
                        <div className="cornor_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                            <img src='images/cornor_icon_one.png' alt="Cornor Icon One"/>
                        </div>
                        <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Visitor Cornor</h4>
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" className="cornor_grid border-0" data-aos="fade-up">
                        <div className="cornor_icon text-center d-flex align-items-center justify-content-center  m-auto">
                            <img src='images/cornor_icon_two.png' alt="Cornor Icon Two"/>
                        </div>
                        <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Learner's Corner</h4>
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" className="cornor_grid border-0" data-aos="fade-down">
                        <div className="cornor_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                            <img src='images/cornor_icon_three.png' alt="Cornor Icon Three"/>
                        </div>
                        <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Parent's Corner</h4>
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" className="cornor_grid border-0" data-aos="fade-up">
                        <div className="cornor_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                            <img src='images/cornor_icon_four.png' alt="Cornor Icon Four"/>
                        </div>
                        <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Educator's Corner</h4>
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" className="cornor_grid border-0" data-aos="fade-down">
                        <div className="cornor_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                            <img src='images/cornor_icon_six.png' alt="Cornor Icon Five"/>
                        </div>
                        <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Industry's Corner</h4>
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#" className="cornor_grid border-0" data-aos="fade-left">
                        <div className="cornor_icon text-center d-flex align-items-center justify-content-center  m-auto">
                            <img src='images/cornor_icon_six.png' alt="Cornor Icon Six"/>
                        </div>
                        <h4 className="title text-uppercase font-weight-bold mt-3">Health's Corner</h4>
                    </ListGroupItem>
                </ListGroup>
                </div>
            </div>

            
        );

        
    }

}
export default  CornorSec;