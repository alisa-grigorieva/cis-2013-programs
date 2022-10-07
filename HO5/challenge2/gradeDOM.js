var $ = function (id) 
{
    return document.getElementById(id);
}

var calculate = function()
{
    var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

    floatHwPts = parseFloat($("homework_points").value);
    floatMidPts = parseFloat($("midterm_points").value);
    floatFinPts = parseFloat($("final_points").value);
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts); //calculates total points in course
    
    intGradeOption = parseInt($("grading_option").value);

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

    $("final_grade").value = stringFinalGrade;
    
}

window.onload = function () 
{
    $("homework_points").value = "";
    $("midterm_points").value = "";
    $("final_points").value = "";
    $("grading_option").value = "";
    $("calc").onclick = calculate;
    $("homework_points").focus();
}