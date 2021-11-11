function checkColor() {
  var colorElement = document.getElementById("color").value;
  if (colorElement == "#212121"){

  var toPage4 = document.createElement("a")
  toPage4.text = "Next Question"
  toPage4.href = "/Page4/quiz4.html"
  document.getElementById("container").appendChild(toPage4);
  }
}