import { combineReducers } from "redux";
import { characterReducer as characters } from "./characterReducer";

export default combineReducers({ characters });