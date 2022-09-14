//this program calculates age in days, weeks, months, and fortnights
//1 fortnight is two weeks (14 days)
var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{
    var floatAge, floatDays, intWeeks, floatMonths, intFortnights;

        floatAge = parseFloat(prompt("Enter your age in years.")).toFixed(2); //gets users age
        floatDays = parseFloat(floatAge * 365.25).toFixed(2); //calculates age in days
        intWeeks = parseInt(floatDays/7); //calculates age in weeks
        floatMonths = parseFloat(floatAge * 12).toFixed(2); //calculates age in months
        intFortnights = parseInt(floatDays/14); //calculates age in fortnights

        alert("You inputted " + floatAge + " years as your age" +
              ".\n\nYour age in days is " + floatDays + 
              ".\nYour age in weeks is " + intWeeks + 
              ".\nYour age in months is " + floatMonths + 
              ".\nYour age in fortnights is " + intFortnights + ".");
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}