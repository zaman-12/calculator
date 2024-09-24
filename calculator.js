const { log } = require("console")

const prompt = require("prompt-sync")()
const number1 = parseFloat(prompt("Enter the first number: "))
const operator = prompt("Enter the operator: ")
const number2 = parseFloat(prompt("enter the second number: "))

if(operator=== "+"){
    console.log(number1+number2);
}   
else if(operator==="-"){
    console.log(number1-number2);
}   
else if(operator==="*"){
    console.log(number1*number2);
}
else if(operator==="/"){
    console.log(number1/number2);
}else{
    console.log("Syntax error");
    
}
    
    


