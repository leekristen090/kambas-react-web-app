import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { FaHouse } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { IoMegaphoneOutline } from "react-icons/io5";

export default function CourseStatus() {
    return (
        <div id={"wd-course-status"} style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className={"d-flex"}>
                <div className={"w-50 pe-1"}>
                    <Button variant={"secondary"} size={"lg"} className={"w-100 text-nowrap"}>
                        <MdDoNotDisturbAlt className={"me-2 fs-5"} />Unpublish
                    </Button>
                </div>
                <div className={"w-50"}>
                    <Button variant={"success"} size={"lg"} className={"w-100"}>
                        <FaCheckCircle className={"me-2 fs-5"} /> Publish
                    </Button>
                </div>
            </div>
            <br />

            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <BiImport className={"me-2 fs-5"}/>Import Existing Content
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <LiaFileImportSolid /> Import from Commons
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <FaHouse /> Choose Homepage
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <VscGraph /> View Course Screen
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <IoMegaphoneOutline /> New Announcement
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <VscGraph /> New Analytics
            </Button>
            <Button variant={"secondary"} size={"lg"} className={"w-100 mt-1 text-start"}>
                <FaBell /> View Course Notifications
            </Button>
        </div>
    );
}