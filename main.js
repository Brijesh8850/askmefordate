
function showNewImage() {
  var imgTag = document.querySelector("#innerdiv img");
  imgTag.src = "img/giphy (1).gif";
  document.body.style.backgroundColor = "lightblue";
document.body.style.backgroundImage = "url('img/6ob.gif')";
var h1Element = document.querySelector("#outerdiv h1"); h1Element.textContent = "yyeeeeee!!!!!!";
var yesButton = document.getElementById("yes");
yesButton.style.backgroundColor = "lightseagreen";
var noButton = document.getElementById("no");
noButton.style.backgroundColor = "lightseagreen";
var yeshide= document.getElementById("yes");
yesButton.style.display = "none";
var nohide = document.getElementById("no");
noButton.style.display = "none";

}

function moveButton() {
  var button = document.getElementById("no");
  var maxX = window.innerWidth - button.offsetWidth;
  var maxY = window.innerHeight - button.offsetHeight;

  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);

  button.style.left = newX + "px";
  button.style.top = newY + "px";
}
