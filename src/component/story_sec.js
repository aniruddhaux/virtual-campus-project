import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


class StorySec extends Component {


    render(){
        return(
            <div className="story_sec">
                <div className="container">
                    <h3 className="story_title text-white text-center m-auto" data-aos="fade-top">Story of Transformation @ HAMARI PAHA</h3>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-sm-8 col-sm-12 col-xs-12">
                            <div className="text_content" data-aos="fade-left">
                                <ListGroup className="list-group ">
                                    <ListGroupItem className="border-0">
                                        <p><span>Problem :</span>Richard McClintock, a Latin professor at Hampden-Sydney College in Vi rg inia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in clas sical literature,</p>
                                    </ListGroupItem>
                                    <ListGroupItem  className="border-0">
                                        <p><span>Our Initiative :</span>Richard McClintock, a Latin professor at Hampden-Sydney College in Vi rginia, looked up one of the more obscure Latin words, conse ctetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                                    </ListGroupItem>
                                    <ListGroupItem  className="border-0">
                                        <p><span>Our Initiative :</span>Richard McClintock, a Latin professor at Hampden-Sydney College in Vi rginia, looked up one of the more obscure Latin words, conse ctetur, from a Lorem Ipsum passage, and going through the cites of the word in clas sical literature, discovered the undoubtable source.</p>
                                    </ListGroupItem>
                                </ListGroup>
                                <div className="btn_sec">
                                    <BrowserRouter>
                                        <Link class="contribute_btn text-white font-weight-light mr-3" to="#">Contribute</Link>
                                    </BrowserRouter>
                                    <BrowserRouter>
                                        <Link class="share_btn text-white font-weight-light" to="#">Share this Story</Link>
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-sm-12 col-xs-12 right_sec" data-aos="fade-right">
                            <div className="story_photo">
                                <img src="images/story_photo_one.png" alt="Story Photo One"/>
                            </div>
                            <div className="story_photo video">
                            
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/g6BtbIiJ_rc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        );

        
    }

}
export default  StorySec;