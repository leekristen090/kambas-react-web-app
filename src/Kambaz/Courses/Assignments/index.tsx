import AssignmentControls from "./AssignmentControls.tsx";
import {ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { MdAssignment } from "react-icons/md";
import {useParams} from "react-router";
import AuthCheck from "../../Account/AuthCheck.tsx";
//import * as db from "../../Database";
import AssignControl from "./AssignControl.tsx";
import {deleteAssignment, setAssignments} from "./reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import * as coursesClient from "../client.ts";
import {useEffect} from "react";
import * as assignmentsClient from "../Assignments/client.ts";

export default function Assignments() {
    const { cid } = useParams();
    // const assignments = db.assignments;
    const {assignments} = useSelector((state: any) => state.assignmentReducer);
    const {isFaculty} = AuthCheck();
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    const deleteAssignmentForCourse = async (assignmentId: string) => {
        if (!cid) return;
        try {
            await assignmentsClient.deleteAssignmentForCourse(cid, assignmentId);
            dispatch(deleteAssignment(assignmentId));
            await fetchAssignments();
        } catch (error) {
            console.error("Failed to delete assignment:", error);
        }
    };
    useEffect(() => {
        fetchAssignments();
    }, []);
    return (
        <div id={"wd-assignments"}>
            <AssignmentControls />
            <br /><br /><br /><br />
            <ListGroup className={"rounded-0"} id={"wd-assignments"}>
                <ListGroup.Item className={"wd-module p-0 mb-5 fs-5 border-gray"}>
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        {isFaculty && <><BsGripVertical className={"me-2 fs-3"} /></>}
                        ASSIGNMENTS
                        {isFaculty && <><AssignmentControlButtons /></>}

                    </div>
                    {assignments
                        // .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) =>(
                        <ListGroup className={"wd-assignment rounded-0"}>
                            <ListGroup.Item className={"wd-assign p-3 ps-1"}>
                                <div className={"d-flex align-items-center"}>
                                    {isFaculty && <><BsGripVertical className={"me-2 fs-3"} /></>}
                                    <MdAssignment className={"text-success"}/>
                                    <div className={"flex-grow-1 wd-margin-right-left"}>
                                        <a className={"wd-assignment-link"}
                                           href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                    </div>
                                    {isFaculty && <>
                                        <AssignControl assignmentId={assignment._id}
                                                       deleteAssignment={(assignmentId) =>
                                                           deleteAssignmentForCourse(assignmentId)}  />
                                    </>
                                    }
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}