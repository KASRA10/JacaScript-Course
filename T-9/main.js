var a = Object.create({ name: "Kasra" });
console.log(a);
var b = Object.create({ name: "Kasra", FirstName: "Kasra" });
console.log(b);
var c = Object.create(null);
console.log(c);
var g = {
  FirstName: "Kasra"
};
console.log(g);
Object.defineProperty(g, "age", {
  value: 28,
  enumerable: true,
  configurable: false,
  writable: false
});
delete g["age"];
g["age"] = 10;
for (var key in g) {
  console.log(key, g[key]);
}
var k = {
  name: "Kasra"
};
k["Family"] = "Hosseini";
Object.defineProperty(k, "age", {
  value: 28,
  enumerable: true,
  configurable: false,
  writable: true
});
console.log(k["age"]);
Object.defineProperty(k, "GetFullName", {
  get: function () {
    console.log(k["name"] + " " + k.Family + " " + k['age']);
  },
  set: function () {
    console.warn("this is default values: ", k["name"] + " " + k.Family + " " + k['age']);
  }
});
k.GetFullName;
k.GetFullName = "Ali Aliii";
var cbj = {
  name: "Kasra"
};
Object.defineProperty(cbj, "age", {
  set: function (value) {
    this._age = +value;
  },
  get: function () {
    return this._age;
  }
});
cbj.age = "10";
console.log(typeof (cbj["age"]), cbj["age"]);
console.log(Object.getOwnPropertyDescriptor(cbj, "name"));
function* g() {
  yield 10;
  yield 20;
  yield 30;
  yield 40;
};