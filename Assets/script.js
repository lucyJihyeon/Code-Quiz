

start = document.getElementById("start");
paragraph = document.querySelector(".paragraph");
second = document.querySelector(".second_question");
secondTitle = document.querySelector("#sc_title");
scOption = ["numbers and string", "other arrays" , "booleans", "all of the above"];
var scQuestion = [];



start.addEventListener("click", function()  {
   var state = paragraph.getAttribute("data-state");
   if (state === "visible") {
    paragraph.setAttribute("data-state", "hidden");
    paragraph.setAttribute("style", "display: none");
    //second.setAttribute("data-state", "visible");
    var scTest = document.createElement("section");
    scTest.setAttribute("id", "second-test");
    scTest.setAttribute("style", "display: flex; flex-direction: column; text-align: center");
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
    }

    
    
   }
})
/*
<figure class="second_question" data-state="hidden">
      <h1 id="sc_title"></h1>
      <ol id="sc_option"></ol>
    </figure>

secondTitle.textContent =" Array in JavaScript can be used to store";
*/