let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  function deleteListItem() {
    li.classList.add("delete");
  }
  dBtn.addEventListener("click", deleteListItem);
}
function inputLength() {
  return input.value.length;
}

function addAfterEnter() {
  if (inputLength() > 0 && event.which == 13) {
    createListElement();
  }
}
enterButton.addEventListener("click", createListElement);
input.addEventListener("keypress",addAfterEnter)