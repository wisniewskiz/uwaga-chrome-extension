import { getData } from "./utilities/_getData.js";
import { addActionItem } from "./utilities/_addActionItem.js";
import { updateProgress } from "./utilities/_updateProgress.js"

getData();


let addItem = document.querySelector(".form__submit");

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemText = addItem.elements.namedItem("taskname").value;
  addActionItem(itemText);
  addItem.elements.namedItem("taskname").value = "";
});

updateProgress();
