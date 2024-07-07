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
// var num1 = +prompt("Enter value 1");
// var oper = prompt("Enter Operator");
// var num2 = +prompt("Enter value 2");

// function Operator(num1, num2, oper) {
//     if (oper == "+") {
//         return num1 + num2;
//     } else if (oper == "-") {
//         return num1 - num2;
//     } else if (oper == "*") {
//         return num1 * num2;
//     } else if (oper == "/") {
//         if (num2 !== 0) {
//             return num1 / num2;
//         } else {
//             return "Error: Division by zero";
//         }
//     } else {
//         return "Error: Invalid operator";
//     }
// }

// var result = Operator(num1, num2, oper);
// document.write("The result of " + num1 + " " + oper + " " + num2 + " is: " + result);

// Qno:05
// function square(x)
// {
//   return x*x
// }
// alert(square(5))

// Qno:06
// function factorial()
// {
//     var num = +prompt("Enter the number");
//     if(num<0)
//     {
//         alert("Error:")
//     }
//     else{
//         var result = 1
//         for(var i = 1; i<=num; i++)
//         {
//          result*=i
//         }
//         alert( "the factorial is " + num + " " +  result)
//     }
// }
// factorial()

// Qno:07
// AS VARIABLE
// var width = 10
// var height = 10
// function area ()
// {
//     return  width * height
// }
// alert(area(width * height))

// AS VALUE
// function area(w,h)
// {
//     return w*h
// }
// alert(area(5,6))

// Qno:08
// var num1 = parseInt(prompt("Enter the num where counting starts"));
// var num2 = parseInt(prompt("Enter the num where counting ends"));

// function counting() {
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }

// counting();

// Qno:09
// function capatalizeword(string) {
//     var words = string.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// let exampleString = 'the quick brown fox';
// let capitalizedString = capatalizeword(exampleString);
// document.write(capitalizedString);





