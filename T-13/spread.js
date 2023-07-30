const arr9 = [1, 2, 3];
const arr10 = [7, 8, 9];
const arr11 = [...arr9, 4, 5, 6, ...arr10];
console.log(arr11);//[1, 2, 3, 4, 5, 6, 7, 8, 9]
const person1 = {
  name: "Kasra",
  Family: "Hosseini"
};
const person2 = {
  name: "taghi",
  Family: "hajipoor",
  age: 28
};
// const newPerson = Object.assign({}, person1, person2); console.log(newPerson);//{name: 'taghi', Family: 'hajipoor', age: 28}
const newPerson = { ...person1, ...person2, job: "web - develper" };
console.log(newPerson);//{name: 'taghi', Family: 'hajipoor', age: 28}
const nums = [10, 9, 8, 7, 73, 100, 110];
console.log(Math.max(...nums));//110
console.log(Math.min(...nums));//7
const arr12 = [1, 2, 3];
const obj12 = { ...arr12 };
console.log(obj12);//{0: 1, 1: 2, 2: 3}
const Eobj = {
  first: 12,
  second: 13
}
// ...rest
const arr13 = [...Eobj];//Eobj is not iterable
const sum = (...rest) => {
  var result = 0;
  for (var i = 0; i < rest.length; i++) {
    result += rest[i];
  }
  return result;
};
console.log(sum(5, 5, 5)); // Output: 15
const individual = {
  firstName: "Kasra",
  lastName: "Hosseini",
  age: 28
};
const { firstName: myFirstName, lastName, job: job = "developer", ...rest } = individual;
console.log(myFirstName, lastName, job, 29);
const arr13 = [1, 2, 3, 4, 5];
const [index0, index1, index2, ...rest] = arr13;
console.log(index0, index1, index2, rest);//1 2 3 [4, 5]
let a = 10;
let b = 7;
console.log(a, b);//10 7
;[b, a] = [a, b];
console.log(a, b);//7 10