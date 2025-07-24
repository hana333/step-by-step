<template>
  <div class="flex mb-4">
    <input
      v-model="input"
      v-focus
      @keyup.enter="handleAdd"
      type="text"
      class="flex-1 p-2 border rounded"
      placeholder="添加任务..."
    />
    <button @click="handleAdd" class="ml-2 px-4 py-2 bg-blue-500 text-white rounded">添加</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useAttrs, defineEmits } from 'vue'

const emit = defineEmits(['add'])
const input = ref('')

const handleAdd = () => {
  const value = input.value.trim()
  if (!value) return
  emit('add', value)
  input.value = ''
}
</script>
