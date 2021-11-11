
function getDataDropdown() {
  var selection = document.getElementById("fruits");
  var result = selection.options[selection.selectedIndex].text;
  if (result == "Cherimoya"){
    var cherimoyaImg = document.createElement("img");
    cherimoyaImg.id =  "img";
    cherimoyaImg.src = "/Page1/cherimoya.jpg";
    document.getElementById("img-container").appendChild(cherimoyaImg);

    var toPage2 = document.createElement("a");
    toPage2.href = "/Page2/quiz2.html";
    toPage2.text = "Next Question";
    document.getElementById("img-container").appendChild(toPage2);
  }
}