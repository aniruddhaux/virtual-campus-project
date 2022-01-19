
import React, { useState } from 'react';

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

import { ListGroup, ListGroupItem, } from 'reactstrap';


const MobileHeader = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar className="m_header" color="faded" light>
            <ListGroup className="logo-sec float-left d-flex  flex-row">
                <ListGroupItem className="d-flex align-items-center border-0 mr-3 logo bg-white p-2" tag="a" href="#">
                    <img src="images/logo_one.png" alt="Logo One"/>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center border-0 mr-3 logo bg-white p-2" tag="a" href="#">
                     <img src="images/logo_two.png" alt="Logo Two"/>
                </ListGroupItem>
            </ListGroup>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
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
                    <NavLink className="text-white" href="#">ABOUT</NavLink>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
export default  MobileHeader;