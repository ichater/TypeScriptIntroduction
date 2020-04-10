function add(phrase, n1, n2, showResult) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 15;
var printResult = true;
var resultPhrase = "result is: ";
var result = add(resultPhrase, number1, number2, printResult);
console.log(result);
