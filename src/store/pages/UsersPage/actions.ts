import { IUsers } from '../../../interfaces/IUsers';
import { IUsersDataAction } from './interfaces';

export const SET_USERS_DATA = 'SET_USERS_DATA';

export const setUsersDataAction = (payload: IUsers[]): IUsersDataAction => {
  return { type: SET_USERS_DATA, payload };
};
