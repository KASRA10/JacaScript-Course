function func(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
var num5 = func(5);
console.log(num5);
var num10 = num5(10);
console.log(num10);
var num20 = num10(5);
console.log(num20);
function numbers() {
  var zoj = 0;
  var fard = 0;
  for (var i = 0; i < arguments.length; i++) {
    (arguments[i] % 2) ? fard++ : zoj++;
  }
  return console.log("zoj=", zoj, "fard=", fard);
}
numbers(10, 12, 20, 5, 7, 9);
function power(a = 0, b = 0) {
  if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
};
console.log(power(2, 3));