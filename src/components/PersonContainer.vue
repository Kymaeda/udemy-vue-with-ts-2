<script setup lang="ts">
import PersonForm from './PersonForm.vue';
import PersonList from './PersonList.vue';
import { ref, Ref, computed, provide, onMounted } from 'vue';
import { persons, personKey } from './../usePerson'
import axios from 'axios'

const personsList = ref()
const isLoading = ref<boolean>(false)

onMounted(async () => {
  isLoading.value = true
  personsList.value = await axios.get('https://udemy-vue-with-ts-default-rtdb.firebaseio.com/persons.json')
  isLoading.value = false
  console.log(personsList.value)
})

// interface Person {
//   id: number,
//   name: string,
//   age: number,
// }

// const persons: Ref<Person[]> = ref([]);

// provide('persons', persons)
provide(personKey, persons)

// provide('addPerson', addPerson)
// provide('removePerson', removePerson)

// const removePerson = (person_id: number) => {
//   console.log('person_id', person_id)
//   persons.value = persons.value.filter(person => person.id != person_id)
// }

const isActiveTab = ref(1)
const activate = (tabNum: number) => {
  isActiveTab.value = tabNum
}
const currentComponent = computed(() => {
  switch (isActiveTab.value) {
    case 1:
      return PersonForm
    case 2:
      return PersonList
  }
})
</script>

<template>
  <div class="person_container">
    <h1>Container</h1>

    <button @click="activate(1)">Show Form</button>
    <button @click="activate(2)">Show List</button>

    <!-- <PersonForm @submit="addPerson"/> -->
    <!-- <PersonList :persons="persons" @remove="removePerson" /> -->

    <!-- NOTE: bindやイベントハンドラが同じでコンポーネントの中身が違うう物を切り替えるのに動的コンポーネントは使える -->
    <!-- <component :is="currentComponent" @submit="addPerson" ></component> -->

    <!-- <component :is="PersonForm" @submit="addPerson" ></component> -->
    <!-- <component :is="PersonList" :persons="persons" @remove="removePerson"></component> -->

    <PersonForm />
    <div v-if="isLoading">Loading...</div>
    <div v-else>{{ personsList }}</div>
    <PersonList />
  </div>
</template>

<style scoped></style>
