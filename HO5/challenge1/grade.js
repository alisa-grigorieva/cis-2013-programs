var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function()
{
    var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

    floatHwPts = parseFloat(prompt("Please enter your total homework points."));
    floatMidPts = parseFloat(prompt("Please enter your total midterm points."));
    floatFinPts = parseFloat(prompt("Please enter your total final points."));
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts); //calculates total points in course
    
    intGradeOption = parseInt(prompt("Please enter 0 for pass/fail or 1 for letter grade."));

    if(intGradeOption === 0) //if selected pass/fail course option
    {
        if(floatTotalPts >= 80)
        {
            stringFinalGrade = "Pass";
        }
        else
        {
            stringFinalGrade = "Fail";
        }
    }
    else if(intGradeOption === 1) //if selected letter grade course option
    {
        if(floatTotalPts >= 90)
        {
            stringFinalGrade = "A";
        }
        else if(floatTotalPts < 90 && floatTotalPts >= 80)
        {
            stringFinalGrade = "B";
        }
        else if(floatTotalPts < 80 && floatTotalPts >= 70)
        {
            stringFinalGrade = "C";
        }
        else if(floatTotalPts < 70 && floatTotalPts >= 60)
        {
            stringFinalGrade = "D";
        }
        else 
        {
            stringFinalGrade = "F";
        }
    }
    else //if user did not correctly enter 0 or 1 for course grade option
    {
        stringFinalGrade = "Error";
        alert("Please enter 0 or 1 for course grade option. Thank you!");
    }

    alert("Your course grade: " + stringFinalGrade);
    
}

window.onload = function () 
{
    $("start").onclick = mainProgram;
}