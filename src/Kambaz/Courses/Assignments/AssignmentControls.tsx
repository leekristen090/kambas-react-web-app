import {Button, FormControl, InputGroup} from "react-bootstrap";
import {FaPlus} from "react-icons/fa6";
import {CiSearch} from "react-icons/ci";
import AuthCheck from "../../Account/AuthCheck.tsx";
import {useNavigate, useParams} from "react-router";

export default function AssignmentControls() {
    const {isFaculty} = AuthCheck();
    const navigate = useNavigate();
    const {cid} = useParams();
    return(
        <div id={"wd-assignment-controls"} className={"text-nowrap"}>
            <InputGroup className={"w-25 float-start"} id={"wd-assignment-search-box"}>
                <InputGroup.Text><CiSearch /></InputGroup.Text>
                <FormControl placeholder={"Search..."} />
            </InputGroup>
            {isFaculty &&
                <>
                    <Button variant={"danger"} size={"lg"} className={"me-1 float-end"}
                            id={"wd-add-assignment-btn"}
                            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
                        <FaPlus className={"position-relative me-2"} style={{ bottom: "1px" }} />
                        Assignment
                    </Button>
                    <Button variant={"secondary"} size={"lg"} className={"me-1 float-end"} id={"wd-add-group-btn"}>
                        <FaPlus className={"position-relative me-2"} style={{ bottom: "1px" }} />
                        Group
                    </Button>
                </>
            }
        </div>
    );
}