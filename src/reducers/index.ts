import { combineReducers } from "redux";
import sampleReducer from "../store/sampleReducer";

const rootReducer = combineReducers({
    sample: sampleReducer,
});

export default rootReducer;
