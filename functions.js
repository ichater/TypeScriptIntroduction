"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("result: " + num);
}
function adddAndHanele(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult1(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
adddAndHanele(10, 20, function (result) {
    console.log(result);
    return result;
});
