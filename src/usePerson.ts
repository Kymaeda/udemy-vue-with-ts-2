import { ref } from "vue";

interface Person {
  id: number;
  name: string;
  age: number;
}

const defaultPersons = [
  { id: 1, name: 'kyohei maeda', age: 29 },
  { id: 2, name: 'sho tsunoda', age: 31 },
];

// export const persons = ref<Person[]>(defaultPersons);

// export const addPerson = (name: string, age: number) => {
//   const person = { id: Math.random(), name: name, age: age };
//   persons.value.push(person)
// }

// export const removePerson = (person_id: number) => {
//   persons.value = persons.value.filter((person) => person.id != person_id);
// }

export const persons = (() => {
  const persons = ref<Person[]>(defaultPersons);

  const addPerson = (name: string, age: number) => {
    const person = { id: Math.random(), name: name, age: age };
    persons.value.push(person);
  };

  const removePerson = (person_id: number) => {
    persons.value = persons.value.filter((person) => person.id != person_id);
  };

  return { persons, addPerson, removePerson };
})()

// type PersonTypes = typeof persons;

