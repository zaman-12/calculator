
const prompt = require("prompt-sync")()
const num1 = parseFloat(prompt("Enter the first number: "))
const operator = prompt("Enter the operator: ")
const num2 = parseFloat(prompt("enter the second number: "))

switch(operator){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Syntax error");
        
        
           
        
}
