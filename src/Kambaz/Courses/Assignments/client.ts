import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};
export const updateAssignmentForCourse = async (courseId: string, assignmentId: string, assignment: any) => {
    const {data} = await axios.put(`${COURSES_API}/${courseId}/assignments/${assignmentId}`, assignment);
    return data;
};
export const deleteAssignmentForCourse = async (courseId: string, assignmentId: string) => {
    await axios.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
};
export const findAssignmentById = async (courseId: string, assignmentId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};