function clickMe() {
  let name = prompt("What is your name?");
  let button = document.querySelector("button");
  button.innerHTML =
    "Hi " + name + "!" + " <br> I am celebrating my birthday on 03/19";
}

let clickMeButton = document.querySelector("button");
clickMeButton.addEventListener("click", clickMe);

function learnName() {
  let name = prompt("What is your first name?");
  let heading = document.querySelector("h1");
  heading.innerHTML = "Hi " + name + "!";
}

learnName();
