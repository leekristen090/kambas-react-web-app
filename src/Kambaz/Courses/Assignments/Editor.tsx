import {
    Button,
    Card,
    Col,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect,
    Row
} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, updateAssignment} from "./reducer.ts";
import * as assignmentsClient from "./client.ts";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const isNew = aid === "new";
    const [assignment, setAssignment] = useState({
        _id: "",
        // isNew ? "" : aid
        title: "",
        course: cid || "",
        description: "",
        points: "100",
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: ""
    });

    const handleSave = async () => {
        const assignmentData = {
            ...assignment,
            points: parseInt(assignment.points) || 100
        };
        try {
            if (isNew) {
                const newAssignment = await assignmentsClient.createAssignmentForCourse(cid as string, assignmentData);
                dispatch(addAssignment(newAssignment));
            } else {
                const updatedAssignment = await assignmentsClient.updateAssignmentForCourse(
                    cid as string,
                    assignment._id,
                    assignmentData
                );
                dispatch(updateAssignment(updatedAssignment));
            }
            navigate(`/Kambaz/Courses/${cid}/Assignments`);
        } catch (error) {
            console.error("Failed to save assignment:", error);
        }
    };
    const handleCancel = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };
    useEffect(() => {
        const fetchAssignment = async () => {
            if (!isNew && aid) {
                try {
                    const existingAssignment = await assignmentsClient.findAssignmentById(cid as string, aid);
                    if (existingAssignment) {
                        setAssignment({
                            _id: existingAssignment._id,
                            title: existingAssignment.title,
                            course: existingAssignment.course,
                            description: existingAssignment.description || "<p>This assignment is <span style='color: red'>available online</span></p>" +
                                "<p>Submit a link to the landing page of your Web application running on Netlify.</p>" +
                                "<p>The landing page should include the following:</p>" +
                                "<ul><li>Your full name and section</li><li>Links to each of the lab assignments</li><li>Link to the Kambaz application</li><li>Link to all relevant source code repositories</li></ul>" +
                                "<p>The Kambaz application should include a link to navigate back to the landing page.</p>",
                            points: existingAssignment.points?.toString() || "100",
                            dueDate: existingAssignment.dueDate || "",
                            availableFromDate: existingAssignment.availableFromDate || "",
                            availableUntilDate: existingAssignment.availableUntilDate || ""
                        });
                    }
                } catch (error) {
                    console.error("Failed to fetch assignment:", error);
                }
            }
        };
        fetchAssignment();
    }, [aid, isNew, cid]);

    if (!isNew && !assignments.find((a: any) => a._id === aid)) {
        return (
            <div id="wd-assignments-editor">
                <h2>Assignment not found</h2>
                <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">
                    Back to Assignments
                </Link>
            </div>
        );
    }

    return (
        <div id={"wd-assignments-editor"}>
            <FormGroup className={"mb-3"} controlId={"assignment-name"}>
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type={"textarea"} defaultValue={assignment.title}
                             onChange={(e) => setAssignment({...assignment, title: e.target.value})}
                />
            </FormGroup>
            <div>
                <Card>
                    <Card.Body>
                        <div contentEditable className={"form-control"}
                             onBlur={(e) => setAssignment({...assignment, description: e.currentTarget.innerHTML})}
                             dangerouslySetInnerHTML={{
                                 __html: assignment.description ||
                                     "New Assignment Description"
                             }}
                        />
                    </Card.Body>
                </Card>
            </div>
            <br/>
            <FormGroup>
                <FormControl defaultValue={assignment.points} className={"float-end w-50"}
                    onChange={(e) => setAssignment({...assignment, points: e.target.value})}
                />
            <FormLabel className={"float-end wd-margin-right-left align-items-center"}>
                Points
            </FormLabel>
            </FormGroup>
            <br/><br/>
            <FormGroup>
                <FormSelect className={"w-50 float-end"}>
                    <option value={"ASSIGNMENTS"}>ASSIGNMENTS</option>
                    <option value={"QUIZZES"}>QUIZZES</option>
                    <option value={"EXAMS"}>EXAMS</option>
                </FormSelect>
                <FormLabel className={"float-end wd-margin-right-left"}>Assignment
                    Group</FormLabel>
            </FormGroup><br/><br/>
            <FormGroup>
                <FormSelect className={"w-50 float-end"}>
                    <option value={"PERCENTAGE"}>PERCENTAGE</option>
                </FormSelect>
                <FormLabel className={"float-end wd-margin-right-left"}>Display Grade
                    as
                </FormLabel>
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
                <FormLabel className={"float-end wd-margin-right-left"}>
                    Submission Type
                </FormLabel>
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
                        <FormControl type={"datetime-local"}
                                     defaultValue={assignment.dueDate}
                                     onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}/>
                        <br/>
                        <FormGroup as={Row}>
                            <Col sm={6}>
                                <FormLabel><b>Available From</b></FormLabel>
                                <FormControl type={"datetime-local"}
                                             defaultValue={assignment.availableFromDate}
                                             onChange={(e) => setAssignment({...assignment, availableFromDate: e.target.value})}
                                />
                            </Col>
                            <Col sm={6}>
                                <FormLabel><b>Until</b></FormLabel>
                                <FormControl type={"datetime-local"}
                                             defaultValue={assignment.availableUntilDate}
                                             onChange={(e) => setAssignment({...assignment, availableUntilDate: e.target.value})}/>
                            </Col>
                        </FormGroup>
                    </Card.Body>
                </Card>
                <FormLabel className={"float-end wd-margin-right-left"}>Assign</FormLabel>
            </div>
            <br/>
            <hr/>
            <Button onClick={handleSave}
                  className={"float-end me-2 btn btn-danger"}>
                Save
            </Button>
            <Button onClick={handleCancel}
                  className={"float-end me-2 btn btn-secondary"}>Cancel</Button>
        </div>
    );
}