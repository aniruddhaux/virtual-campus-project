import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class TopHeader extends Component {
    
    render(){
        return(
            <div className="top_header overflow-hidden py-2">
                <div className="container-fluid">
                    <ListGroup className="list-group d-flex flex-row left-sec mr-auto float-left">
                        <ListGroupItem className="d-flex align-items-center border-0 mr-3">
                            
                            <div class="icon bg-white text-center rounded-circle d-flex align-items-center justify-content-center mr-2" >
                                <img src="images/day_icon.png" alt="Day Icon"/>
                            </div>
                            <div class="text_content text-white">
                                <span class="d-block font-weight-bold">Day:</span>Monday
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex align-items-center border-0">
                            <div class="icon bg-white text-center rounded-circle d-flex align-items-center justify-content-center mr-2">
                                <img src="images/clock_icon.png" alt="Day Icon"/>
                            </div>
                            <div class="text_content text-white">
                                <span class="d-block font-weight-bold">Date & Time:</span>19.02.2021 / 8:30 AM
                            </div>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup className="list-group d-flex flex-row right-sec ml-auto float-right">
                        <ListGroupItem className="d-flex align-items-center border-0 mr-3">
                            <div class="icon bg-white text-center rounded-circle d-flex align-items-center justify-content-center mr-2">
                                <img src="images/headphone_icon.png" alt="Day Icon"/>
                            </div>
                            <div class="text_content text-white">
                                <span class="d-block font-weight-bold">Helpdesk</span>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex align-items-center border-0 mr-3">
                            <div class="icon bg-white text-center rounded-circle d-flex align-items-center justify-content-center mr-2">
                                <img src="images/phone_icon.png" alt="Day Icon"/>
                            </div>
                            <div class="text_content text-white">
                                <span class="d-block font-weight-bold"> Enquiry:</span>1235486256
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex align-items-center border-0">
                            <div class="icon bg-white text-center rounded-circle d-flex align-items-center justify-content-center mr-2">
                                <img src="images/location_icon.png" alt="Location Icon"/>
                            </div>
                            <div class="text_content text-white">
                                <span class="d-block font-weight-bold"> Location:</span>Salt Lake City,Kolkata, WB
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>

            
        );

        
    }

}
export default  TopHeader;