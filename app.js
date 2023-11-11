import { getData } from "./utilities/_getData.js";
import { ActionItem } from "./classes/ActionItem.js";
import { updateProgress } from "./utilities/_updateProgress.js";
import { changeUserName } from "./utilities/_changeUsername.js";

const thisDay = new Date().toLocaleString("default", { day: "2-digit" });
const thisMonth = new Date().toLocaleString("default", { month: "short" });
document.querySelector(".header__date--day").textContent = thisDay;
document.querySelector(".header__date--month").textContent = thisMonth;

getData();

let addItem = document.querySelector(".form__submit");
addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  let newAction = new ActionItem();
 let text = addItem.elements.namedItem("taskname").value;
  addItem.elements.namedItem("taskname").value = "";
  newAction.add(text);
  console.log(newAction);
});

updateProgress();

// const addActionLink = document.querySelector(".action__button");
// addActionLink.addEventListener("click", async (e) => {
//   let queryOptions = { active: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   addLink(tab.url, tab.title, tab.favIconUrl);
// });

const name = document.getElementById("name");
name.addEventListener("click", (e) => {
  changeUserName();
});
