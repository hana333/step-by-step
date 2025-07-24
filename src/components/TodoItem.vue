<template>
  <li :key="todo.id" class="flex justify-between items-center py-2 border-b">
    <label class="flex items-center gap-2">
      <input type="checkbox" v-model="todo.completed" @change="onToggle(todo)" />
      <span :class="{ 'line-through text-gray-400': todo.completed }">{{ todo.title }}</span>
    </label>
    <button @click="$emit('delete', todo.id)" class="text-red-500">删除</button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'delete'])
const onToggle = (todo) => {
  emit('toggle', { ...todo, completed: !todo.completed })
}
</script>
