console.time();
console.group("firstGroup");
console.log("Kasra", typeof ("Kasra"));
console.log(10, typeof (10));
console.log(10n, typeof (10n));
console.log({ name: "ali", family: "alii" }, typeof ({ name: "ali", family: "alii" }));
console.log(["a", "b", "c"], typeof (["a", "b", "c"]));
console.log(true, typeof (true), false, typeof (false));
console.log(null, typeof (null));
console.log(undefined, typeof (undefined));
console.log(NaN, typeof (NaN));
console.error("this is error sentence");
console.warn("this is warning sentence");
console.table(["a", "b", "c"], typeof (["a", "b", "c"]));
//console.clear();
// console.count();
console.timeEnd();
console.groupEnd("firstGroup");