//import {assignments} from "../../Database";
import { v4 as uuidv4 } from "uuid";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            //state.assignments = action.payload;
            return {...state, assignments: action.payload};
        },
        addAssignment: (state, {payload: assignment}) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description || "",
                points: assignment.points || 100,
                dueDate: assignment.dueDate || "",
                availableFromDate: assignment.availableFromDate || "",
                availableUntilDate: assignment.availableUntilDate || "",
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
    },
});
export const {addAssignment, deleteAssignment, updateAssignment, setAssignments} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;