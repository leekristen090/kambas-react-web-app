import ModulesControls from "./ModulesControls.tsx";
import {FormControl, ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons.tsx";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import {useParams} from "react-router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addModule, deleteModule, editModule, updateModule} from "./reducer.ts";
import AuthCheck from "../../Account/AuthCheck.tsx";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const {isFaculty} = AuthCheck();

    return (
        <div>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
                dispatch(addModule({name: moduleName, course: cid}));
                setModuleName("");
            }} />
            <br /><br /><br /><br />
            <ListGroup className={"rounded-0"} id={"wd-modules"}>
                {modules.filter((module: any) => module.course === cid).map((module: any) => (
                    <ListGroup.Item className={"wd-module p-0 mb-5 fs-5 border-gray"}>
                        <div className={"wd-title p-3 ps-2 bg-secondary"}>
                            {isFaculty &&
                                <>
                                    <BsGripVertical className={"me-2 fs-3"} />
                                </>
                            }
                            {!module.editing && module.name}
                            {module.editing && (
                                <FormControl className={"w-50 d-inline-block"}
                                             onChange={(e) => dispatch(updateModule({...module, name: e.target.value}))}
                                             onKeyDown={(e) => {
                                                 if (e.key === "Enter") {
                                                     dispatch(updateModule({...module, editing: false}));
                                                 }
                                             }}
                                             defaultValue={module.name} />
                            )}
                            <ModuleControlButtons moduleId={module._id} deleteModule={(moduleId) => {dispatch(deleteModule(moduleId));}}
                                                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
                        </div>
                        {module.lessons && (
                            <ListGroup className={"wd-lessons rounded-0"}>
                                {module.lessons.map((lesson: any) => (
                                    <ListGroup.Item className={"wd-lesson p-3 ps-1"}>
                                        {isFaculty &&
                                            <>
                                                <BsGripVertical className={"me-2 fs-3"} />
                                            </>
                                        }
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>

    );
}