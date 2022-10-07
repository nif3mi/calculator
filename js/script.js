//Business Logic
//addition
function add(number1, number2) {
  return number1 + number2;
}
//subtraction

function subtract(number1, number2) {
  return number1 - number2;
}
//multiplication

function multiply(number1, number2) {
  return number1 * number2;
}
//division

function divide(number1, number2) {
return number1 / number2;
}
//modulo
function modulo(number1, number2){
  return number1 % number2;
}
//User Interface

$(document).ready(function(){
  $("#calculator").submit(function(event){
    event.preventDefault();
    const num1 =parseInt($("#number1").val()) ;
    const num2 =parseInt($("#number2").val()) ;

    let selector  = $("input:radio[name=calc]:checked").val();
    
      if (selector === "add") {
        let result = add (num1, num2);
        $("#display").text(result); 
      }else if (selector === "subtract"){
        const result = subtract (num1, num2);
         $("#display").text(result);
      }else if (selector === "multiply"){
        const result = multiply (num1, num2);
        $("#display").text(result);
      }else if (selector === "divide"){
        const result = divide (num1, num2);
        $("#display").text(result);
      }else if (selector === "modulo"){
        const result = modulo (num1, num2);
        $("#display").text(result);
      }
      $("#number1").val(" ")
      $("#number2").val(" ")
  })
})

  