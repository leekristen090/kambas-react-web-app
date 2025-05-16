import {
    Button, Card,
    Col,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect,
    Row
} from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id={"wd-assignments-editor"}>
            <FormGroup className={"mb-3"} controlId={"assignment-name"}>
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type={"textarea"} value={"A1 - ENV + HTML"}/>
            </FormGroup>
            <div>
                <Card>
                    <Card.Body>
                        <div contentEditable className={"form-control"}
                             dangerouslySetInnerHTML={{__html:
                                     "<p>This assignment is <span style='color: red'>available online</span></p>" +
                                     "<p>Submit a link to the landing page of your Web application running on Netlify.</p>" +
                                     "<p>The landing page should include the following:</p>" +
                                     "<ul><li>Your full name and section</li><li>Links to each of the lab assignments</li><li>Link to the Kambaz application</li><li>Link to all relevant source code repositories</li></ul>" +
                                     "<p>The Kmabaz application should inlcude a link to navigate back to the landing page.</p>"}}/>
                    </Card.Body>
                </Card>
            </div>
            {/*<FormGroup>*/}
            {/*    <FormControl as={"textarea"} rows={8}>*/}

            {/*        /!*This assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambaz application Links to all relevant source code repos The Kambaz application should include a link to navigate back to the landing page.*!/*/}
            {/*    </FormControl>*/}
            {/*</FormGroup>*/}
            <br />
            <FormGroup>
                <FormControl value={"100"} className={"float-end w-50"}></FormControl>
                <FormLabel className={"float-end wd-margin-right-left align-items-center"}>Points</FormLabel>
            </FormGroup>
            <br/><br/>
            <FormGroup>
                <FormSelect className={"w-50 float-end"}>
                    <option value={"ASSIGNMENTS"}>ASSIGNMENTS</option>
                    <option value={"QUIZZES"}>QUIZZES</option>
                    <option value={"EXAMS"}>EXAMS</option>
                </FormSelect>
                <FormLabel className={"float-end wd-margin-right-left"}>Assignment Group</FormLabel>
            </FormGroup>
            <br/><br/>
            <FormGroup>
                <FormSelect className={"w-50 float-end"}>
                    <option value={"PERCENTAGE"}>PERCENTAGE</option>
                </FormSelect>
                <FormLabel className={"float-end wd-margin-right-left"}>Display Grade as</FormLabel>
            </FormGroup>
            <br/><br/>
            <div className={"clearfix mb-3"}>
                <Card className={"w-50 float-end"}>
                    <Card.Body>
                        <FormGroup>
                            <FormSelect className={"w-100"}>
                                <option value={"ONLINE"}>Online</option>
                            </FormSelect>
                        </FormGroup>
                        <br/>
                        <b>Online Entry Options</b>
                        <br/>
                        <fieldset>
                            <Form.Group as={Row} className={"mb-0"}>

                                <Col sm={10}>
                                    <Form.Check type={"checkbox"} label={"Text Entry"}
                                                name={"submissionchkbx"}/>
                                    <Form.Check label={"Website URL"}
                                                name={"submissionchkbx"}/>
                                    <Form.Check label={"Media Recordings"}
                                                name={"submissionchkbx"}/>
                                    <Form.Check label={"Student Annotations"}
                                                name={"submissionchkbx"}/>
                                    <Form.Check label={"File Uploads"}
                                                name={"submissionchkbx"}/>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Card.Body>
                </Card>
                <FormLabel className={"float-end wd-margin-right-left"}>Submission Type</FormLabel>
            </div>
            <br/>
            <div className={"clearfix mb-3"}>
                <Card className={"w-50 float-end"}>
                    <Card.Body>
                        <FormLabel><b>Assign to</b></FormLabel>
                        <FormSelect>
                            <option value={"EVERYONE"}>Everyone</option>
                        </FormSelect>
                        <br/>
                        <FormLabel><b>Due</b></FormLabel>
                        <FormControl type={"datetime-local"} defaultValue={"2025-05-13T23:59"}/>
                        <br/>
                        <FormGroup as={Row}>
                            <Col sm={6}>
                                <FormLabel><b>Available From</b></FormLabel>
                                <FormControl type={"datetime-local"} defaultValue={"2025-05-06T12:00"}/>
                            </Col>
                            <Col sm={6}>
                                <FormLabel><b>Until</b></FormLabel>
                                <FormControl type={"datetime-local"} defaultValue={"2025-05-13T23:59"}/>
                            </Col>
                        </FormGroup>
                    </Card.Body>
                </Card>
                <FormLabel className={"float-end wd-margin-right-left"}>Assign</FormLabel>
            </div>
            <br/>
            <hr/>
            <Button variant={"danger"} className={"float-end"}>Save</Button>
            <Button variant={"secondary"} className={"float-end me-2"}>Cancel</Button>
        </div>
    );
}