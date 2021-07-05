import {  STORE_REPO_DATA } from '../constants/ReduxConstants';
import { Action } from '../models/ReduxModels';

const initialState = {

};

export const RepoReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
   
  switch (type) {
    case STORE_REPO_DATA:
      return {
        ...state,
        data: payload
      };

    default:
      return { ...state };
  }
};
