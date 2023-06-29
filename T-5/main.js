function SeyHello() {
  console.warn("Hellow");
};
SeyHello();
SeyHello();
SeyHello();
console.clear();
function oddOReven(num) {
  return console.log(num), typeof num === "number" ? ((num % 2) ? "odd" : "even") : console.log("Not A Number");
};
console.log(oddOReven(10));
console.log(oddOReven("kasra"));
console.clear();
var noop = function () { };
function jam(a, b) {
  return a + b;
};
function tafrigh(a, b) {
  return a - b;
};
function execute(a, b, cb = noop) {
  return cb(a, b);
};
console.log(execute(10, 2, jam));
console.log(execute(10, 2, tafrigh));
console.log(execute(10, 10, function (a, b) { return a * b }));
setTimeout(function () { console.log("kasra") }, 1000);
setInterval(function () { console.log("kasra") }, 1000);
var i = 0;
var intervalID = setInterval(function () { console.log(i++) }, 1000);
console.log("id", intervalID);
setTimeout(function () {
  clearInterval(intervalID);
}, 10000);