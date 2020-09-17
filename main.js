"use strict";
const ulBoard = document.querySelector(".board");
const textInput = document.querySelector(".textInput");
const inputButton = document.querySelector(".fa-plus-circle");
const trashButton = document.querySelector(".fa-trash-alt");

function removeElement(element) {
  element.parentNode.remove();
}

function outputText() {
  ulBoard.insertAdjacentHTML(
    "beforeend",
    `<li class="text" style="
  padding: 0; 
  display: flex; 
  justify-content:space-between;
  align-items: center;">
  <span class="textOutput" style="white-space:nowrap;
  padding: 4px 0; 
  overflow: hidden;
  text-overflow:ellipsis;">${textInput.innerText}</span>
  <i class="fas fa-trash-alt" onclick="removeElement(this)"
  onMouseOver="this.style.color='red'"
onMouseOut="this.style.color='black'"></i></li>`
  );
  textInput.innerText = "";
}

inputButton.addEventListener("click", () => {
  if (textInput.innerText !== "") {
    outputText();
  }
});

textInput.addEventListener("keydown", function (element) {
  if (element.keyCode != 13) {
    return;
  } else if (element.keyCode == 13) {
    if (textInput.innerText !== "") {
      outputText();
    }
  }
  element.preventDefault();
});
