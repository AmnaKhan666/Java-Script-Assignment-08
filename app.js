// Qno:01
// var date = new Date ();
// document.write(date);

// Qno:02
// function yourName()
// {
//     var fname = prompt("Enter first Name");
//     var lname = prompt("Enter last Name");
//     var fullName = fname + " " + lname; 
//     return fullName;
// }
// var add = yourName();
// document.write("Have A Nice Day " + add);

// Qno:03
//   function addtwoNum()
//   {
//     var num1 = +prompt("Enter Value1")
//     var num2 = +prompt("Enter Value2")
//     var sum = num1+num2
//     return sum;
//   }
// var result = addtwoNum()
// document.write("The sum of the two numbers is: " + result)

// Qno:04
var num1 = +prompt("Enter value 1");
var oper = prompt("Enter Operator");
var num2 = +prompt("Enter value 2");

function Operator(num1, num2, oper) {
    if (oper == "+") {
        return num1 + num2;
    } else if (oper == "-") {
        return num1 - num2;
    } else if (oper == "*") {
        return num1 * num2;
    } else if (oper == "/") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Division by zero";
        }
    } else {
        return "Error: Invalid operator";
    }
}

var result = Operator(num1, num2, oper);
document.write("The result of " + num1 + " " + oper + " " + num2 + " is: " + result);
