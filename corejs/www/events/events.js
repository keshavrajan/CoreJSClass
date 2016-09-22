// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Inside the anonymous function below, write the necessary code so
// that clicking any "Click Me" element will increment its paired
// counter.
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.
(function() {
	var button1 = document.querySelector("#container > ul > li:nth-child(1) > button");
	var button2 = document.querySelector("#container > ul > li:nth-child(2) > button");
	var button3 = document.querySelector("body > p:nth-child(3) > button");
	var button4 = document.querySelector("body > p:nth-child(4) > span:nth-child(1)");
	var button5 = document.querySelector("body > p:nth-child(5) > a");

	/*button1.addEventListener("click", function(event) {
		count1.textContent = ((parseInt(count1.textContent) || 0) + 1).toString();
	});*/

	var increment = function(element) {
		element.addEventListener("click", function(event) {
			var counter = element.nextSibling.nextSibling;
			/*var counter = element;
			do {
					counter = element.nextSibling;
			} while(counter)*/
			counter.textContent = ((parseInt(counter.textContent) || 0) + 1).toString();
			event.preventDefault();
		});
	}

	increment(button1);
	increment(button2);
	increment(button3);
	increment(button4);
	increment(button5);

	/*var body = document.querySelector("body");
	body.appendChild("p");*/

  // Your code here.

})();
