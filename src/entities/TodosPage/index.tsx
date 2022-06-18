import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Pagination from '../../shared/Pagination';
import { fetchTodos } from '../../store/pages/TodosPage/async-actions';
import { store } from '../../store/rootReducer';
import TodosPageComponent from './components/TodosPageComponent';

const TodosPage = () => {
  const ITEMS_LIMIT = 5;
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    if (!search) {
      navigate('?page=1');
    }
  }, [navigate, search]);

  const { todosData, error, loading } = useAppSelector(store);

  return (
    <>
      <TodosPageComponent />
      <Pagination />
    </>
  );
};

export default TodosPage;
