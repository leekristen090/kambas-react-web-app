import AssignmentControls from "./AssignmentControls.tsx";
import {ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { MdAssignment } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import {Link, useParams} from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id={"wd-assignments"}>
            <AssignmentControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className={"wd-module p-0 mb-5 fs-5 border-gray"}>
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className={"me-2 fs-3"} /> ASSIGNMENTS <AssignmentControlButtons />
                    </div>
                    {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) =>(
                        <ListGroup className={"wd-assignment rounded-0"}>
                            <ListGroup.Item className={"wd-assign p-3 ps-1"}>
                                <div className={"d-flex align-items-center"}>
                                    <BsGripVertical className={"me-2 fs-3"}/><MdAssignment className={"text-success"}/>
                                    <div className={"flex-grow-1 wd-margin-right-left"}>
                                        <a className={"wd-assignment-link"}
                                           href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                    </div>
                                    <LessonControlButtons />
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}