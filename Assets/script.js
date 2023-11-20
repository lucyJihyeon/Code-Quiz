var start = document.getElementById("start");
var paragraph = document.querySelector(".paragraph");
var title = document.getElementById("title");
var ul = document.querySelector("ul");
var option = [];
var timeEl = document.getElementById("time");
var rightanswers = " ";
var answer = [];
var timeleft = 60;
var timerInterval;
var quizOver = false;
var view = document.querySelector("a")
view.addEventListener("click", function(event)   {
    event.preventDefault();
    renderUserInfo();
});

startQuiz();


function startQuiz() {
  if (!quizOver) {
    start.addEventListener("click", function () {
      var state = paragraph.getAttribute("data-state");
      if (state === "visible") {
        paragraph.setAttribute("data-state", "hidden");
        paragraph.setAttribute("style", "display: none");
        title.textContent = "Array in JavaScript can be used to store";
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

function answerClickHandler(event) {
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
}

function rightAnswer() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.addEventListener("click", answerClickHandler);
  });
}
function secondQuestion() {
  if (!quizOver) {
    var option = [
      "1. adding new items to the end of an array",
      "2. removing the last item of an array",
      "3. moving the last item of an array and create a new array with it",
      "4. moving the first ite of an array and create a new array with it",
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
function answerClickHandler2(event) {
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
}

function rightAnswer2() {
  if (!quizOver) {
    var liElements = document.querySelectorAll("#question ul li");
    liElements.forEach(function (li) {
      li.removeEventListener("click", answerClickHandler);
      li.addEventListener("click", answerClickHandler2);
    });
  }
}

function thirdQuestion() {
  if (!quizOver) {
    var option = [
      "1. var",
      "2. let",
      "3. Both 1 and 2",
      "4. none of the above",
    ];
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
function answerClickHandler3(event) {
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
    fourthQuestion();
  }, 1000);
}

function rightAnswer3() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler2);
    li.addEventListener("click", answerClickHandler3);
  });
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
function answerClickHandler4(event) {
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
    fifthQuestion();
  }, 1000);
}

function rightAnswer4() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler3);
    li.addEventListener("click", answerClickHandler4);
  });
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
function answerClickHandler5(event) {
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
    sixthQuestion();
  }, 1000);
}

function rightAnswer5() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler4);
    li.addEventListener("click", answerClickHandler5);
  });
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
function answerClickHandler6(event) {
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
    seventhQuestion();
  }, 1000);
}

function rightAnswer6() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler5);
    li.addEventListener("click", answerClickHandler6);
  });
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
function answerClickHandler7(event) {
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
    sendAlldone();
  }, 1000);
}

function rightAnswer7() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler6);
    li.addEventListener("click", answerClickHandler7);
  });
}

function sendAlldone() {
  quizOver = true;
  clearQuestion();
  clearInterval(timerInterval);
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
  var initial = document.querySelectorAll(".initial");
  for (var i = 0; i < initial.length; i++) {
    initial[i].setAttribute("style", "display: inline-flex; margin-left: 5px");
    pEl.appendChild(initial[i]);
  }

  scoresubmit();
}

function scoresubmitHandler(event)  {
    event.preventDefault();
    var userInitials = document.querySelector("#user_initials").value;
    var userscore = localStorage.getItem("score");
    var userInfos = JSON.parse(localStorage.getItem("userInfos")) || [];

    userInfos.push({
      initials: userInitials,
      score: userscore
    });
    localStorage.setItem("userInfos", JSON.stringify(userInfos));

    renderUserInfo();
}

function scoresubmit() {
  var score = document.getElementById("final_score");
  score.textContent = "";
  var submit = document.querySelector("#submit_button");
  submit.removeEventListener("click", scoresubmitHandler);
  submit.addEventListener("click", scoresubmitHandler);
  
}
function renderUserInfo() {
  clearQuestion();
  var title = document.getElementById("title");
  title.textContent = "HighScores";
  var initialsEl = document.querySelectorAll(".initial");
  for (var i = 0; i < initialsEl.length; i++) {
    initialsEl[i].setAttribute("style", "display:none");
  }
  var fscore = document.querySelectorAll("#final_score");
  for ( i = 0; i < fscore.length; i++)  {
  fscore[i].textContent = " ";
  }
  var ul = document.querySelector("#score-list");
  var userInfos = JSON.parse(localStorage.getItem("userInfos")) || [];

  userInfos.sort(function (a, b) {
    return b.score - a.score;
  });

  for (var i = 0; i < userInfos.length; i++) {
    var userInfo = userInfos[i];
    var li = document.createElement("li");
    li.textContent =
      i + 1 + ". Initials: " + userInfo.initials + ", Score: " + userInfo.score;
    li.setAttribute("class", "user_info");
    ul.appendChild(li);
  }
  var goBack = document.createElement("button");
  goBack.textContent = "Go Back";
  goBack.setAttribute("class", "button");
  goBack.setAttribute("id", "go-back");
  var clearHighscores = document.createElement("button");
  clearHighscores.textContent = "Clear Highscores";
  clearHighscores.setAttribute("class", "button");
  clearHighscores.setAttribute("id", "clear-button");
  var place = document.getElementById("score-button");
  place.appendChild(goBack);
  place.appendChild(clearHighscores);
  place.setAttribute("style", "display: inline-flex");
  buttonHandler();
}

function buttonHandler() {
  var goBack = document.getElementById("go-back");
  var clearHighscores = document.getElementById("clear-button");
  goBack.addEventListener("click", function () {
    clearHighscores.setAttribute("style","display: none");
    var place = document.getElementById("score-button");
    place.setAttribute("style", "display: flex; flex-direction: column");
    var state = paragraph.getAttribute("data-state");
    if (state === "hidden") {
      paragraph.setAttribute("data-state", "visible");
      paragraph.setAttribute("style", "display: flex");
    }
    var scoreList = document.getElementById("score-list");
    scoreList.innerHTML = "";
    var li = document.querySelectorAll(".user_info");
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("style","display: none");
    }
    var message = document.querySelector("#title");
    message.textContent = "";
    goBack.setAttribute("style", "display:none");
    var score = document.getElementById("final_score");
    score = 0;
    timeleft = 60;
    answer = [];
    clearInterval(timerInterval);
    quizOver = false;
    startQuiz();
  });
  clearHighscores.addEventListener("click", function()  {
    var userInfos = [];
    localStorage.setItem("userInfos", JSON.stringify(userInfos));
    var li = document.querySelectorAll(".user_info");
    for (var i = 0; i < li.length; i++) {
        li[i].innerHTML="";
        li[i].setAttribute("style","display: none");
    }
    var ul = document.getElementById("score-list");
    ul.innerHTML ="";
    var finalScore = document.getElementById("final_score");
    finalScore.textContent = ""; 
    var userscore = "";
    userscore = localStorage.getItem("score");
    

  })





}
function init() {
  var storedUser = JSON.parse(localStorage.getItem("userInfo"));

  if (storedUser !== null) {
    userInfos = storedUser;
  }
}

function sendLose() {
  quizOver = true;
  clearQuestion();
  timeleft = 0;
  var message = document.querySelector("#title");
  message.textContent =
    "Time's up! Try again next time. Hit the Restart botton to restart.";
  var restart = document.createElement("button");
  restart.textContent = "Re-start";
  restart.setAttribute("class", "button");
  restart.setAttribute("id", "re_start");
  document.body.appendChild(restart);
  restart.addEventListener("click", function () {
    var state = paragraph.getAttribute("data-state");
    if (state === "hidden") {
      paragraph.setAttribute("data-state", "visible");
      paragraph.setAttribute("style", "display: flex");
    }
    message.textContent = "";
    restart.setAttribute("style", "display:none");
    timeleft = 60;
    clearInterval(timerInterval);
    answer = [];
    quizOver = false;
    startQuiz();
  });
}

function clearQuestion() {
  timeEl.textContent = " ";
  var ul = document.querySelector("#question ul");
  ul.innerHTML = ""; // Clear the list items
  var title = document.getElementById("title");
  title.textContent = "";

  var right = document.querySelectorAll("h4");
  right.forEach(function (element) {
    element.textContent = "";
  });
}
init();
