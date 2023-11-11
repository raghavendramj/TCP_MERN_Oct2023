// The window object is global
var counter = 1;

//Function Expression!
var showCounter = function () {
  console.log(counter);
};

console.log("Counter :- ", counter);
console.log("showCounter :- ", showCounter);

console.log("Counter :- ", window.counter);
console.log("showCounter :- ", window.showCounter);

// document.documentElement.clientWidth and document.documentElement.clientHeight properties
// indicate the width and height of the page viewport.

//Window size
// The window object has four properties related to the size of the window:

// The innerWidth and innerHeight properties return the size of the page viewport inside the browser window (not including the borders and toolbars).
// The outerWidth and outerHeight properties return the size of the browser window itself.

//1) Window size
var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

//2) Open a new window
var url = "http://127.0.0.1:5500/02_NewWindow.html";
var jsWindow = window.open(url, "Testing");

window.open(url, "www.google.com", "about", "height=600,width=800");

//3) Resize a window

var jsWindow = window.open( 
  "www.google.com",
  "about",
  "height=600,width=800"
);

setTimeout(function () {
  console.log("Resizing the window!");
  jsWindow.resizeTo(500, 300);
}, 3000);
