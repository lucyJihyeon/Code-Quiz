var start = document.getElementById("start");
var paragraph = document.querySelector(".paragraph");
//var title = document.querySelector("#title");
var option = [];
var timeEl = document.getElementById("time");
var rightanswers = " ";
var answer = [];
var timeleft = 60;
var timerInterval;
var quizOver = false;

startQuiz();
function startQuiz() {
  if (!quizOver) {
    start.addEventListener("click", function () {
      var state = paragraph.getAttribute("data-state");
      if (state === "visible") {
        paragraph.setAttribute("data-state", "hidden");
        paragraph.setAttribute("style", "display: none");
        var section = document.createElement("section");
        section.setAttribute("id", "question");
        section.setAttribute("style", "display: flex; flex-direction: column;");
        document.body.appendChild(section);
        var title = document.createElement("h1");
        title.textContent = "Array in JavaScript can be used to store";
        title.setAttribute("id", "title");
        var ul = document.createElement("ul");
        section.appendChild(title);
        section.appendChild(ul);
        option = [
          "1. numbers and string",
          "2. other arrays",
          "3. booleans",
          "4. all of the above",
        ];
        for (var i = 0; i < option.length; i++) {
          var li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML = li.innerHTML + option[i];
          li.setAttribute("style", " width: fit-content");
          answer.push(li.innerHTML);
        }
        rightanswers = "4. all of the above";
        setTime();
        rightAnswer();
      }
    });
  }
}

function setTime() {
  timerInterval = setInterval(function () {
    if (timeleft > 0) {
      timeleft--;
      timeEl.textContent = "Time: " + timeleft;
    }
    if (timeleft <= 0) {
      quizOver = true;
      clearInterval(timerInterval);
      sendLose();
    }
  }, 1000);
}

function rightAnswer() {
  var liElements = document.querySelectorAll("#question ul li");
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
        secondQuestion();
      }, 1000);
    });
  }
}
function secondQuestion() {
  if (!quizOver) {
  var option = [
    "1. adding new items to the end of an array",
    "2. removing the last item of an array",
    "3. moving the last item of an array and create a new array with it",
    "4. moving the first iten of an array and create a new array with it",
  ];
  var secondTitle = document.querySelector("#title");
  var secondli = document.querySelectorAll("li");
  var right = document.querySelector("h4");
  right.setAttribute("style", "display: none");
  secondTitle.textContent = "What does .push(); do in JavaScript?";
  for (var i = 0; i < secondli.length; i++) {
    secondli[i].textContent = option[i];
  }
  rightanswers = "1. adding new items to the end of an array";

  rightAnswer2();
}
}

function rightAnswer2() {
  if (!quizOver) {
  var liElements = document.querySelectorAll("#question ul li");
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
        right.setAttribute("style", "display: none");
        thirdQuestion();
      }, 1000);
    });
  }
}
}

function thirdQuestion() {
  if (!quizOver) {
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

  rightAnswer3();
}
}

function rightAnswer3() {
  var liElements = document.querySelectorAll("#question ul li");
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
        right.setAttribute("style", "display: none");
        fourthQuestion();
      }, 1000);
    });
  }
}
function fourthQuestion() {
  if (!quizOver) {
    var option = [
      "1. function: myFunction()",
      "2. function= myFunction()",
      "3. function myFunction()",
      "4. myFunction(): function",
    ];
    var fourthTitle = document.querySelector("#title");
    var fourthli = document.querySelectorAll("li");
    fourthTitle.textContent = "How do you create a function?";
    for (var i = 0; i < fourthli.length; i++) {
      fourthli[i].textContent = option[i];
    }
    rightanswers = "3. function myFunction()";
    rightAnswer4();
  }
}

function rightAnswer4() {
  var liElements = document.querySelectorAll("#question ul li");
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
function fifthQuestion() {
  if (!quizOver) {
  var option = [
    "1. JSON.stringify()",
    "2. JSON.parse()",
    "3. JASON.sringify()",
    "4. JASON.parse()",
  ];
  var fifthTitle = document.querySelector("#title");
  var fifthli = document.querySelectorAll("li");
  fifthTitle.textContent =
    "In order to store an object into a localStorage, what method do you need?";
  for (var i = 0; i < fifthli.length; i++) {
    fifthli[i].textContent = option[i];
  }
  rightanswers = "1. JSON.stringify()";
  rightAnswer5();
}
}
function rightAnswer5() {
  var liElements = document.querySelectorAll("#question ul li");
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
function sixthQuestion() {
  if (!quizOver) {
  var option = [
    "1. the second item of the array",
    "2. the first two items of the array",
    "3. the third item of the array",
    "4. none of the above",
  ];
  var fifthTitle = document.querySelector("#title");
  var fifthli = document.querySelectorAll("li");
  fifthTitle.textContent = "array[2] returns to ";
  for (var i = 0; i < fifthli.length; i++) {
    fifthli[i].textContent = option[i];
  }
  rightanswers = "3. the third item of the array";
  rightAnswer6();
}
}
function rightAnswer6() {
  var liElements = document.querySelectorAll("#question ul li");
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
function seventhQuestion() {
  if (!quizOver) {
  var option = [
    "1. Dynamic Object Model",
    "2. Document Object Model",
    "3. Distributed Object Model",
    "4. none of the above",
  ];
  var fifthTitle = document.querySelector("#title");
  var fifthli = document.querySelectorAll("li");
  fifthTitle.textContent = "What does DOM stand for?";
  for (var i = 0; i < fifthli.length; i++) {
    fifthli[i].textContent = option[i];
  }
  rightanswers = "2. Document Object Model";
  rightAnswer7();
}
}
function rightAnswer7() {
  var liElements = document.querySelectorAll("#question ul li");
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
        clearQuestion();
        sendAlldone();
      }, 1000);
    });
  }
}
function sendAlldone() {
  quizOver = true;
  var message = document.querySelector("#title");
  message.textContent = "All Done!";
  var pEl = document.createElement("p");
  var finalScore = document.createElement("h3");
  finalScore.textContent = "Your final score is " + (40 + timeleft);
  finalScore.setAttribute("id", "final_score");
  pEl.appendChild(finalScore);
  pEl.setAttribute("style", "display: block; margin-top: 15px");

  document.body.appendChild(pEl);
  localStorage.setItem("score", 40 + timeleft);
  clearInterval(timerInterval);
  var label = document.querySelector("label");
  pEl.appendChild(label);
  label.setAttribute("style", "display: inline-flex");
  var initial = document.querySelectorAll(".initial")
  for (var i = 0; i < initial.length; i++){
    initial[i].setAttribute("style", "display: inline-flex; margin-left: 5px");
    pEl.appendChild(initial[i]);
  }
  scoresubmit();
  
}

function scoresubmit() {
    var submit = document.querySelector("#submit_button");
    submit.addEventListener("click", function() {
        var userInitials = document.querySelector("#user_initials").value
        localStorage.setItem("user_initials",userInitials);
        console.log(localStorage.getItem("user_initials"));
        console.log(localStorage.getItem("score"));

    })
}




function sendLose() {
  quizOver = true;  
  clearQuestion();
  timeleft = 0;
  var message = document.querySelector("#title");
  message.textContent =
    "Time's up! Try again next time. Hit the Restart botton to restart.";
  
}

function clearQuestion() {
  timeEl.textContent = " ";
  var ul = document.querySelector("ul");
  ul.innerHTML = ""; // Clear the list items
  //var li = document.querySelectorAll("li")

  var title = document.getElementById("title");
  title.textContent = ""; // Clear the question title

  var right = document.querySelector("h4");
  right.setAttribute("style", "display: none"); // Hide the 'Correct/Wrong' message
}
