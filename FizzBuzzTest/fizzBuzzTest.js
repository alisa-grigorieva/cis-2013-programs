var $ = function (id) 
{
    return document.getElementById(id);
}

var fizzBuzzFor = function() //This function does the FizzBuzz test with the for loop
{
    var output = "FizzBuzz Test with the FOR Loop.\n\n";
	  for (let i = 1; i <= 100; i++) 
    {
        if(i % 15 == 0)
        {
            output = output + "FizzBuzz\n";
            continue;
        } 
        else if(i % 3 == 0) 
        {
            output = output + "Fizz\n";
            continue;
        } 
        else if(i % 5 == 0)
        {
            output = output + "Buzz\n";
            continue;
        } 
        else 
        {
            output = output + i + "\n";
        }
    }
  $("output").value = output;
}

var fizzBuzzWhile = function() //This function does the FizzBuzz test with the while loop
{
    var output = "FizzBuzz Test with the WHILE Loop.\n\n";
    let i = 1;

    while (i <= 100) 
    {
      if(i % 15 == 0)
      {
        output = output + "FizzBuzz\n";
        i++;
        continue;
      }
      else if(i % 3 == 0) 
      {
        output = output + "Fizz\n";
        i++;
        continue;
      } 
      else if(i % 5 == 0)
      {
        output = output + "Buzz\n";
        i++;
        continue;
      } 
      else 
      {
        output = output + i + "\n";
        i++;
      }
    } 
  $("output").value = output;
}

var fizzBuzzDo = function() //This function does the FizzBuzz test with the while loop
{
    var output = "FizzBuzz Test with the DO-WHILE Loop.\n\n";
    let i = 1;
    
    do 
    {
        if(i % 15 == 0)
        {
          output = output + "FizzBuzz\n";
          i++;
          continue;
        }
        else if(i % 3 == 0) 
        {
          output = output + "Fizz\n";
          i++;
          continue;
        } 
        else if(i % 5 == 0)
        {
          output = output + "Buzz\n";
          i++;
          continue;
        } 
        else 
        {
          output = output + i + "\n";
          i++;
        }
    } while (i <= 100);
  $("output").value = output;
}

var fizzBuzzReset = function() //This function clears the Text Area
{
    $("output").value = "";
}

window.onload = function()
{
	$("fizz_buzz_for").onclick = fizzBuzzFor;
    $("fizz_buzz_while").onclick = fizzBuzzWhile;
    $("fizz_buzz_do").onclick = fizzBuzzDo;
    $("fizz_buzz_reset").onclick = fizzBuzzReset;
}