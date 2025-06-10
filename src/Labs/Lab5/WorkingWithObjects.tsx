import {useState} from "react";
import {FormControl} from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "Learning NodeJS",
        description: "Learning how to create a NodeJS server",
        course: "1"
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
        <div id={"wd-working-with-objects"}>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id={"wd-retrieve-assignments"} className={"btn btn-primary"}
               href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id={"wd-retrieve-assignment-title"} className={"btn btn-primary"}
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Modifying Properties</h4>
            <a id={"wd-update-assignment-title"} className={"btn btn-primary float-end"}
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className={"w-75"} id={"wd-assignment-title"} defaultValue={assignment.title}
                         onChange={(e) => setAssignment({...assignment, title: e.target.value})} />
            <br />
            <a id={"wd-update-assignment-score"} className={"btn btn-primary float-end"}
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <FormControl className={"w-75"} id={"wd-update-assignment-score"}
                         defaultValue={assignment.score} type={"number"}
                         onChange={(e) => setAssignment({...assignment, score: parseFloat(e.target.value)})} />
            <br/>
            <p>Completed status: {assignment.completed.toString()}</p>
            <input
                type={"checkbox"}
                id={"wd-assignment-complete-chkbx"}
                checked={assignment.completed}
                onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}
            />
            <label htmlFor={"wd-assignment-complete-chkbx"}>
                {/*{assignment.completed ? "Not Completed" : "Completed"}*/}
                Complete
            </label>
            <a id={"wd-update-assignment-status"} className={"btn btn-primary m-2"}
               href={`${ASSIGNMENT_API_URL}/complete/${assignment.completed}`} onClick={async () => {
                const response = await fetch(
                    `${ASSIGNMENT_API_URL}/complete/${assignment.completed}`
                );
                const updatedAssignment = await response.json();
                setAssignment(updatedAssignment);
            }}>
                Update Status
            </a>
            <hr />

            <h4>Module Stuff (On my own)</h4>
            <a id={"wd-retrieve-modules"} className={"btn btn-primary me-2"}
               href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <a id={"wd-retrieve-module-name"} className={"btn btn-primary me-2"}
               href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>
            <br /><br />
            <h5>Modifying a Module</h5>
            <a id={"wd-update-module-name"} className={"btn btn-primary float-end"}
               href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <FormControl className={"w-75"} id={"wd-module-name"} defaultValue={module.name}
                         onChange={(e) => setModule({...module, name: e.target.value})} />
            <hr/>
        </div>
    );
}