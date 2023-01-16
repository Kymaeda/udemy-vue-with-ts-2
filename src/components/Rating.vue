<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isActiveBtn = ref<string>(props.modelValue)
const activate = (btnName: string) => {
  isActiveBtn.value = btnName
  emit('update:modelValue', isActiveBtn.value)
}
</script>

<template>
  <ul>
    <li><button @click="activate('bad')" :class="{ active: isActiveBtn === 'bad' }" type="button">Bad</button></li>
    <li><button @click="activate('good')" :class="{ active: isActiveBtn === 'good' }" type="button">Good</button></li>
    <li><button @click="activate('great')" :class="{ active: isActiveBtn === 'great' }" type="button">Great</button></li>
  </ul>
</template>

<style scoped>
button {
  border-radius: 0%;
  background-color: lightgray;
  color: black;
}

li {
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem;
  border: solid 1px gray;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  background-color: beige;
}
</style>
