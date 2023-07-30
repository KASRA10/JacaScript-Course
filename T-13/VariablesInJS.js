let a = 10;
a = 5;
console.log(a, "overWrite-let");
var b = 10;
var b = 20;
console.log(b, "reDeclare-var");
function exp() {
  var c = 10;
  console.log(c);
};
exp();
console.log(c);
// Error: c is not defined
function exp2() {
  {
    let d = 10;
    console.log(d);
  }
  console.log(d);
};
exp2();
// exp2 does not access to variable d because it defined by let in the {}
function exp3() {
  var e = 10;
  function extra(e) {
    return e + 1;
  };
  console.log(extra(e));
};
exp3();
// result is 11
function exp4() {
  {
    let e = 10;
    console.log(e);
  }
  function extra2(e) {
    return e + 1;
  };
  console.log(extra2(e));
};
exp4();
// result log = 10 but extra2 does not access to e
let global2 = "is not global";
var global = "Top level";
console.log(window.global);
// result is top level
console.log(window.global2);
// result is undefined because of let
console.log(f);
var f = "Defined";
//result is undefined-Hoisting
console.log(g);
let g = "Defined";
// result = Error => Cannot access 'g' before initialization
function myLoop() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    },
      1000);
  }
};
myLoop();
// result (5)5 after 1 second
function myLoop2() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function (j) {
      console.log(j);
    },
      1000,
      i);
  }
};
myLoop2();
// result 0 1 2 3 4
function myLoop3() {
  for (var i = 0; i < 5; i++) {
    ; (function (j) {
      setTimeout(function () {
        console.log(j);
      },
        1000);
    })(i);
  }
};
myLoop3();
// result 0 1 2 3 4
const a = "100";
console.log(a);
// a = "110";
console.log(a);//Error:  Assignment to constant variable.
const obj4 = {
  f: "f",
  h: "h"
};
console.log(obj4);
obj4["f"] = "New Alphabet 1";
obj4["h"] = "New Alphabet 2";
console.log(obj4);//It Is Work, Reference
const arr4 = ["list-1", "list-2"];
console.log(arr4);
arr4[1] = "new list-3";
console.log(arr4);//It Is Work, Reference
const name = "Kasra", family = "Hosseini";
console.log(`My Name Is ${name}
${family}`);
// My Name Is Kasra
//Hosseini
console.log(`hi ${(function () {
  return "HIIIIIIIIIII";
})()}`);