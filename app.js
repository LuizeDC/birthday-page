
function learnName() {
  let name = prompt("What is your first name?");
  let heading = document.querySelector("h1");
  heading.innerHTML = "Hi " + name + "!";
}

learnName();
