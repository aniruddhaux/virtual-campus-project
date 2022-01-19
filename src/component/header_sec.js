import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import TopHeader from './top_header.js';
import InstituteHeader from './institute_header.js';
import NavMenu from './nav_header.js';
import MobileHeader from './mobile_header.js';


class HeaderSec extends Component {

   




      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 10) {
          document.querySelector(".header_sec").className = "header_sec sticky"
        } else {
          document.querySelector(".header_sec").className = "header_sec";
        }
      };
    render(){
        return(
            <div className="header_sec" onScroll={ this.handleScroll }>
               <TopHeader/>
               <InstituteHeader/>
               <NavMenu/>
               <MobileHeader/>
            </div>

            
        );

        
    }

}
export default  HeaderSec;