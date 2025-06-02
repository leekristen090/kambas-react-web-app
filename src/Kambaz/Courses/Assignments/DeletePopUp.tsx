import {Button, Modal} from "react-bootstrap";

export default function DeletePopUp({show, handleClose, dialogTitle, deleteAssignment} :{
    show: boolean; handleClose: () => void; dialogTitle: string;
    deleteAssignment: () => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant={"secondary"} className={"me-1"} onClick={handleClose}>Cancel</Button>
                <Button variant={"danger"} className={"me-1"} onClick={() => {deleteAssignment()}}>
                    Yes
                </Button>
            </Modal.Body>
        </Modal>
    );
}