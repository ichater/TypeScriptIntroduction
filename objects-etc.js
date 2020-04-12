"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Dan Foord",
    age: 32,
    hobbies: ["wanking", "stupid opinions", "being a walking joke"],
    canFight: false,
    role: [9, "podiartist"],
    otherRole: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = ["wanking", "stupid opinions", "being a walking joke"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
//object types in TS have key "Type" pairs
// const person: {
//   name: string;
//   age: number;
// }
// string|number[] can be 2 numbers, 2 strings or both
