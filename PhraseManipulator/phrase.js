//gets DOM inputs from html
var $ = function (id) 
{
    return document.getElementById(id);
};

//MAIN FUNCTIONS
var vowels = function ()
{
    //declarations
    var stringPhrase = $("phrase").value.toUpperCase(); 
    var stringLength = stringPhrase.length;
    var vowels = 0;

    //checks each character in phrase to see whether it is a vowel or not, then adds 1 to vowels variable if so
    for(let i = 0; i < stringLength; i++)
    {
        if(alphabetTrue(stringPhrase.charAt(i)) === true &&
           stringPhrase.charAt(i) === "A" ||
           stringPhrase.charAt(i) === "E" ||
           stringPhrase.charAt(i) === "I" ||
           stringPhrase.charAt(i) === "O" ||
           stringPhrase.charAt(i) === "U")
        {
            vowels++;
        }
    }

    //output message sharing number of vowels found
    $("output").value = "There are " + vowels + " vowels in this phrase.";
};

var consonants = function ()
{
    //declarations
    var stringPhrase = $("phrase").value.toUpperCase(); 
    var stringLength = stringPhrase.length;
    var consonants = 0;

    //checks each character in phrase to see whether it is a vowel or not, then adds 1 to consonants if not
    for(let i = 0; i < stringLength; i++)
    {
        if(alphabetTrue(stringPhrase.charAt(i)) === true &&
           stringPhrase.charAt(i) !== "A" &&
           stringPhrase.charAt(i) !== "E" &&
           stringPhrase.charAt(i) !== "I" &&
           stringPhrase.charAt(i) !== "O" &&
           stringPhrase.charAt(i) !== "U")
        {
            consonants++;
        }
    }

    //output message sharing number of consonants found
    $("output").value = "There are " + consonants + " consonants in this phrase.";
};

var reverse = function ()
{
    //declarations
    var stringPhrase = $("phrase").value; 
    var stringLength = stringPhrase.length;
    var reversedPhrase = "";

    /*write a string where it reads the original phrase left to right, 
    but adds the next characted to the left of each previous character.*/
    for(let i = 0; i < stringLength; i++)
    {
        reversedPhrase = stringPhrase.charAt(i) + reversedPhrase;
    }

    //output message sharing reversed phrase
    $("output").value = "The reversed phrase is: " + reversedPhrase;
};

var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
};

//EXTRA FUNCTIONS
/*function that checks if a character in a string is in the alphabet
this helps the code avoid thinking non-alphabetic characters are consonants*/
function alphabetTrue(character)
{
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    if(alphabet.includes(character))
    {
        return true;
    }
    else
    {
        return false;
    }
};

//clears DOM input on refreshing or opening site.
window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
};  