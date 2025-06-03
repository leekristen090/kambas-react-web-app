import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";

export default function EnrollProtectedRoute({ children }: { children: any }) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments} = useSelector((state: any) => state.enrollmentReducer);
    const navigate = useNavigate();
    const {cid} = useParams();
    const isEnrolled = enrollments.some(
        (e: any) => e.user === currentUser._id && e.course === cid
    );
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (!isEnrolled) {
            setShowModal(true);
        }
    }, [isEnrolled]);
    const handleClose = () => {
        setShowModal(false);
        navigate("/Kambaz/Dashboard");
    }

    if (!isEnrolled) {
        return (
            <>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Access Denied</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You are not enrolled in this course. Please enroll first to view content.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={"secondary"} onClick={handleClose}>
                            Back to Dashboard
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    return children;

    //return isEnrolled ? children : <Navigate to={"/Kambaz/Dashboard"} />;
}