import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark.tsx";

export default function ModuleControlButtons() {
    return(
        <div className={"float-end"}>
            <GreenCheckmark />
            <BsPlus />
            <IoEllipsisVertical className={"fs-4"} />
        </div>
    );
}