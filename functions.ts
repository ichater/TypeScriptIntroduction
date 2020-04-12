function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult1(num: number): void {
  console.log("result: " + num);
}

function adddAndHanele(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult1(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

adddAndHanele(10, 20, result => {
  console.log(result);
  return result;
});
