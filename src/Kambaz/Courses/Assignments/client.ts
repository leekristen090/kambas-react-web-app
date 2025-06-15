import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({withCredentials: true});

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};
export const updateAssignmentForCourse = async (courseId: string, assignmentId: string, assignment: any) => {
    const {data} = await axiosWithCredentials.put(`${COURSES_API}/${courseId}/assignments/${assignmentId}`, assignment);
    return data;
};
export const deleteAssignmentForCourse = async (courseId: string, assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};
export const findAssignmentById = async (courseId: string, assignmentId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
};