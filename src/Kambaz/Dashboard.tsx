import {Link} from "react-router";
import {Button, Card, Col, Row} from "react-bootstrap";
import {courses} from "./Database";

export default function Dashboard() {
    return (
        <div id={"wd-dashboard"}>
            <h1 id={"wd-dashboard-title"}>Dashboard</h1><hr/>
            <h2 id={"wd-dashboard-published"}>Published Courses (7)</h2><hr/>
            <div id={"wd-dashboard-courses"}>
                <Row xs={1} md={5} className={"g-4"}>
                    {courses.map((course) =>
                        <Col className={"wd-dashboard-course"} style={{ width: "270px" }}>
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                      className={"wd-dashboard-course-link text-decoration-none text-dark"}>
                                    <Card.Img variant={"top"} src={"/images/reactjs.jpg"} width={"100%"} height={160} />
                                    <Card.Body className={"card-body"}>
                                        <Card.Title className={"wd-dashboard-course-title text-nowrap overflow-hidden"}>{course.name}</Card.Title>
                                        <Card.Text className={"wd-dashboard-course-description overflow-hidden"} style={{ height: "100px" }}>
                                            {course.description}
                                        </Card.Text>
                                        <Button variant={"primary"}>Go</Button>
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