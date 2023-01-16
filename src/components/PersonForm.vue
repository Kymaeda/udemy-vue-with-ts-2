<script setup lang="ts">
import { ref, computed, inject, DirectiveBinding } from 'vue'
import { personKey } from './../usePerson'
import Rating from './Rating.vue';
import axios from 'axios'

const name = ref<string>('')
const age = ref<number>(0)
const inputName = ref()
const rating = ref('')

// const addPerson = inject('addPerson')
// const { addPerson } = inject('persons')
const state = inject(personKey)
if (!state) {
  throw new Error('key is undefined')
}
const { addPerson } = state

const submit = () => {
  axios.post('https://udemy-vue-with-ts-default-rtdb.firebaseio.com/persons.json', {
    name: name.value,
    age: age.value,
    rating: rating.value,
  })

  name.value = ''
  age.value = 0
  rating.value = ''
  inputName.value.focus()
}

const nameMaxLength = 15
const isValidName = computed(() => {
  return name.value.length <= nameMaxLength
})
const warningColor = computed(() => {
  return isValidName.value ? 'gray' : 'red'
})

// v-focusディレクティブを定義する場合、v始まりのパスカルケース
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus()

    if (binding.modifiers.alert) {
      el.style.backgroundColor ="yellow"
    }
  }
}
</script>

<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input">
        <p>name: </p>
        <input v-model="name" ref="inputName" class="input-name" v-focus />
      </div>
      <div class="input">
        <p>age: </p>
        <input v-model="age" type="number"/>
      </div>
    </div>
    <Rating v-model="rating"/>
    <button class="submit-btn" @click.prevent="submit" :disabled="!isValidName">post</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flexbox;
  flex-direction: column;
  width: 1280px;
  padding: 20px;
  border-radius: 5px;
  background-color: gray;
}
.input-container {
  margin-bottom: 10px;
}
.input {
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 35px;
}

.input span {
  font-weight: bold;
  font-size: 20px;
}

.input p {
  font-weight: bold;
  font-size: 20px;
  margin: 0 10px;
  line-height: 35px;
  width: 80px;
  text-align: right;
}

/* hegiht と line-heightの違いは？？？？インラインかブロックかの違い？ */
.input input {
  height: 35px;
  width: 200px;
  border-radius: 5px;
}

.input-name {
  background-color: v-bind(warningColor);
}

.submit-btn {
  width: 80px;
}
</style>
