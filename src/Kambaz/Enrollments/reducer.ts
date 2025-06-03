import {enrollments} from "../Database";
import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enrollCourse: (state, {payload}) => {
            const {userId, courseId} = payload;
            const exists = state.enrollments.some(
                (e: any) => e.user === userId && e.course === courseId
            );
            if (!exists) {
                const newEnrollment = {
                    _id: uuidv4(),
                    user: userId,
                    course: courseId,
                }
                state.enrollments = [...state.enrollments, newEnrollment] as any;
            }
        },
        unenrollCourse: (state, { payload }) => {
            const { userId, courseId } = payload;
            state.enrollments = state.enrollments.filter(
                (e: any) => !(e.user === userId && e.course === courseId)
            );
        },
    },
});
export const {enrollCourse, unenrollCourse} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;