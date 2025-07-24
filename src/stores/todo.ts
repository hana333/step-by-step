// src/stores/todo.js
import { defineStore } from 'pinia'
import { getTodos, addTodo, updateTodo, deleteTodo } from '@/api/todo'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTodos() {
      this.loading = true
      try {
        const res = await getTodos()
        this.todos = res || []
      } catch (err) {
        this.err = (err as Error).message
      } finally {
        this.loading = false
      }
    },

    async addNewTodo(content) {
      try {
        const res = await addTodo({ ...content })
        this.todos.push(res)
        await getTodos()
      } catch (err) {
        console.error('添加失败', err)
      }
    },

    async deleteTodoById(id) {
      try {
        await deleteTodo(id)
        this.todos = this.todos.filter((t) => t.id !== id)
        await getTodos()
      } catch (err) {
        console.error('删除失败', err)
      }
    },

    async updateTodoStatus(todo) {
      console.log('todo', todo)

      try {
        await updateTodo(todo.id, { ...todo, completed: !todo.completed })
        const index = this.todos.findIndex((t) => t.id === todo.id)
        if (index !== -1) this.todos[index] = { ...todo }
        console.log('this.todo', this.todos)

        await getTodos()
      } catch (err) {
        console.error('更新失败', err)
      }
    },
  },
})
