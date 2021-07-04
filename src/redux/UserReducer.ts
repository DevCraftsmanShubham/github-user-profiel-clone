import { STORE_USER_DETAILS } from '../constants/ReduxConstants';
import { Action } from '../models/ReduxModels';

const initialState = {};

const UserReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case STORE_USER_DETAILS:
      return {
        ...state,
        data: payload,
      };

    default:
      return { ...state };
  }
};

export default UserReducer;
