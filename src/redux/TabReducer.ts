import { CHANGE_TAB } from '../constants/ReduxConstants';
import { Action, TabState } from '../models/ReduxModels';

const initialState: TabState = {
  selectedTab: 0
};

export const TabReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
    console.log(payload);
  switch (type) {
    case CHANGE_TAB:
      return {
        ...state,
        selectedTab: payload.selectedTab,
      };
    default:
      return { ...state };
  }
};
