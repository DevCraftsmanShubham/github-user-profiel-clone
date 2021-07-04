import { combineReducers } from 'redux';
import { TabReducer } from './TabReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    tabs: TabReducer,
    user: UserReducer,
})

export default rootReducer;