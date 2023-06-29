for (var k = 0; k < 10; k++) {
  console.log("Number", k);
}
var h = 0;
do {
  console.log(h);
  h++;
} while (h < 10) {
  console.log("This Is Do", h);
}
var str = ["kasra", "ali", "mohamad"];
for (var itt of str) {
  console.log(itt);
}
var i = 0;
for (var itt2 of str[i]) {
  console.log(itt2);
}
var obj = {
  obj1: "Kasra",
  obj2: "ali",
  obj3: 10
};
for (var showp in obj) {
  console.log(showp, obj[showp]);
}
console.warn("obj4" in obj);
console.clear();
function sum(a = 0, b = 0, c = 0) {
  var result = a + b + c;
  return result;
};
console.log(sum(10, 10));
console.log(sum(10, 10, 10));
console.log(sum(10));
console.log(null ?? 0, undefined ?? false);