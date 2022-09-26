var $ = function (id) 
{
    return document.getElementById(id);
}
/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
    var floatMonthlyPayment, intLoanTerm, floatTotalCost;
        floatMonthlyPayment = parseFloat($("monthly_payment").value);
        intLoanTerm = parseFloat($("loan_length").value);
        floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm); // calculates total car loan cost
        $("total_cost").value = floatTotalCost.toFixed(2);
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}