enum Role {
  ADMIN = 'ADM',
  READ_ONLY = 'RO',
  AUTHOR = 'AUTHOR'
}

const person = {
  name: "Lev's name",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};
for (const hobby in person.hobbies) {
  console.log(person.hobbies[hobby]);
}

if (person.role === Role.ADMIN) {
  console.log(Role.ADMIN);
}
