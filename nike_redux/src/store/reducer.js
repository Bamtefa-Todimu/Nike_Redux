import { combineReducers } from "redux";
import shoes from './shoe'
import auth from "./auth";

export default combineReducers({
    shoes:shoes,
    auth:auth
})