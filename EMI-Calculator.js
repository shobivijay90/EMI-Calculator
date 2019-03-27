function reset(){
  document.getElementById("value1").value = 0;
  document.getElementById("value2").value = 0;
  document.getElementById("value3").value = 0;
  
  document.getElementById("monthly-interest").innerHTML =" $ " +0;
  document.getElementById("monthly-payment").innerHTML =" $ " +0;
  document.getElementById("total-repayment").innerHTML =" $ " +0;
  document.getElementById("total-interest").innerHTML =" $ " +0;
}

function calculation(){
  
  var loanAmount = document.getElementById("value1").value;
  var interestRate = document.getElementById("value2").value;
  var loanDuration = document.getElementById("value3").value;
  
  //----------Monthly Interest----------
  
 var interestPerYear = (loanAmount * interestRate)/100; 
 var monthlyInterest = interestPerYear/loanDuration;
  
 document.getElementById("monthly-interest").innerHTML = " $ " +monthlyInterest.toFixed(2); 
  
 //-------------Monthly payment------------
  
  var monthlyPayment = monthlyInterest + (loanAmount/loanDuration);
   document.getElementById("monthly-payment").innerHTML = " $ " +monthlyPayment.toFixed(2); 
  
  //-------------Total repayment-----------
  
  var totalRepayment = monthlyPayment * loanDuration;
  document.getElementById("total-repayment").innerHTML =" $ " +totalRepayment.toFixed(2);
  
  //--------------Total Interest cost----------------
  
   var totalInterestCost = monthlyInterest * loanDuration;
  document.getElementById("total-interest").innerHTML =" $ " +totalInterestCost.toFixed(2);
  
}