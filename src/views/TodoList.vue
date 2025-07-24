<template>
  <div class="p-4 max-w-xl mx-auto">
    <h1 class="text-2xl mb-4 font-bold">📝 Todo List</h1>

    <TodoInput @add="addTodoItem" />
    <div v-if="todoStore.loading">加载中...</div>
    <ul v-else>
      <li v-if="!todoStore.todos.length" class="text-gray-500">暂无任务</li>
      <TodoItem
        v-else
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo(todo)"
        @delete="deleteTodoItem"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '../components/TodoItem.vue'
import TodoInput from '../components/TodoInput.vue'

const todoStore = useTodoStore()

const fetchTodos = async () => {
  try {
    await todoStore.fetchTodos()
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
}

const addTodoItem = async (title) => {
  await todoStore.addNewTodo({ title, completed: false })
}

const deleteTodoItem = async (id) => {
  await todoStore.deleteTodoById(id)
}

const toggleTodo = async (todo) => {
  await todoStore.updateTodoStatus(todo)
}

onMounted(fetchTodos)
</script>
