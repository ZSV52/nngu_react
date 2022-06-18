import { Dispatch } from 'redux';
import { IFetchTodosActions, TodosActionTypes } from './interfaces';
import { TodosService } from './todos-service';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<IFetchTodosActions>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await TodosService.getTodos();
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: TodosActionTypes.FETCH_TODOS_FAILURE, payload: 'Ошибка!' });
    }
  };
};
