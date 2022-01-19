import React, {Component} from 'react';
import { CustomInput, Form, FormGroup, Label, Button, ListGroup, ListGroupItem } from 'reactstrap';

import 'aos/dist/aos.css';







class QuizSec  extends Component {


    render(){
        return(
            <div className="quiz_sec">
                <div className="container">
                    <div className="quiz_form bg-white" data-aos="fade-left">
                        <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-top">Know India Quiz Competition</h3>
                       
                        <div className="form_content">
                            <div className="headding_sec form_headding_sec d-flex justify-content-between"  data-aos="fade-left">
                                <h4 className="form_headding text-white">Question For The Day:</h4>
                                <h4 className="form_time text-white">Time Left: 00:01 Hours</h4>
                            </div>
                            <Form  data-aos="fade-right">
                                <FormGroup>
                                    <Label for="exampleCheckbox">Q) Ajhdshjkkaskjhhjdjkau?</Label>
                                    <div>
                                        <CustomInput type="checkbox" id="exampleCustomInline" label="A) Gfahg" inline />
                                        <CustomInput type="checkbox" id="exampleCustomInline2" label="B) Btytrfggh" inline />
                                        <CustomInput type="checkbox" id="exampleCustomInline3" label="C) Gfahg" inline />
                                        <CustomInput type="checkbox" id="exampleCustomInline4" label="D) Btytrfggh" inline />
                                    </div>
                                </FormGroup>
                                <Button className="submit_btn btn btn-secondary font-weight-light text-uppercase m-auto d-block border-0">Submit your answer</Button>
                            </Form>
                            <div className="previous_result mt-4"  data-aos="fade-left">
                                <div className="headding_sec">
                                    <h4 className="form_headding text-white mb-0">Previous Day Result:</h4>
                                </div>
                                <div className="answer">
                                    <ListGroup>
                                        <ListGroupItem className="border-0">Q) ASHJASHJ</ListGroupItem>
                                        <ListGroupItem className="border-0">Correct Answer: Option <span>(B) Shjjhahj</span></ListGroupItem>
                                    </ListGroup>
                                </div>
                            </div>
                            <div className="winner mt-4"  data-aos="fade-left">
                                <div className="headding_sec">
                                    <h4 className="form_headding text-white mb-0">Winner:</h4>
                                </div>
                                <div className="winner_details">
                                    <ListGroup>
                                        <ListGroupItem className="winner_name border-0"> <span className="font-weight-bold">Name of the Student:</span>  Deepak Mondal</ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem className="border-0"><span className="font-weight-bold">Class:</span> V</ListGroupItem>
                                        <ListGroupItem className="border-0"><span className="font-weight-bold">Sec:</span> C</ListGroupItem>
                                        <ListGroupItem className="border-0"><span className="font-weight-bold">Roll No:</span> 34</ListGroupItem>
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
export default  QuizSec;