import { combineReducers } from 'redux';
import { TabReducer } from './TabReducer';
import UserReducer from './UserReducer';
import { RepoReducer } from './RepoReducer';

const rootReducer = combineReducers({
  tabs: TabReducer,
  user: UserReducer,
  repos: RepoReducer,
});

export default rootReducer;
