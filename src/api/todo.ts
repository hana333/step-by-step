import request from './index'

export const getTodos = () => {
  return request.get('/todo/list')
}

export const addTodo = (params: { title: String; completed: boolean }) => {
  return request.post('/todo/add', params)
}

export const deleteTodo = (id: number) => {
  return request.delete(`/todo/delete/${id}`)
}

export const updateTodo = (
  id: number,
  params: {
    title: String
    completed: boolean
  },
) => {
  return request.post(`/todo/update/${id}`, params)
}
