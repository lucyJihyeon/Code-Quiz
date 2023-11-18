

var start = document.getElementById("start");
var paragraph = document.querySelector(".paragraph");
var secondTitle = document.querySelector("#sc_title");
var scOption = ["1. numbers and string", "2. other arrays" , "3. booleans", "4. all of the above"];
var timeEl = document.getElementById("time");
var rightanswers = ["4. all of the above"];
var scAnswer = [];
var timeleft = 60;



start.addEventListener("click", function()  {
   var state = paragraph.getAttribute("data-state");
   if (state === "visible") {
    paragraph.setAttribute("data-state", "hidden");
    paragraph.setAttribute("style", "display: none");
    //second.setAttribute("data-state", "visible");
    var scTest = document.createElement("section");
    scTest.setAttribute("id", "second-test");
    scTest.setAttribute("style", "display: flex; flex-direction: column;");
    var scTitle = document.createElement("h1");
    scTitle.textContent = "Array in JavaScript can be used to store";
    var ul = document.createElement("ul");
    scTest.appendChild(scTitle);
    scTest.appendChild(ul);
    document.body.appendChild(scTest);
    for (var i = 0; i < scOption.length; i++)   {
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
})

function setTime () {
    var timerInterval = setInterval(function()  {
        if (timeleft > 0)   {
            timeleft--;
            timeEl.textContent = "Time: " + timeleft;
        }
        if(timeleft === 0)  {
            clearInterval(timerInterval);
            sendAlldone();
        }

    }, 1000);

}

function sendAlldone()  {
    timeEl.textContent = " ";
}

function rightAnswer() {
    var liElements = document.querySelectorAll("#second-test ul li");
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener("click", function(event) {
            var selectedAnswer = event.target.innerHTML;
            if (rightanswers.includes(selectedAnswer)) {
                var right = document.createElement("h4");
                right.textContent = "Correct!";
                right.setAttribute("style", "color: grey");
                document.body.appendChild(right);
            } else {
                var right = document.createElement("h4");
                right.textContent = "Wrong! -10s";
                timeleft -= 10;
                right.setAttribute("style", "color: grey");
                document.body.appendChild(right);
            }
        });
    }
}