var container = document.getElementById("container");
var display = document.getElementById("display");
var buttons = document.getElementById("buttons");

var btnsArray = document.getElementsByTagName("button");

for (eachBtn of btnsArray) {
  eachBtn.addEventListener("click", function (e) {
    console.log("Btn Clicked!", e.target.innerText);
    var btnClicked = e.target.innerText;

    switch (btnClicked) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        if (display.innerText == "") {
          alert("Please enter some value!");
        } else {
          //Add operator check!
          display.innerText = eval(display.innerText);
        }
        break;
      case "Del":
        console.log("Case DEL");
        var len = display.innerText.length;
        display.innerText = display.innerText.substring(0, len - 1);
        break;
      default:
        display.innerText += btnClicked;
    }
  });
}
