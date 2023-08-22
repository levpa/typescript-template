"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADM";
    Role["READ_ONLY"] = "RO";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
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
