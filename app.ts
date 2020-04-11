function combine(
  input1: number | string,
  input2: number | string,
  resultType: string
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  //   if (resultType === "as-number") {
  //     +result;
  //   } else {
  //     result.toString();
  //   }
  console.log(result);
}

const comsinedAges = combine("90", "26", "as-number");

const combineNames = combine("Dan", 32, "as-string");
