type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
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

const combinedAges = combine("90", "26", "as-number");

const combinedNames = combine("Dan", 32, "as-text");
