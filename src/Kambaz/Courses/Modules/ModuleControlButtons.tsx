import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark.tsx";
import {FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import AuthCheck from "../../Account/AuthCheck.tsx";

export default function ModuleControlButtons(
    {moduleId, deleteModule, editModule}: {
        moduleId: string;
        deleteModule: (moduleId: string) => void;
        editModule: (moduleId: string) => void;
    }) {
    const {isFaculty} = AuthCheck();
    return(
        <div className={"float-end"}>
            {isFaculty &&
                <>
                    <FaPencil onClick={() => editModule(moduleId)} className={"text-primary me-3"} />
                    <FaTrash className={"text-danger me-3 mb-1"} onClick={() => deleteModule(moduleId)} />
                    <GreenCheckmark />
                    <BsPlus className={"fs-1"} />
                    <IoEllipsisVertical className={"fs-4"} />
                </>
            }
        </div>
    );
}