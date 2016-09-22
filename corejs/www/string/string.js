/*
 * The function below takes a string as input and should:
 *
 *   1) Replace the word "today" with the current date using the
 *      `toDateString' method (present on date objects).
 *
 *   2) Replace the word "pi" with the numeric value of PI, to the 2nd
 *      decimal place.
 *
 *   3) Count how many occurrences of the letter X (upper and lower
 *      case) are present and append the count to the end of the
 *      string following a space.
 *
 * It should then return the modified string.
 *
 * Example input and output:
 *
 *   "foo pi xx" -> "foo 3.14 xx 2"
 */
processString = function(input) {

	var todayRE = /\btoday\b/ig;
	var piRE = /\bpi\b/ig;
	var xRE = /x/ig;
	var countX = (input.match(xRE) || []).length;

	var output = input.replace(todayRE, function() { return new Date().toDateString(); });
	output = output.replace(piRE, function() { return "3.14"; });
	output = output + " " + countX;
	return output;

  // Your code here.

};