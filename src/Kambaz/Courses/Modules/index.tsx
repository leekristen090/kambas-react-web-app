import ModulesControls from "./ModulesControls.tsx";
import {FormControl, ListGroup} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons.tsx";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setModules, addModule, deleteModule, editModule, updateModule} from "./reducer.ts";
import AuthCheck from "../../Account/AuthCheck.tsx";
import * as coursesClient from "../client.ts";
import * as modulesClient from "../Modules/client.ts";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const {isFaculty} = AuthCheck();
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };

    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse} />
            <br /><br /><br /><br />
            <ListGroup className={"rounded-0"} id={"wd-modules"}>
                {modules
                    // .filter((module: any) => module.course === cid)
                    .map((module: any) => (
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
                                             onChange={(e) =>saveModule({...module, name: e.target.value})
                                    // (e) =>
                                    //              dispatch(updateModule({...module, name: e.target.value}))
                                }
                                             onKeyDown={(e) => {
                                                 if (e.key === "Enter") {
                                                     saveModule({ ...module, editing: false });
                                                 }
                                             }}
                                             defaultValue={module.name} />
                            )}
                            <ModuleControlButtons moduleId={module._id}
                                                  deleteModule={(moduleId) => removeModule(moduleId)}
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