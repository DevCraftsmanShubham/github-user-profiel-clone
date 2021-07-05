// tabs action

import { CHANGE_TAB, STORE_REPO_DATA, STORE_USER_DETAILS } from "../constants/ReduxConstants";
import actionCreator from "./ActionCreator";

const changeTab = actionCreator(CHANGE_TAB);
const storeUserDetails = actionCreator(STORE_USER_DETAILS);
const storeRepoData = actionCreator(STORE_REPO_DATA);

export { 
    changeTab,
    storeUserDetails,
    storeRepoData
}