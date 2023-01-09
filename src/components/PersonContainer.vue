<script setup lang="ts">
import PersonForm from './PersonForm.vue';
import PersonList from './PersonList.vue';
import { ref, Ref } from 'vue';

interface Person {
  id: number,
  name: string,
  age: number,
}

const persons: Ref<Person[]> = ref([]);
const addPerson = (person: Person) => {
  persons.value.push(person)
}

const removePerson = (person_id: number) => {
  console.log('person_id', person_id)
  persons.value = persons.value.filter(person => person.id != person_id)
}
</script>

<template>
  <div class="person_container">
    <h1>Container</h1>

    <PersonForm @submit="addPerson"/>
    <PersonList :persons="persons" @remove="removePerson" />
  </div>
</template>

<style scoped></style>
