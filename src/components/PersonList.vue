<script setup lang="ts">
interface Person {
  id: number,
  name: string,
  age: number
}
interface Props {
  persons: Person[]
}

// NOTE: 直書きすると、↓。これを汎用的に使いまわせるようにinterfaceを使って書く
// defineProps<{ persons: [{ id: number, name: string, age: number }] }>()
defineProps<Props>()

const emit = defineEmits(['remove'])
const removePerson = (person_id: number) => {
  emit('remove', person_id)
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
          <button @click="removePerson(person.id)">Delete</button>
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
