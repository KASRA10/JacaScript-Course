// Arrow Function
// function sum(a, b) {
//   return a + b;
// };
// console.log(sum(5, 5));
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(5, 5));//10
const pow = a => a * a;
console.log(pow(2));//4
// const arr7 = [1, 2, 3, 4, 5, 6];
// const newArr1 = arr7.map(
//   function (el) {
//     return el * 2;
//   }
// );
// console.log(arr7);//[1, 2, 3, 4, 5, 6]
// console.log(newArr1);//[2, 4, 6, 8, 10, 12]
const arr7 = [1, 2, 3, 4, 5, 6];
const newArr2 = arr7.map(el => el * 2);
console.log(newArr2);//[2, 4, 6, 8, 10, 12]
const a = newArr2.map(el => console.log(el));
// 2
// 4
// 6
// 8
// 10
// 12
console.warn("We Must Not Use Arr.map As iterator, forEach is the correct way");
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 5));
const sub = (c, d) => c - d;
console.log(sub(10, 5));
const mul = (e, f) => e * f;
console.log(mul(2, 2));
const pow = g => g * g;
console.log(pow(10));
const whatNumber = h => (h % 2) ? "Odd" : "Even";
console.log(whatNumber(10));
console.log(whatNumber(13));
console.log(clg(10, 20));//20
const clg2 = (b, b) => b;
clg2(10, 20);//Error:  Duplicate parameter name not allowed in this context
// this
function func() {
  console.log("Top Level this", this);
  return {
    name: "kasra",
    normalFunction: function () {
      console.log(this);
    },
    arrowFunction: () => {
      console.log(this);
    }
  };
};
func();
const obj = func();
obj.normalFunction();
obj.arrowFunction();
function clg(a, a) {
  return a;
};
const newObject8 = {
  norm: obj.normalFunction,
  arr: obj.arrowFunction
};
console.log("-----------------------------------------");
newObject8.norm();//newObject8 function
newObject8.arr();//window
// this
function func() {
  console.log(this);
  return {
    name: "Kasra",
    normalFunc: function () {
      console.log(this);
    },
    arrFunc: () => {
      console.log(this);
    }
  };
};
const myObj = func();
myObj.normalFunc();
myObj.arrFunc();
const person = {
  name: "Hosseini",
  nickname: "K10"
};
console.log("------------------------");
const newfunc = func.call(person);
newfunc.normalFunc();
newfunc.arrFunc();

