"use strict";
const ulBoard = document.querySelector(".board");
const textInput = document.querySelector(".textInput");
const inputButton = document.querySelector(".fa-plus-circle");
const trashButton = document.querySelector(".fa-trash-alt");

function removeElement(element) {
  element.parentNode.remove();
}

function outputText() {
  if (textInput.innerText !== "") {
    ulBoard.insertAdjacentHTML(
      "beforeend",
      `<li class="text" 
  style="padding: 0; 
  display: flex; 
  justify-content:space-between;
  align-items: center;">
  <span class="textOutput"
  style="word-break: break-word; padding: 4px 0; 
  ">${textInput.innerText}</span>
  <i class="fas fa-trash-alt" onclick="removeElement(this)"
  onMouseOver="this.style.color='red'"
onMouseOut="this.style.color='black'"></i>
</li>`
    );
  }
  textInput.innerText = "";
}

inputButton.addEventListener("click", () => {
  outputText();
});

textInput.addEventListener("keypress", function (element) {
  if (element.keyCode != 13) {
    return;
  } else if (element.keyCode == 13) {
    outputText();
  }
  element.preventDefault();
});
