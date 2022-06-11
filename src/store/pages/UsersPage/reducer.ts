import { SET_USERS_DATA } from './actions';
import { IUsersDataAction, IUsersState } from './interfaces';

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};

export const UsersReducer = (
  state: IUsersState = initialState,
  action: IUsersDataAction
): IUsersState => {
  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, usersData: action.payload };
    default:
      return state;
  }
};
