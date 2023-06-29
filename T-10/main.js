var arr = Array.from([10, 20, 30], function (el, index) {
  console.log(el, index);
  return el *= 2
});
console.log(arr);
var arr = [2, 4, 6, 5, 8, 10];
var allEven = arr.every(
  function (el, index, array) {
    console.log(el, index, array);
    return !(el % 2);
  }
);
console.log(allEven);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = arr.filter(function (el) {
  return !(el % 2);
});
var odd = arr.filter(function (el) {
  return el % 2;
});
console.log(even);
console.log(odd);
var myArr = [10, 20, 30, 40, 50];
var result = myArr.reduce(function (acc, el) {
  console.log(acc, el);
  return acc + el
}, 0);
console.log(result);