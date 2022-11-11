/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

//HOUSEKEEPING
var $ = function (id) 
{
    return document.getElementById(id);
};

var intMax, intMin, intRandom, intGuess, intCount, pastGuesses;


//MAIN PROCESS
var startProgram = function()
{
    intMin = parseInt($("int_min").value);
    intMax = parseInt($("int_max").value);

    if((intMin >= 0) && (isNaN(intMin) === false)) //if intMin is valid then...
    {
        if(intMax >= (intMin + 2)) //if intMax is valid then...
        {
            alert("You successfully inputted a range! We will now start the game!");
            intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);
            intCount = 0; //counter to see how many guesses the user uses
            pastGuesses = []; //array to keep track of what numbers were guessed already
            intGuess = parseInt(prompt("Please enter your first guess between " + intMin + " and " + intMax + 
                        "! Or type -1 to give up!"));
            while(intGuess != intRandom) //do this loop if user guess is not the correct number
            {
                if(intGuess === -1) //giving up?
                {
                    alert("You have chosen to give up :(");
                    break;
                }
                else if(pastGuesses.includes(intGuess) === true) //was number guessed before?
                {
                    intGuess = parseInt(prompt("You already guessed this number/Invalid number! Please enter an integer between " + intMin + " and " + 
                                    intMax + "! Or type -1 to give up!"));
                    continue;
                }
                else
                {
                    if(validateGuess(intGuess) === 0)
                    {
                        intGuess = parseInt(prompt("Your guess was invalid. Please enter an integer between " + intMin + " and " + 
                                    intMax + "! Or type -1 to give up!"));
                        continue;
                    }
                    else
                    {
                        if(intGuess > intRandom)
                        {
                            intCount++;
                            intGuess = parseInt(prompt("Nice try, but your guess was too HIGH! If you want to give up, type in -1."));
                            continue;
                        }
                        else 
                        {
                            intCount++;
                            intGuess = parseInt(prompt("Nice try, but your guess was too LOW! If you want to give up, type in -1."));
                            continue;
                        }
                    }
                }
            }
            if(intGuess === intRandom) //user's guess is correct!
            {
                alert("Congratulations! Your guess of " + intGuess + " is the right number: " + intRandom + "!");
                $("int_min").value = "";
                $("int_max").value = "";
                $("output").value = "Congrats! It took you " + (intCount+1) + " times to guess the number. Your score is " + 
                                    finalScore(intCount) + " points out of a total possible amount of " + 
                                    (intMax-intMin+1) + " points.\nEnter your new min and max, then hit START!";
            }
            else //user gave up
            {
                $("output").value = "You gave up :/ The answer was " + intRandom + ".\nEnter your new min and max, then hit START!";
            }
        }
        else //intMax was not valid
        {
            $("output").value = "Your minimum is okay, but not your maximum :/ Please enter a maximum that is at least 2 greater than your minimum.";
        }
    }
    else //intMin and/or intMax was not valid
    {
        $("output").value = "Please enter a valid range. Your minimum should be 0 or greater, and your maximum should be 2 greater than your minimum.";
    }
};

//EXTRA FUNCTIONS
function validateGuess(guess) //checks to see if guess is valid
{
    if((guess < intMin) || (guess > intMax) || (isNaN(guess) === true))
    {
        pastGuesses.push(guess);
        return 0; //guess is not valid
    }
    else
    {
        pastGuesses.push(guess);
        return 1; //guess IS valid
    }
};

function finalScore(count) //determines final score after guessing the correct number
{
    return (intMax-intMin+1) - count;
};

//clears the DOM values when window is refreshed
window.onload = function () 
{
    $("start").onclick = startProgram;
    $("int_min").value = "";
    $("int_max").value = "";
    $("guess").value = "";
    $("count").value = "";
    $("output").value = "";
    $("int_min").focus(); // places the cursor in the first input box
};
