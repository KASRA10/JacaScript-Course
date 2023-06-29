var variable1 = "Name", variable2 = "Name2";
console.log(variable1, variable2);
console.log(Number.MAX_VALUE, typeof (Number.MAX_VALUE));
console.log(Number.MIN_VALUE, typeof (Number.MIN_VALUE));
console.log(Number.EPSILON, typeof (Number.EPSILON));
console.log("K" - 10, "K" ** 10, "K" / 10, "K" * 10);
var MyObject = {
  FirstName: "David",
  LastNAme: "Vanilla",
  Age: 30,
  Friends: {
    Close: ["Ali", "Maryam"],
    Distance: ["Mohamad", "Marjan"]
  },
  Children: {
    Girls: ["Sara", "Victoria"],
    boys: ["Jack", "Jimmy"]
  }
};
console.log(MyObject);
console.log(MyObject["Friends"]);
console.log(MyObject["Children"].Girls);
console.log(MyObject["Children"].Girls[1]);
delete MyObject["Age"];
console.warn("Age Propery Was Deleted");
console.log(MyObject);
MyObject["Skin"] = "white";
console.warn("Age Propery Was Added");
console.log(MyObject);