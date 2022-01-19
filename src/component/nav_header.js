import React, {Component, useState} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  const NavMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="nav_header border-top border-white py-2">
            <div className="container-fluid">
                <Nav className="justify-content-center">
                    <NavItem>
                        <NavLink className="text-white active" href="#">HOME</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="text-white">
                            ABOUT
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                About (National Academy of the Institute)

                            </DropdownItem>
                            <DropdownItem>
                                History of (National Academy of the Institute)
                            </DropdownItem>
                            <DropdownItem>
                                Messages 
                            </DropdownItem>
                            <DropdownItem>
                                Management Bodies
                            </DropdownItem>
                            <DropdownItem>
                                Departments/ Centers 
                            </DropdownItem>
                            <DropdownItem>
                                Staff 
                            </DropdownItem>
                            <DropdownItem>
                                Infrastructure 
                            </DropdownItem>
                            <DropdownItem>
                                Contact
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink className="text-white" href="#"></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">ADMINISTRATION</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">ADMISSION CLASSROOM</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">FINANCE  LEARNING</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">PARENTING</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">SDMS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">TECHNOLOGY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#"> TUTORIAL</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">VACANCY</NavLink>
                    </NavItem>
                    
                </Nav>
            </div>
        </div>
    );

}
export default  NavMenu;