import React, {Component} from 'react';

import { Nav, NavItem, NavLink, ListGroup, ListGroupItem  } from 'reactstrap';
import { BrowserRouter, Link } from "react-router-dom";
import 'aos/dist/aos.css';

class FooterSec extends Component {


    render(){
       
        return(
            <div className="footer_sec">
                <div className="container">
                    <Nav className="f_nav justify-content-center" data-aos="fade-down-left">
                        <NavItem>
                            <NavLink className="text-white" href="#">DOWNLOAD APP </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#">POLICIES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#">GRIEVANCES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#">FEEDBACK</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#">CONTACT Us</NavLink>
                        </NavItem>

                    </Nav>
                    <div className="footer_bottom" data-aos="fade-down-right">
                        <ListGroup>
                            <ListGroupItem className="border-0 text-white font-weight-light">Virtual Campus Managed by <BrowserRouter> <Link to="#">Project Management Group</Link></BrowserRouter> </ListGroupItem>
                            <ListGroupItem  className="border-0 text-white font-weight-light">Designed, Developed and Hosted by <BrowserRouter> <Link to="#">Project Vidyarambh Control Center</Link></BrowserRouter> </ListGroupItem>
                            <ListGroupItem  className="border-0 text-white font-weight-light">Powered by <BrowserRouter> <Link to="#">www.1portal.in</Link></BrowserRouter> </ListGroupItem>
                        </ListGroup>
                    </div>
                </div>  
            </div>

            
        );

        
    }

}
export default  FooterSec;