import { IUsers } from '../../../interfaces/IUsers';

export interface IUsersState {
  usersData: IUsers[];
  loading: boolean;
  error: string | null;
}

export interface IUsersDataAction {
  type: string;
  payload: IUsers[];
}
