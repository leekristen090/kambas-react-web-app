import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}`, {userId, courseId});
    return response.data;
};
export const unenrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};
export const fetchUserEnrollments = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/users/${userId}`);
    return response.data;
};
// export const fetchCourseEnrollments = async (courseId: string) => {
//     const response = await axios.get(`${ENROLLMENTS_API}/courses/${courseId}`);
//     return response.data;
// };