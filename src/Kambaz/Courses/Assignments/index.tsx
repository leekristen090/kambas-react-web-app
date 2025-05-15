import AssignmentControls from "./AssignmentControls.tsx";
import {ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { MdAssignment } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";

export default function Assignments() {
    return (
        <div id={"wd-assignments"}>
            <AssignmentControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className={"me-2 fs-3"} /> ASSIGNMENTS <AssignmentControlButtons />
                    </div>
                    <ListGroup className={"wd-assignment rounded-0"}>
                        <ListGroup.Item className={"wd-assign p-3 ps-1"}>
                            <div className={"d-flex align-items-center"}>
                                <BsGripVertical className={"me-2 fs-3"}/><MdAssignment className={"text-success"}/>
                                <div className={"flex-grow-1 wd-margin-right-left"}>
                                    <a href={"#/Kambaz/Courses/1234/Assignments/123"}
                                       className={"wd-assignment-link"}>
                                        A1 - ENV + HMTL
                                    </a>
                                    <div className={"wd-assignment-details text-muted small mt-1"}>
                                        <span>
                                            <span className={"text-danger"}>Multiple Modules </span>
                                            <span><b>| Not Available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                        </span>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={"wd-assign p-3 ps-1"}>
                            <div className={"d-flex align-items-center"}>
                                <BsGripVertical className={"me-2 fs-3"}/><MdAssignment className={"text-success"}/>
                                <div className={"flex-grow-1 wd-margin-right-left"}>
                                    <a href={"#/Kambaz/Courses/1234/Assignments/123"}
                                       className={"wd-assignment-link"}>
                                        A2 - CSS + BOOTSTRAP
                                    </a>
                                    <div className={"wd-assignment-details text-muted small mt-1"}>
                                        <span>
                                            <span className={"text-danger"}>Multiple Modules </span>
                                            <span><b>| Not Available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
                                        </span>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className={"wd-assign p-3 ps-1"}>
                            <div className={"d-flex align-items-center"}>
                                <BsGripVertical className={"me-2 fs-3"}/><MdAssignment className={"text-success"}/>
                                <div className={"flex-grow-1 wd-margin-right-left"}>
                                    <a href={"#/Kambaz/Courses/1234/Assignments/123"}
                                       className={"wd-assignment-link"}>
                                        A3 - JAVASCRIPT + REACT
                                    </a>
                                    <div className={"wd-assignment-details text-muted small mt-1"}>
                                        <span>
                                            <span className={"text-danger"}>Multiple Modules </span>
                                            <span><b>| Not Available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
                                        </span>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}