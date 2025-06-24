import {Link, useNavigate} from "react-router";
import {Button, Card, Col, FormControl, Row} from "react-bootstrap";
import AuthCheck from "./Account/AuthCheck.tsx";

export default function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (id: string) => void;
    updateCourse: (id: string) => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void; }) {
    const navigate = useNavigate();
    const {isFaculty} = AuthCheck();
    //const {currentUser} = useSelector((state: any) => state.accountReducer);
    const handleGoCLick = (courseId: string) => {
        if (course.enrolled) {
            navigate(`/Kambaz/Courses/${courseId}/Home`)}
    };

    return (
        <div id={"wd-dashboard"}>
            <h1 id={"wd-dashboard-title"}>
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className={"float-end btn btn-primary"} >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1><hr/>
            {isFaculty &&
                <>
                    <h5>
                        New Course
                        <button className={"btn btn-primary float-end"}
                                id={"wd-add-new-course-click"}
                                onClick={addNewCourse}>
                            Add
                        </button>
                        <button className={"btn btn-warning float-end me-2"} onClick={() => {
                            updateCourse(course._id);
                            //updateEnrollment(course._id, currentUser._id);
                        }}
                                id={"wd-update-course-click"}>
                            Update
                        </button>
                    </h5>
                    <br/>
                    <FormControl value={course.name} className={"mb-2"}
                                 onChange={(e) => setCourse({...course,
                                     name: e.target.value})}/>
                    <FormControl value={course.description} as={"textarea"} rows={3}
                                 onChange={(e) => setCourse({...course,
                                     description: e.target.value})}/>
                    <hr/>
                </>
            }
            <h2 id={"wd-dashboard-published"}>
                {enrolling? "All Courses" : "My Courses"} ({courses.length})
            </h2><hr />
            <div id={"wd-dashboard-courses"}>
                <Row xs={1} md={5} className={"g-4"}>
                    {courses.map((course: any) => {
                        return (
                            <Col className={"wd-dashboard-course"} style={{ width: "270px" }}>
                                <Card>
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                          className={"wd-dashboard-course-link text-decoration-none text-dark"}>
                                        <Card.Img variant={"top"} src={"/images/reactjs.jpg"}
                                                  width={"100%"} height={160} />
                                        <Card.Body className={"card-body"}>
                                            <Card.Title
                                                className={"wd-dashboard-course-title text-nowrap overflow-hidden"}>
                                                {course.name}
                                            </Card.Title>
                                            <Card.Text
                                                className={"wd-dashboard-course-description overflow-hidden"}
                                                style={{ height: "100px" }}>
                                                {course.description}
                                            </Card.Text>
                                            <Button variant={"primary"} className={"m-1"}
                                                    onClick={() => handleGoCLick(course._id)}>
                                                Go
                                            </Button>
                                            {isFaculty &&
                                                <>
                                                    <Button variant={"danger"}
                                                            onClick={(event) => {
                                                                event.preventDefault(); deleteCourse(course._id);
                                                            }} className={"float-end me-1"} id={"wd-delete-course-click"}>
                                                        Delete
                                                    </Button>
                                                    <Button variant={"warning"}
                                                            onClick={(event) => {
                                                                event.preventDefault(); setCourse(course);
                                                            }} className={"me-2 float-end"} id={"wd-edit-course-click"}>
                                                        Edit
                                                    </Button>
                                                </>
                                            }
                                            <div>
                                                {enrolling && (
                                                    <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-start m-1 mb-1`}
                                                            onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);}}>
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                            </div>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}