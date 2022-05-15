var num1 = prompt("Enter the first number");
var oper = prompt("Choose an operator: +, -, *, or /");
var num2 = prompt("Enter the second number");


switch (oper) {
    case '+':
        result = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + result);
        break;

    case '-':
        result = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + result);
        break;

    case '*':
        result = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + result);
        break;

    case '/':
        result = num1 / num2;
        console.log(num1 + " / " + num2 + " = " + result);
        break;

    default:
        console.log("Invalid operator!");
        break;
}