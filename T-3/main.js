var MyNumber = 10;
if (MyNumber > 10) {
  console.log("It Is More Than 10\nEVEN");
  console.log("EVEN");
} else if (MyNumber < 10) {
  console.log("It Is Less Than 10");
} else if (MyNumber % 2) {
  console.log("Even");
} else if (MyNumber % 2 === 1) {
  console.log("odd");
} else {
  console.log("It IS 10 \nEven");
}
switch (MyNumber) {
  case 10:
    console.log("Your Number Is 10");
    break;
  case 9:
  case 8:
  case 7:
  case 6:
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Your Number Less Than 10");
    break;
  default:
    console.log("Your Number More Than 10");
}
(MyNumber % 2) ? console.log("ODD") : console.log("EVEN");
console.log((MyNumber % 2) ? "Odd" : "Even");