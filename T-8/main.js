function Person(name, family, age) {
  this.name = name;
  this.family = family;
  this.age = age;
  this.getFullName = function () {
    return this.name + " " + this.family;
  };
  return console.log("Ok");
};
var Kasra = new Person("Kasra", "Hosseini", 28);
console.log(Kasra);
console.log(Kasra.getFullName());
Person("ali", "ali", 10);
console.log(Kasra instanceof (Person));
var numbers = [5, 10, 15, 20, 25, 30];
var max = Math.max.apply({}, numbers);
var min = Math.min.apply(null, numbers);
console.log(max);
console.log(min);
function welcoming(word1, word2) {
  console.log(this);
  console.log(word1, word2, this.firstname, this.lastname);
};
var kasra = {
  firstname: "kasra",
  lastname: "Hosseini"
};
var newWlecome = welcoming.bind(kasra, "Hi", "MR");
newWlecome();
var obj1 = {
  a: 10,
  b: 20
};
var obj2 = {
  c: 30,
  b: 50
};
var obj3 = Object.assign({}, obj2, obj1);
console.log(obj3);
var person = {
  name: "Kasra",
  family: "Hosseini",
  age: 28,
  FullName: function () {
    console.log(this.name + " " + this.family);
  },
  birthday: new Date()
};
console.log(person);
console.log(typeof (person));
var Newperson = JSON.stringify(person);
console.log(Newperson);
var OtherPerson = JSON.parse(Newperson);
console.log(OtherPerson);
console.log(person === OtherPerson);
console.log(person === Newperson);