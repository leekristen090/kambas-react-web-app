import {BsPlus} from "react-icons/bs";
import {IoEllipsisVertical} from "react-icons/io5";

export default function AssignmentControlButtons() {
    return (
        <div className={"float-end"}>
            40% of Total
            {/*<p className={"wd-border-solid wd-border-thin"}>40% of Total</p>*/}
            <BsPlus />
            <IoEllipsisVertical className={"fs-4"} />

        </div>
    );
}