"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create a functions and develop a calculator application by using of a typescript and add,mul,div,sub
var readline = require("readline");
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function mul(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function div(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function Calculator() {
    console.log('\nEnter which operation you want to do \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division');
    r1.question("Choose an option", function (option) {
        if (option == '5') {
            console.log("Exiting");
            r1.close();
            return;
        }
        r1.question("Enter the first number", function (firstInput) {
            var firstNumber = parseFloat(firstInput);
            r1.question("Enter the second number", function (secondInput) {
                var secondNumber = parseFloat(secondInput);
                var result;
                try {
                    switch (option) {
                        case '1':
                            result = add(firstNumber, secondNumber);
                            console.log("".concat(firstNumber, " + ").concat(secondNumber, " = ").concat(result));
                            break;
                        case '2':
                            result = sub(firstNumber, secondNumber);
                            console.log("".concat(firstNumber, " - ").concat(secondNumber, " = ").concat(result));
                            break;
                        case '3':
                            result = mul(firstNumber, secondNumber);
                            console.log("".concat(firstNumber, " * ").concat(secondNumber, " = ").concat(result));
                            break;
                        case '4':
                            result = div(firstNumber, secondNumber);
                            console.log("".concat(firstNumber, " / ").concat(secondNumber, " = ").concat(result));
                            break;
                        default:
                            console.log("Invalid option try inputting once again");
                            break;
                    }
                }
                catch (error) {
                    console.error('Error');
                }
                // Continue to the next calculation
                Calculator();
            });
        });
    });
}
Calculator();
