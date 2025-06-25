import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import * as userClient from "../Account/client.ts";

export default function EnrollProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const navigate = useNavigate();
    const { cid } = useParams();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const checkEnrollment = async () => {
            try {
                // First check local state
                const localEnrolled = enrollments.some(
                    (e: any) => e.user === currentUser._id && e.course === cid
                );

                if (localEnrolled) {
                    setIsEnrolled(true);
                    return;
                }

                // If not found locally, verify with server
                const response = await userClient.findCoursesForUser(currentUser._id);
                const serverEnrolled = response.some((course: any) => course._id === cid);
                setIsEnrolled(serverEnrolled);

                if (!serverEnrolled) {
                    setShowModal(true);
                }
            } catch (error) {
                console.error("Enrollment check failed:", error);
                setShowModal(true);
            } finally {
                setLoading(false);
            }
        };

        if (currentUser && cid) {
            checkEnrollment();
        }
    }, [currentUser?._id, cid, enrollments]);

    const handleClose = () => {
        setShowModal(false);
        navigate("/Kambaz/Dashboard");
    };

    if (loading) {
        return <div>Loading...</div>; // Or a spinner
    }

    if (!isEnrolled) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Access Denied</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You are not enrolled in this course. Please enroll first to view content.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back to Dashboard
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return children;
}