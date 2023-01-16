<script setup lang="ts">
import { inject } from 'vue';
import Button from './Button.vue'
import { personKey } from './../usePerson'

// キーがundefinedの可能性があり、型エラーになるので、undefinedでない場合のみinjectを使うようにする
const state = inject(personKey)
if (!state) {
  throw new Error('key is undefined')
}
const { persons, removePerson: deletePerson } = state

// interface Person {
//   id: number,
//   name: string,
//   age: number
// }
// interface Props {
//   persons: Person[]
// }

// // NOTE: 直書きすると、↓。これを汎用的に使いまわせるようにinterfaceを使って書く
// // defineProps<{ persons: [{ id: number, name: string, age: number }] }>()
// defineProps<Props>()

// const emit = defineEmits(['remove'])
const removePerson = (person_id: number) => {
  if (confirm('削除しますか？')) {
    deletePerson(person_id)
  }
}
</script>

<template>
  <div>
    <h1>Persons</h1>
    <div>
      <ul class="person-list">
        <li v-for="person in persons" :key="person.id" class="person">
          <p class="person-name">{{ person.name }}</p>
          <p class="person-age">{{ person.age }}</p>
          <p class="person-name">{{ person.rating }}</p>
          <button @click="removePerson(person.id)">Delete</button>
          <Button>Delete</Button>
          <Button></Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.person {
  list-style: none;
  display: flex;
  justify-content: center;
}

.person-name {
  width: 20%;
}
</style>
