//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

//Task 1
var task1 = function()
{
    //declarations
    const arrayNames = ["John", "Robert", "Jimmy", "Bonzo"];
    const arrayInstruments = ["bass", "vocals", "guitar", "drums"];
    var stringOutput = "These are people's names and the instruments they play!\n\n";

    for(let i = 0; i < arrayNames.length; i++)
    {
        stringOutput = stringOutput + arrayNames[i] + " plays " + arrayInstruments[i] + ".\n"; //combines name and instrument into one sentance
    }

    //output into the textarea on html
    $("output").value = stringOutput;
}

//Task 2
var task2 = function()
{
    //declarations
    var stringOutput = "This is the times table! From 1x1 to 12x12\n\n";

    for(let i = 1; i <= 12; i++)
    {
        for(let h = 1; h <= 12; h++)
        {
            stringOutput = stringOutput + (i * h) + " "; //multiplies the current i by numbers 1 through 12
        }
        stringOutput = stringOutput + "\n"; //starts on a new line after each i is processed
    }

    //output into the textarea on html
    $("output").value = stringOutput;
}

//Task 3
var task3 = function()
{
    //declarations
    const arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    var arrayTimesTable = [];
    var stringOutput = "This is the fun task 3...\n\n";

    for(i = 0; i < arrayNumbers.length; i++) //this loop creates the times table in a 2-d loop
    {
        arrayTimesTable[i] = [];
        for(let h = 0; h < arrayNumbers.length; h++)
        {
            arrayTimesTable[i][h] = [i+1] * [h+1];
        }
    }

    for(i = 0; i < arrayNumbers.length; i++) //this loop checks the first element in each array element (in the Times Table array) to see if it is even
    {
        if(arrayTimesTable[i][0] % 2 === 0)
        {
            stringOutput = stringOutput + arrayTimesTable[i] + "\n";
        }
    }

    //output into the textarea on html
    $("output").value = stringOutput;
}

//CLEARS DOM inputs on site reload
window.onload = function () 
{
    $("task1").onclick = task1;
    $("task2").onclick = task2;
    $("task3").onclick = task3;
    $("output").value = "";
};