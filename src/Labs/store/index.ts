import {configureStore} from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer.ts";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer.tsx";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer.tsx";

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
    },
});
export default store;