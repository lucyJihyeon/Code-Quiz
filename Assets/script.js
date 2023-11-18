var start = document.getElementById("start");
var paragraph = document.querySelector(".paragraph");
var secondTitle = document.querySelector("#sc_title");
var scOption = [
  "1. numbers and string",
  "2. other arrays",
  "3. booleans",
  "4. all of the above",
];
var timeEl = document.getElementById("time");
var rightanswers = "4. all of the above";
var scAnswer = [];
var timeleft = 60;

start.addEventListener("click", function () {
  var state = paragraph.getAttribute("data-state");
  if (state === "visible") {
    paragraph.setAttribute("data-state", "hidden");
    paragraph.setAttribute("style", "display: none");
    var scTest = document.createElement("section");
    scTest.setAttribute("id", "second-test");
    scTest.setAttribute("style", "display: flex; flex-direction: column;");
    var scTitle = document.createElement("h1");
    scTitle.textContent = "Array in JavaScript can be used to store";
    scTitle.setAttribute("id", "title");
    var ul = document.createElement("ul");
    scTest.appendChild(scTitle);
    scTest.appendChild(ul);
    document.body.appendChild(scTest);
    for (var i = 0; i < scOption.length; i++) {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = li.innerHTML + scOption[i];
      li.setAttribute("style", " width: fit-content");
      scAnswer.push(li.innerHTML);
    }
    console.log(scAnswer);
    setTime();
    rightAnswer();
  }
});

function setTime() {
  var timerInterval = setInterval(function () {
    if (timeleft > 0) {
      timeleft--;
      timeEl.textContent = "Time: " + timeleft;
    }
    if (timeleft === 0) {
      clearInterval(timerInterval);
      sendAlldone();
    }
  }, 1000);
}

function sendAlldone() {
  timeEl.textContent = " ";
}

function rightAnswer() {
  var liElements = document.querySelectorAll("#second-test ul li");
  for (var i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("click", function (event) {
      var selectedAnswer = event.target.innerHTML;
      if (rightanswers.includes(selectedAnswer)) {
        var right = document.createElement("h4");
        right.textContent = "Correct!";
      } else {
        var right = document.createElement("h4");
        right.textContent = "Wrong! -10s";
        timeleft -= 10;
      }
      right.setAttribute("style", "color: grey");
      document.body.appendChild(right);
      setTimeout(function () {
        right.setAttribute("style", "display: none");
        thirdQuestion();
      }, 1000);
      
    });
  }
}


function thirdQuestion() {
  var option = ["1. var", "2. let", "3. Both 1 and 2", "4. none of the above"];
  var thirdTitle = document.querySelector("#title");
  var thirdli = document.querySelectorAll("li");
  var right = document.querySelector("h4");
  right.setAttribute("style", "display: none");
  thirdTitle.textContent =
    "Which of the following keywords is used to define a variable in JavaScript? ";
  for (var i = 0; i < thirdli.length; i++) {
    thirdli[i].textContent = option[i];
  }
  rightanswers = "3. Both 1 and 2";

  rightAnswer2();
  
}

function rightAnswer2() {
    var liElements = document.querySelectorAll("#second-test ul li");
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener("click", function (event) {
        var selectedAnswer = event.target.innerHTML;
        if (rightanswers.includes(selectedAnswer)) {
          var right = document.querySelector("h4");
          right.textContent = "Correct!";
        } else {
          var right = document.querySelector("h4");
          right.textContent = "Wrong! -10s";
          timeleft -= 10;
        }
        //right.setAttribute("style", "color: grey");
        //document.body.appendChild(right);
        setTimeout(function () {
          //right.setAttribute("style", "display: none");
          fourthQuestion();
        }, 1000);
        
      });
    }
}
function fourthQuestion() {
  var option = [
    "1. function: myFunction()",
    "2. function= myFunction()",
    "3. function myFunction()", 
    "4. myFunction(): function"
  ];
  var fourthTitle = document.querySelector("#title");
  var fourthli = document.querySelectorAll("li");
  //var right = document.querySelector("h4");
  //right.setAttribute("style", "display: none");
  fourthTitle.textContent =
    "How do you create a function?";
  for (var i = 0; i < fourthli.length; i++) {
    fourthli[i].textContent = option[i];
  }
  rightanswers = "3. function myFunction()"
  rightAnswer3();
}

function rightAnswer3() {
    var liElements = document.querySelectorAll("#second-test ul li");
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener("click", function (event) {
        var selectedAnswer = event.target.innerHTML;
        if (rightanswers.includes(selectedAnswer)) {
          var right = document.querySelector("h4");
          right.textContent = "Correct!";
        } else {
          var right = document.querySelector("h4");
          right.textContent = "Wrong! -10s";
          timeleft -= 10;
        }
        setTimeout(function () {
          fifthQuestion();
        }, 1000);
        
      });
    }
}
function fifthQuestion()    {
    var option = [
        "1. JSON.stringify()",
        "2. JSON.parse()",
        "3. JASON.sringify()",
        "4. JASON.parse()"
      ];
      var fifthTitle = document.querySelector("#title");
      var fifthli = document.querySelectorAll("li");
      fifthTitle.textContent =
        "In order to store an object into a localStorage, what method do you need?";
      for (var i = 0; i < fifthli.length; i++) {
        fifthli[i].textContent = option[i];
      }
      rightanswers = "1. JSON.stringify()";
      rightAnswer4();
}
function rightAnswer4() {
    var liElements = document.querySelectorAll("#second-test ul li");
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener("click", function (event) {
        var selectedAnswer = event.target.innerHTML;
        if (rightanswers.includes(selectedAnswer)) {
          var right = document.querySelector("h4");
          right.textContent = "Correct!";
        } else {
          var right = document.querySelector("h4");
          right.textContent = "Wrong! -10s";
          timeleft -= 10;
        }
        setTimeout(function () {
          sixthQuestion();
        }, 1000);
        
      });
    }
}
function sixthQuestion()    {
    var option = [
        "1. the second item of the array",
        "2. the first two items of the array",
        "3. the third item of the array",
        "4. none of the above"
      ];
      var fifthTitle = document.querySelector("#title");
      var fifthli = document.querySelectorAll("li");
      fifthTitle.textContent =
        "array[2] returns to ";
      for (var i = 0; i < fifthli.length; i++) {
        fifthli[i].textContent = option[i];
      }
      rightanswers = "3. the third item of the array";
      rightAnswer5();
}
function rightAnswer5() {
    var liElements = document.querySelectorAll("#second-test ul li");
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener("click", function (event) {
        var selectedAnswer = event.target.innerHTML;
        if (rightanswers.includes(selectedAnswer)) {
          var right = document.querySelector("h4");
          right.textContent = "Correct!";
        } else {
          var right = document.querySelector("h4");
          right.textContent = "Wrong! -10s";
          timeleft -= 10;
        }
        setTimeout(function () {
          seventhQuestion();
        }, 1000);
        
      });
    }
}
function seventhQuestion()    {
    var option = [
       "1. Dynamic Object Model",
       "2. Document Object Model",
       "3. Distributed Object Model",
       "4. none of the above"
      ];
      var fifthTitle = document.querySelector("#title");
      var fifthli = document.querySelectorAll("li");
      fifthTitle.textContent =
        "What does DOM stand for?";
      for (var i = 0; i < fifthli.length; i++) {
        fifthli[i].textContent = option[i];
      }
      rightanswers = "2. Document Object Model";
      rightAnswer6();
}
function rightAnswer6() {
    var liElements = document.querySelectorAll("#second-test ul li");
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener("click", function (event) {
        var selectedAnswer = event.target.innerHTML;
        if (rightanswers.includes(selectedAnswer)) {
          var right = document.querySelector("h4");
          right.textContent = "Correct!";
        } else {
          var right = document.querySelector("h4");
          right.textContent = "Wrong! -10s";
          timeleft -= 10;
        }
        setTimeout(function () {
          sendAlldone();
        }, 1000);
        
      });
    }
}
function sendAlldone()  {

}






function clearQuestion() {
    var ul = document.querySelector("#second-test ul");
    ul.innerHTML = ""; // Clear the list items
  
    var fourthTitle = document.querySelector("#title");
    fourthTitle.textContent = ""; // Clear the question title
  
    var right = document.querySelector("h4");
    right.setAttribute("style", "display: none"); // Hide the 'Correct/Wrong' message
  }