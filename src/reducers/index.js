import {combineReducers} from "redux";
import {reducer as formReducers} from "redux-form";
import messageReducer from "./messageReducer";
import profileGet from "./profileGet";

export default combineReducers({
form:formReducers,
message:messageReducer,
profileGet:profileGet
});