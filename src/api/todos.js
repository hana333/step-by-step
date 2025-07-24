import axios from 'axios';

const BASE_URL = '/api/todo';

export const getTodos = async () => {
  return axios.get(`${BASE_URL}/list`);
}

export const addTodo = async (params) => {
  return axios.post(`${BASE_URL}/add`, params);
}

export const updateTodo = async (id, params) => {
  return axios.post(`${BASE_URL}/update/${id}`, params);
}

export const deleteTodo = async (id) => {
  return axios.delete(`${BASE_URL}/delete/${id}`);
}

