function calculate(num1, num2, operator) {
  // Use if-else statements to determine which arithmetic operation to perform based on the operator entered.
  // return the final value that you get after operating on num1 and num2 based on what the operator is
  // if operator == "+" then return num1+num2 , else if operator == "-" then return num1-num2 and so on....
  //   write your code here -->

  // initializing result 
   var result = null;

   // checking for addition
    if(operator == '+') {
      result = num1 + num2;
    }

    // checking for subtraction
    else if (operator == '-') {
      result = num1 - num2;
    }

    // checking for multiply
    else if (operator == '*') {
      result = num1 * num2;
    }

    // checking for division
    else if( operator == '/') {
      result = num1 / num2;
    }

    return result;
}

// ignore the function below
function performOperations() {
  // Get the values of the two input fields and the operator.
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var operator = document.getElementById("operator").value;
  // Check if the input values are valid.
  if (num1 == "" || num2 == "") {
    result.textContent = "Please enter valid numbers!";
    return;
  }
  if (operator === "") {
    result.textContent = "Please select an operator!";
    return;
  }
  const res = calculate(parseFloat(num1), parseFloat(num2), operator);
  result.textContent = "Result is : " + res;
}
