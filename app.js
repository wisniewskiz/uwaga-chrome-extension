import { getData } from "./utilities/_getData.js";
import { renderActionItem } from "./utilities/_renderActionItems.js";
import { addActionItem } from "./utilities/_addActionItem.js";
import { deleteActionItem } from "./utilities/_deleteActionItem.js";

const data = JSON.parse(localStorage.getItem("uwaga"));

getData(data);

let addItem = document.querySelector(".form__submit");

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemText = addItem.elements.namedItem("taskname").value;
  addActionItem(itemText, data);
  addItem.elements.namedItem("taskname").value = "";
});

deleteActionItem(data);
