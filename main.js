// Define a Function
function sayOuch() {
	alert('Why are you clicking the logo??!');
}

// Use a CSS selector to identify an element
var logo = document.querySelector('img');

// Assign the function to the onclick event on that element
logo.onclick = sayOuch;
