import {Link} from "react-router";
import {Button, Card, Col, FormControl, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import * as db from "./Database";
import AuthCheck from "./Account/AuthCheck.tsx";
import {useState} from "react";
import {addCourse, deleteCourse, updateCourse} from "./Courses/reducer.ts";

export default function Dashboard() {
    const dispatch = useDispatch();
    const {courses} = useSelector((state: any) => state.courseReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments} = db;
    const {isFaculty} = AuthCheck();
    const [course, setCourse] = useState<any>({
            _id: "0", name: "New Course", number: "New Number",
            startDate: "2023-09-10", endDate: "2023-12-15",
            image: "/images/reactjs.jpg", description: "New Description"
        });
    return (
        <div id={"wd-dashboard"}>
            <h1 id={"wd-dashboard-title"}>Dashboard</h1><hr/>
            {isFaculty &&
                <>
                    <h5>
                        New Course
                        <button className={"btn btn-primary float-end"}
                                id={"wd-add-new-course-click"} onClick={() => dispatch(addCourse(course))}>
                            Add
                        </button>
                        <button className={"btn btn-warning float-end me-2"} onClick={() => dispatch(updateCourse(course))}
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
            <h2 id={"wd-dashboard-published"}>Published Courses ({courses.filter((course: any) =>
                enrollments.some(
                    (enrollment) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                )).length})</h2><hr/>
            <div id={"wd-dashboard-courses"}>
                <Row xs={1} md={5} className={"g-4"}>
                    {courses
                        .filter((course: any) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course: any) => (
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
                                            <Button variant={"primary"}>Go</Button>
                                            {isFaculty &&
                                                <>
                                                    <Button variant={"danger"}
                                                            onClick={(event) => {
                                                                event.preventDefault(); dispatch(deleteCourse(course._id));
                                                            }} className={"float-end"} id={"wd-delete-course-click"}>
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
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
}