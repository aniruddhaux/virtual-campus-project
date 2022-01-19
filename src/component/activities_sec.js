import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class ActivitiesSec  extends Component {


    render(){
        return(
            <div className="activities_sec">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">activities center </h3>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#" className="activities_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/activities_icon_one.png' alt="Activities Icon One"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Academic Activities</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="activities_grid activities border-0" data-aos="fade-up">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/activities_icon_two.png' alt="Activities Icon two"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Culture Activities</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="activities_grid border-0"  data-aos="fade-right">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/activities_icon_three.png' alt="Activities Icon two"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Sports Activities</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="activities_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/activities_icon_four.png' alt="Activities Icon Four"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Research Activities</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="activities_grid activities border-0"  data-aos="fade-down">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/activities_icon_five.png' alt="Activities Icon Five"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Social Activities</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="activities_grid border-0"  data-aos="fade-right">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/activities_icon_six.png' alt="Activities Icon Six"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Sprituals Activities</h4>
                        </ListGroupItem>
                    </ListGroup>
                 </div>
            </div>

            
        );

        
    }

}
export default  ActivitiesSec;