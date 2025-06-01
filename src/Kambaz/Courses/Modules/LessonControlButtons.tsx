import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark.tsx";
import AuthCheck from "../../Account/AuthCheck.tsx";

export default function LessonControlButtons() {
    const {isFaculty} = AuthCheck();
    return(
        <div className={"float-end"}>
            {isFaculty &&
                <>
                    <GreenCheckmark />
                    <IoEllipsisVertical className={"fs-4"} />
                </>
            }
        </div>
    );
}