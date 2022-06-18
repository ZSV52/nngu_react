import { $api } from '../../../api/axios-instance';

export const TodosService = {
  getTodos: () => $api.get('/todos'),
};
