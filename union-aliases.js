"use strict";
function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    //   if (resultType === "as-number") {
    //     +result;
    //   } else {
    //     result.toString();
    //   }
    console.log(result);
}
var combinedAges = combine("90", "26", "as-number");
var combinedNames = combine("Dan", 32, "as-text");
