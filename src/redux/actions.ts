// tabs action

import { CHANGE_TAB, STORE_USER_DETAILS } from "../constants/ReduxConstants";
import actionCreator from "./ActionCreator";

const changeTab = actionCreator(CHANGE_TAB);
const storeUserDetails = actionCreator(STORE_USER_DETAILS);

export { 
    changeTab,
    storeUserDetails
}