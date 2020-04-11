// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   canFight: boolean;
//   role: [number, string];
//   //above tells typescript exactly what you want in the array
// } = {
//   name: "Dan Foord",
//   age: 32,
//   hobbies: ["wanking", "stupid opinions", "being a walking joke"],
//   canFight: false,
//   role: [9, "podiartist"]
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Dan Foord",
  age: 32,
  hobbies: ["wanking", "stupid opinions", "being a walking joke"],
  canFight: false,
  role: [9, "podiartist"],
  otherRole: Role.ADMIN
};

let favouriteActivities: string[];
favouriteActivities = ["wanking", "stupid opinions", "being a walking joke"];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

//object types in TS have key "Type" pairs
// const person: {
//   name: string;
//   age: number;
// }
// string|number[] can be 2 numbers, 2 strings or both
