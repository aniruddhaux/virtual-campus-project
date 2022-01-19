import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';



class InstituteHeader extends Component {


    render(){
        return(
            <div className="institute_header overflow-hidden py-3">
                <div className="container-fluid">
                    <ListGroup className="list-group d-flex flex-row left-sec float-left">
                        <ListGroupItem className="d-flex align-items-center border-white mr-3">
                            <div class="icon bg-white text-center rounded-circle d-flex align-items-center justify-content-center mr-2">
                                <img src="images/institute_icon.png" alt="Institute Icon"/>
                            </div>
                            <div class="text_content text-white">
                                <div class="d-block ">
                                    <span class="font-weight-bold">Institute Name:</span>National Academy 
                                </div>
                                <div class="d-block ">
                                    <span class="font-weight-bold">Address:</span>4th Floor, The Regency Building,
                                </div>
                            </div>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup className="list-group d-flex flex-row logo-sec float-right">
                        <ListGroupItem className="d-flex align-items-center border-0 mr-3 logo bg-white p-2" tag="a" href="#">
                                <img src="images/logo_one.png" alt="Logo One"/>
                        </ListGroupItem>
                        <ListGroupItem className="d-flex align-items-center border-0 mr-3 logo bg-white p-2" tag="a" href="#">
                            
                                <img src="images/logo_two.png" alt="Logo Two"/>
                            
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>

            
        );

        
    }

}
export default  InstituteHeader;