console.log(1);
const prom = new Promise((resolve, reject) => {
  console.log(2);
  return resolve(3 * 5);
});
console.log(3);
console.log(prom);
console.log(4);
prom.then(value => console.log(value));
// Result
// 1
// 2
// 3
// Promise {<fulfilled>: 15}
// 4
// 15
console.log("this is Synch Action-1");
setTimeout(() => {
  console.log("this is Asynch action-2");
}, 1000);
console.log("this is Synch action-3");
const prom = new Promise((resolve, reject) => {
  console.log("this is Synch Action-4");
  return resolve("this is asynch action-5-(value)");
});
console.log(prom, "this is synch action-6");
prom.then((value) => { console.log(value, "this is asynch action-7 "); });
//Synch To Asynch
function prom(a, b) {
  return new Promise((resolve, reject) => {
    return resolve(a * b);
  });
};
console.log("step-1");
prom(2, 5).then((value) => { console.log(value, "step - 2"); });
console.log("step-3");
// result
// step - 1
// step - 3
// 10 'step - 2'
//reject
function prom(a, b) {
  return new Promise((resolve, reject) => {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      return reject(`This is Reject Error: Your Input Is ${NaN}`);
    }
    return resolve(a * b);
  });
};
console.log("step-1");
prom(2, NaN).then((value) => { console.log(value, "step - 2"); }).catch((error) => { console.log(error); }).finally(() => {
  console.log("this is Finally Action");
});
console.log("step-3");
//result
// step - 1
// step - 3
// This is Reject Error: Your Input Is NaN
// this is Finally Action
// async
async function prom(value) {
  return value ** 2;
};
console.log(prom(2));
prom(2).then((value) => { console.log(value); }).finally(console.log("this is finally"));
//turn process of sync to Async
function delay(time, value) {
  return new Promise(resolve => (setTimeout(() => { resolve(value) }, time)));
};
async function func(a, b) {
  await delay(1000, "Delay");
  return a ** b;
};
func(2, 5).then((value) => { console.log(value) });
//Turn Process Of Sync To Async
const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
async function func() {
  for (let i = 0; i < 5; i++) {
    await delay(1000);
    console.log(i);
  }
};
func();