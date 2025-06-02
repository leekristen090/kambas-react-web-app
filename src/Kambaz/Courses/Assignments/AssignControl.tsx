import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark.tsx";
import AuthCheck from "../../Account/AuthCheck.tsx";
import {FaTrash} from "react-icons/fa";
import DeletePopUp from "./DeletePopUp.tsx";
import {useState} from "react";

export default function AssignControl({assignmentId, deleteAssignment}: {
    assignmentId: string,
    deleteAssignment: (assignmentId: string) => void;
}) {
    const {isFaculty} = AuthCheck();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        deleteAssignment(assignmentId);
        handleClose();
    };
    return(
        <div className={"float-end"}>
            {isFaculty &&
                <>
                    <FaTrash className={"text-danger me-3 mb-1"} onClick={handleShow}/>
                    <GreenCheckmark />
                    <IoEllipsisVertical className={"fs-4"} />
                    <DeletePopUp show={show} handleClose={handleClose}
                                 dialogTitle={"Are you sure you want to remove the assignment?"}
                                 deleteAssignment={handleDelete}/>
                </>
            }
        </div>
    );
}