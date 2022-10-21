//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all of the rectangle, triangle, and circle calculations and prints the results
var do_it = function () 
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

	alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
		   " and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
		   "\n\n" + "The Triangle area is " + triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
		   " and the perimeter is " + triPerim(floatTriSide1,floatTriSide2,floatTriSide3) + 
		   "\n\n" + "The Circle area is " + circleArea(floatRadius) + 
		   " and the circumference is " + circleCircum(floatRadius));
};

//beginning of individual buttons/functions

//calculates rectangle area
var calcRectArea = function() //1a
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight));	
};

function rectArea(width, height) //1b
{
	var floatArea = parseFloat(width * height);
	return floatArea.toFixed(2);
};

//calculates rectangle perimeter
var calcRectPerim = function() //2a
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The Rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));	
};

function rectPerim(width, height) //2b
{
	var floatPerim = parseFloat((width * 2) + (height * 2));
	return floatPerim.toFixed(2);
};

//calculates triangle area
var calcTriArea = function() //3a
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert ("The Triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));	
};

function triArea(side1, side2, side3) //3b
{
	var floatS = parseFloat((side1 + side2 + side3) / 2);
	var floatArea = parseFloat(Math.sqrt(floatS*(floatS-side1)*(floatS-side2)*(floatS-side3)));
	return floatArea.toFixed(2);
};

//calculates triangle perimeter
var calcTriPerim = function() //4a
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert ("The Triangle perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));	
};

function triPerim(side1, side2, side3) //4b
{
	var floatPerim = parseFloat (side1 + side2 + side3);
	return floatPerim.toFixed(2);
};

//calculates circle area
var calcCircleArea = function() //5a
{
	var floatRadius = parseFloat($("radius").value);
	alert ("The Circle area is " + circleArea(floatRadius));	
};

function circleArea(radius) //5b
{
	var floatArea = parseFloat (Math.PI * Math.pow(radius, 2));
	return floatArea.toFixed(2);
};

//calculates circle circumference
var calcCircleCircum = function() //6a
{
	var floatRadius = parseFloat($("radius").value);
	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(radius) //6b
{
	var floatCircum = parseFloat (2 * Math.PI * radius);
	return floatCircum.toFixed(2);
};

//clears the DOM values when window is refreshed
window.onload = function () 
{
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_rect_area").onclick = calcRectArea;
	$("calc_rect_perim").onclick = calcRectPerim;
	$("calc_tri_area").onclick = calcTriArea;
	$("calc_tri_perim").onclick = calcTriPerim;
	$("calc_circle_area").onclick = calcCircleArea;
	$("calc_circle_circum").onclick = calcCircleCircum;
};
