import { combineReducers } from "redux";
import shoes from './shoe'
import auth from "./auth";
import cart from "./cart";

export default combineReducers({
    shoes:shoes,
    auth:auth,
    cart:cart
})