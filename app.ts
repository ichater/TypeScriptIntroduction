function add(phrase: string, n1: number, n2: number, showResult: boolean) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 15;
const printResult = true;
const resultPhrase = "result is: ";

const result = add(resultPhrase, number1, number2, printResult);
console.log(result);
