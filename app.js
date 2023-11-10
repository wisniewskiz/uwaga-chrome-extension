import { getData } from "./utilities/_getData.js";
import { addActionItem } from "./utilities/_addActionItem.js";
import { updateProgress } from "./utilities/_updateProgress.js";
import { addLink } from "./utilities/_addLink.js";

getData();

let addItem = document.querySelector(".form__submit");

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemText = addItem.elements.namedItem("taskname").value;
  addActionItem(itemText);
  addItem.elements.namedItem("taskname").value = "";
});

updateProgress();

const addActionLink = document.querySelector(".action__button");
addActionLink.addEventListener("click", async (e) => {
  console.log("add link clicked");
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  addLink(tab.url, tab.title, tab.favIconUrl);
});
