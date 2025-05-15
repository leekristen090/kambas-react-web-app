import {Button, Form} from "react-bootstrap";
import {FaPlus} from "react-icons/fa6";

export default function AssignmentControls() {
    return(
        <div id={"wd-assignment-controls"} className={"text-nowrap"}>
            <Button variant={"danger"} size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant={"secondary"} size="lg" className="me-1 float-end" id="wd-add-group-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <Form className="me-1 float-end">
                <Form.Control type={"textarea"} placeholder={"Search.."} size={"lg"}/>
            </Form>
        </div>
    );
}