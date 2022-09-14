//this program will calculate the MPG of a single trip
var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{ 
     var floatMiles, floatGallons, floatMpg;
          floatMiles = parseFloat(prompt("Enter miles driven")); //gets miles driven in trip
          floatGallons = parseFloat(prompt("Enter gallons of gas used")); //gets gallons used in trip
          floatMpg = parseFloat(floatMiles/floatGallons).toFixed(2);
          alert("Miles per gallon = " + floatMpg);
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}