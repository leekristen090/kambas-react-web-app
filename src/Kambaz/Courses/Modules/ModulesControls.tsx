import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { RxCircleBackslash } from "react-icons/rx";
import {useState} from "react";
import ModuleEditor from "./ModuleEditor.tsx";
import AuthCheck from "../../Account/AuthCheck.tsx";

export default function ModulesControls(
    {moduleName, setModuleName, addModule}: {moduleName: string; setModuleName: (title: string) => void; addModule: () => void;}) {
    const [show, setShow] = useState(false);
    const handleClose= () => setShow(false);
    const handleShow = () => setShow(true);
    const {isFaculty} = AuthCheck();
    return (
        <div id={"wd-modules-controls"} className={"text-nowrap"}>
            {isFaculty &&
                <>
                    <Button variant={"danger"} onClick={handleShow} size={"lg"} className={"me-1 float-end"}
                            id={"wd-add-module-btn"}>
                        <FaPlus className={"position-relative me-2"} style={{ bottom: "1px" }} />
                        Module
                    </Button>
                    <Dropdown className={"float-end me-2"}>
                        <Dropdown.Toggle variant={"secondary"} size={"lg"} id={"wd-publish-all-btn"}>
                            <GreenCheckmark /> Publish All
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item id={"wd-publish-all"}>
                                <GreenCheckmark /> Publish All
                            </Dropdown.Item>
                            <Dropdown.Item id={"wd-publish-all-modules-and-items"}>
                                <GreenCheckmark /> Publish all modules and items
                            </Dropdown.Item>
                            <Dropdown.Item id={"wd-publish-modules-only"}>
                                <GreenCheckmark /> Publish modules only
                            </Dropdown.Item>
                            <Dropdown.Item id={"wd-unpublish-all-modules-and-items"}>
                                <RxCircleBackslash /> Unpublish All Modules and Items
                            </Dropdown.Item>
                            <Dropdown.Item id={"wd-unpublish-modules-only"}>
                                <RxCircleBackslash /> Unpublish Modules Only
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </>
            }
            <Button variant={"secondary"} size={"lg"} className={"me-1 float-end"}
                    id={"wd-view-progress-btn"}>
                View Progress
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"me-1 float-end"}
                    id={"wd-collapse-all-btn"}>
                Collapse All
            </Button>
            <ModuleEditor show={show} handleClose={handleClose} dialogTitle={"Add Module"}
                          moduleName={moduleName} setModuleName={setModuleName}
                          addModule={addModule} />
        </div>
    );}
