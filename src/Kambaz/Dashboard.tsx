import {Link} from "react-router";
import {Button, Card, Col, FormControl, Row} from "react-bootstrap";
// import * as db from "./Database";
// import {useState} from "react";
// import { v4 as uuidv4 } from "uuid";

export default function Dashboard({
    courses, course, setCourse, addNewCourse, deleteCourse, updateCourse
                                  }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
    // const [courses, setCourses] = useState<any[]>(db.courses);
    // const [course, setCourse] = useState<any>({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "/images/reactjs.jpg", description: "New Description"
    // });
    // const addNewCourse = () => {
    //     const newCourse = { ...course, _id: uuidv4() };
    //     setCourses([...courses, newCourse ]);
    // };
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div id={"wd-dashboard"}>
            <h1 id={"wd-dashboard-title"}>Dashboard</h1><hr/>
            <h5>
                New Course
                <button className={"btn btn-primary float-end"}
                        id={"wd-add-new-course-click"} onClick={addNewCourse}>
                    Add
                </button>
                <button className={"btn btn-warning float-end me-2"} onClick={updateCourse}
                        id={"wd-update-course-click"}>
                    Update
                </button>
            </h5><br />
            <FormControl value={course.name} className={"mb-2"}
                         onChange={(e) => setCourse({...course, name: e.target.value})} />
            <FormControl value={course.description} rows={3}
                         onChange={(e) => setCourse({...course, description: e.target.value})} />
            <hr/>
            <h2 id={"wd-dashboard-published"}>Published Courses ({courses.length})</h2><hr/>
            <div id={"wd-dashboard-courses"}>
                <Row xs={1} md={5} className={"g-4"}>
                    {courses.map((course) =>
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
                                            className={"wd-dashboard-course-description overflow-hidden"} style={{ height: "100px" }}>
                                            {course.description}
                                        </Card.Text>
                                        <Button variant={"primary"}>Go</Button>
                                        <Button variant={"danger"}
                                                onClick={(event) => {
                                                    event.preventDefault(); deleteCourse(course._id);
                                                }} className={"float-end"} id={"wd-delete-course-click"}>
                                            Delete
                                        </Button>
                                        <Button variant={"warning"}
                                                onClick={(event) => {
                                                    event.preventDefault(); setCourse(course);
                                                }} className={"me-2 float-end"} id={"wd-edit-course-click"}>
                                            Edit
                                        </Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    );
}