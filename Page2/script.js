function checkSentence() {
  var sentence = document.getElementById("copy-sentence").value.trim().toLowerCase();

  if (sentence != "wrong answers only"){
    console.log('Genius')
    
    var toPage3 = document.createElement("a")
    toPage3.text = "Next Question"
    toPage3.href = "/Page3/quiz3.html"
    document.getElementById("container").appendChild(toPage3)
  }
}
