var start = document.getElementById("start");
var paragraph = document.querySelector(".paragraph");
var title = document.getElementById("title");
var ul = document.querySelector("ul");
var option = [];
var timeEl = document.getElementById("time");
var rightanswers = " ";
var timeleft = 60;
var timerInterval;
var quizOver = false;
var view = document.querySelector("a")
//When a user clicks "view HighScores", call renderUserInfo
view.addEventListener("click", function(event)   {
    event.preventDefault();
    renderUserInfo();
});

//startQuiz
startQuiz();


function startQuiz() {
  if (!quizOver) {
    //when a user clicks "start Quiz" button, the first page disappears, then 
    //the quiz starts displaying on the screen
    start.addEventListener("click", function () {
      var state = paragraph.getAttribute("data-state");
      if (state === "visible") {
        paragraph.setAttribute("data-state", "hidden");
        paragraph.setAttribute("style", "display: none");
        //Added question to the title element
        title.textContent = "Array in JavaScript can be used to store";
        //update the multichoice options 
        option = [
          "1. numbers and string",
          "2. other arrays",
          "3. booleans",
          "4. all of the above",
        ];
        //Create a <li> element inside of the <ul> element and add an option item to it 
        for (var i = 0; i < option.length; i++) {
          var li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML = li.innerHTML + option[i];
          li.setAttribute("style", " width: fit-content");
        }
        //updating the correct answer to the question
        rightanswers = "4. all of the above";
        //start the timer 
        setTime();
        //check if the user's choice is correct
        rightAnswer();
      }
    });
  }
}

//Create a timer
function setTime() {
  timerInterval = setInterval(function () {
    //every 1 second, subtract the time by 1
    if (timeleft > 0) {
      timeleft--;
      //update the time element 
      timeEl.textContent = "Time: " + timeleft;
    }
    //if the time hits zero, or negative by getting a wrong answer, then the timer stops
    //page redirects a user to a restarting page. 
    if (timeleft <= 0) {
      quizOver = true;
      clearInterval(timerInterval);
      sendLose();
    }
  }, 1000);
}

//ClickHandler function for the first question 
function answerClickHandler(event) {
  var selectedAnswer = event.target.innerHTML;
  if (rightanswers.includes(selectedAnswer)) {
    //if the user chooses the right answer, display "Correct!"
    var right = document.createElement("h4");
    right.textContent = "Correct!";
  } else {
    //if the user chooses the wrong answer, display "Wrong! -10s", then subtract the time by 10
    var right = document.createElement("h4");
    right.textContent = "Wrong! -10s";
    timeleft -= 10;
  }
  //Set a style for the right element
  right.setAttribute("style", "color: grey");
  document.body.appendChild(right);
  //wait for 1 second, then displays the next question. 
  setTimeout(function () {
    right.setAttribute("style", "display: none");
    secondQuestion();
  }, 1000);
}

//add event listener to each of the li elements.
function rightAnswer() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.addEventListener("click", answerClickHandler);
  });
}

//Second question
function secondQuestion() {
  if (!quizOver) {
    //updating the multichoices option. 
    var option = [
      "1. adding new items to the end of an array",
      "2. removing the last item of an array",
      "3. moving the last item of an array and create a new array with it",
      "4. moving the first ite of an array and create a new array with it",
    ];
    var secondTitle = document.querySelector("#title");
    var secondli = document.querySelectorAll("li");
    var right = document.querySelector("h4");
    //disappear the right element
    right.setAttribute("style", "display: none");
    //updating the title element
    secondTitle.textContent = "What does .push(); do in JavaScript?";
    //updating the li element 
    for (var i = 0; i < secondli.length; i++) {
      secondli[i].textContent = option[i];
    }
    //updating the right answer for the second question
    rightanswers = "1. adding new items to the end of an array";
    //check if the user's choice is correct 
    rightAnswer2();
  }
}
//click handler for the second question
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
    //wait for 1 second and display the next question
    thirdQuestion();
  }, 1000);
}

function rightAnswer2() {
  if (!quizOver) {
    var liElements = document.querySelectorAll("#question ul li");
    liElements.forEach(function (li) {
      //remove the previous event listener added to the li elements  
      li.removeEventListener("click", answerClickHandler);
      //add new event listener and new click handler for the second question
      li.addEventListener("click", answerClickHandler2);
    });
  }
}

//updating the title, questions, and the right answer for the third question
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
    //check if the user's choice is correct 
    rightAnswer3();
  }
}
//click handler for the third question
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
    //wait for 1 second and display the next question
    right.setAttribute("style", "display: none");
    fourthQuestion();
  }, 1000);
}

//remove the previous event listener added to the li elements  
//add new event listener and new click handler for the third queestion
function rightAnswer3() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler2);
    li.addEventListener("click", answerClickHandler3);
  });
}
//updating the title, questions, and the right answer for the fourth question
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
    //check if the user's choice is correct
    rightAnswer4();
  }
}
//click handler for the fourth quetion
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
  //wait for 1 second and display the next question
  setTimeout(function () {
    right.setAttribute("style", "display: none");
    fifthQuestion();
  }, 1000);
}
//remove the previous event listener added to the li elements  
//add new event listener and new click handler for the next queestion
function rightAnswer4() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler3);
    li.addEventListener("click", answerClickHandler4);
  });
}
//updating the title, questions, and the right answer for the fifth question
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
    //check if the user's choice is correct
    rightAnswer5();
  }
}
//click handler for the fifth question
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
  //wait for 1 second and display the next question
  setTimeout(function () {
    right.setAttribute("style", "display: none");
    sixthQuestion();
  }, 1000);
}
//remove the previous event listener added to the li elements  
//add new event listener and new click handler for the next queestion
function rightAnswer5() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler4);
    li.addEventListener("click", answerClickHandler5);
  });
}
//updating the title, questions, and the right answer for the fifth question
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
    //check if the user's choice is correct
    rightAnswer6();
  }
}
//click handler for the sixth question
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
  //wait for 1 second and display the next question
  setTimeout(function () {
    right.setAttribute("style", "display: none");
    seventhQuestion();
  }, 1000);
}

//remove the previous event listener added to the li elements  
//add new event listener and new click handler for the next queestion
function rightAnswer6() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler5);
    li.addEventListener("click", answerClickHandler6);
  });
}
//updating the title, questions, and the right answer for the fifth question
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
    //check if the user's choice is correct
    rightAnswer7();
  }
}
//click handler for the seventh question
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
  //if the user finishes all the question, wait for 1 second and call sendAlldone function
  setTimeout(function () {
    right.setAttribute("style", "display: none");
    sendAlldone();
  }, 1000);
}
//remove the previous event listener added to the li elements  
//add new event listener and new click handler for the next queestion
function rightAnswer7() {
  var liElements = document.querySelectorAll("#question ul li");
  liElements.forEach(function (li) {
    li.removeEventListener("click", answerClickHandler6);
    li.addEventListener("click", answerClickHandler7);
  });
}

//if the user finishes all the question, the user is prompted to enter their initials
function sendAlldone() {
  quizOver = true;
  //clear all the quetions 
  clearQuestion();
  //stops the timer
  clearInterval(timerInterval);
  var message = document.querySelector("#title");
  //update the title 
  message.textContent = "All Done!";
  var pEl = document.createElement("p");
  var finalScore = document.createElement("h3");
  //create a <h3> element and display the user's score 
  finalScore.textContent = "Your final score is " + (40 + timeleft);
  finalScore.setAttribute("id", "final_score");
  //add the <h3> inside of the <p> element 
  pEl.appendChild(finalScore);
  //set a style for the <h3> element
  pEl.setAttribute("style", "display: block; margin-top: 15px");
  document.body.appendChild(pEl);
  //store the user's score into the local storage.
  localStorage.setItem("score", 40 + timeleft);
  //promped the user to enter their initials 
  var initial = document.querySelectorAll(".initial");
  for (var i = 0; i < initial.length; i++) {
    initial[i].setAttribute("style", "display: inline-flex; margin-left: 5px");
    pEl.appendChild(initial[i]);
  }
  //call the scoresubmit function
  scoresubmit();
}

function scoresubmitHandler(event)  {
    //when the user hits submit, prevent default to aboid reloading the page.
    event.preventDefault();
    //store user's initials into a variable "userInitials"
    var userInitials = document.querySelector("#user_initials").value;
    var userscore = localStorage.getItem("score");
    //call the previous user's information from the local storage. if empty, returns to an empty array.
    var userInfos = JSON.parse(localStorage.getItem("userInfos")) || [];
    //add the current user's information 
    userInfos.push({
      initials: userInitials,
      score: userscore
    });
    //store the updated user's information into the local storage.
    localStorage.setItem("userInfos", JSON.stringify(userInfos));
    //displays the users' information
    renderUserInfo();
}

function scoresubmit() {
  //clear the final_score
  var score = document.getElementById("final_score");
  score.textContent = "";
  var submit = document.querySelector("#submit_button");
  //when the user clicks submit button, call scoresubmitHandler function
  submit.addEventListener("click", scoresubmitHandler);
  
}
function renderUserInfo() {
  //clear questions and title.
  clearQuestion();
  var title = document.getElementById("title");
  //update the title 
  title.textContent = "HighScores";
  //disappear the .initial class (user prompt to enter their initials)
  var initialsEl = document.querySelectorAll(".initial");
  for (var i = 0; i < initialsEl.length; i++) {
    initialsEl[i].setAttribute("style", "display:none");
  }
  //clear the final score (if it is not their first time try, there will be several elements.)
  var fscore = document.querySelectorAll("#final_score");
  for ( i = 0; i < fscore.length; i++)  {
  fscore[i].textContent = " ";
  }
  var ul = document.querySelector("#score-list");
  var userInfos = JSON.parse(localStorage.getItem("userInfos")) || [];
  //sort out the items in the userInfos by their score 
  userInfos.sort(function (a, b) {
    return b.score - a.score;
  });
  //according to the length of the userInfos, create <li> elements with their initials + score
  for (var i = 0; i < userInfos.length; i++) {
    var userInfo = userInfos[i];
    var li = document.createElement("li");
    li.textContent =
      i + 1 + ". Initials: " + userInfo.initials + ", Score: " + userInfo.score;
    li.setAttribute("class", "user_info");
    ul.appendChild(li);
  }
  //add a "Go Back" button
  var goBack = document.createElement("button");
  goBack.textContent = "Go Back";
  goBack.setAttribute("class", "button");
  goBack.setAttribute("id", "go-back");
  //add a "Clear Highscores" button
  var clearHighscores = document.createElement("button");
  clearHighscores.textContent = "Clear Highscores";
  clearHighscores.setAttribute("class", "button");
  clearHighscores.setAttribute("id", "clear-button");
  //add the two buttons to the score_button element.
  var place = document.getElementById("score-button");
  place.appendChild(goBack);
  place.appendChild(clearHighscores);
  place.setAttribute("style", "display: inline-flex");
  //call the buttonHandler function
  buttonHandler();
}

//button Handler for the clear button and the go back button
function buttonHandler() {
  var goBack = document.getElementById("go-back");
  var clearHighscores = document.getElementById("clear-button");
  goBack.addEventListener("click", function () {
    //when the user clicks the "Go Back" button, clear out the page.
    clearHighscores.setAttribute("style","display: none");
    var place = document.getElementById("score-button");
    place.setAttribute("style", "display: flex; flex-direction: column");
    //the first page re-appears 
    var state = paragraph.getAttribute("data-state");
    if (state === "hidden") {
      paragraph.setAttribute("data-state", "visible");
      paragraph.setAttribute("style", "display: flex");
    }
    //clear out the score-list
    var scoreList = document.getElementById("score-list");
    scoreList.innerHTML = "";
    //clear out the rendered user infos
    var li = document.querySelectorAll(".user_info");
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("style","display: none");
    }
    //clear out the title
    var message = document.querySelector("#title");
    message.textContent = "";
    //clear out the button
    goBack.setAttribute("style", "display:none");
    //update the value back to the default to re-start the quiz
    var score = document.getElementById("final_score");
    score = 0;
    timeleft = 60;
    answer = [];
    clearInterval(timerInterval);
    quizOver = false;
    //start the quiz again.
    startQuiz();
  });
  //if the user clicks the clear button call the function
  clearHighscores.addEventListener("click", function()  {
    //clear out the userinfos
    var userInfos = [];
    //store the updated userinfo into the local storage
    localStorage.setItem("userInfos", JSON.stringify(userInfos));
    //clear out the rendered user's info.
    var li = document.querySelectorAll(".user_info");
    for (var i = 0; i < li.length; i++) {
        li[i].innerHTML="";
        li[i].setAttribute("style","display: none");
    }
    var ul = document.getElementById("score-list");
    ul.innerHTML ="";
    
  })
}

function sendLose() {
  //update quizOver boolean value to stop the questions 
  quizOver = true;
  //clear all the questions
  clearQuestion();
  timeleft = 0;
  //update the title element 
  var message = document.querySelector("#title");
  message.textContent =
    "Time's up! Try again next time. Hit the Restart botton to restart.";
  //create a re-start button
  var restart = document.createElement("button");
  restart.textContent = "Re-start";
  restart.setAttribute("class", "button");
  restart.setAttribute("id", "re_start");
  document.body.appendChild(restart);
  //when the user clicks the restart button, call the function
  restart.addEventListener("click", function () {
    //the first page re-appears 
    var state = paragraph.getAttribute("data-state");
    if (state === "hidden") {
      paragraph.setAttribute("data-state", "visible");
      paragraph.setAttribute("style", "display: flex");
    }
    //clear out the title and the button
    message.textContent = "";
    restart.setAttribute("style", "display:none");
    //update the value back to the default to re-start the quiz
    timeleft = 60;
    clearInterval(timerInterval);
    answer = [];
    quizOver = false;
    //restart the quiz
    startQuiz();
  });
}
//function to clear out the title, the ul element, and the right elements.
function clearQuestion() {
  timeEl.textContent = " ";
  var ul = document.querySelector("#question ul");
  ul.innerHTML = ""; 
  var title = document.getElementById("title");
  title.textContent = "";

  var right = document.querySelectorAll("h4");
  right.forEach(function (element) {
    element.textContent = "";
  });
}

