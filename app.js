import { getData } from "./utilities/_getData.js";
import { addActionItem } from "./utilities/_addActionItem.js";
import { updateProgress } from "./utilities/_updateProgress.js";
import { addLink } from "./utilities/_addLink.js";

const thisDay = new Date().toLocaleString('default', {day: '2-digit'});
const thisMonth = new Date().toLocaleString('default', { month: 'short' });

document.querySelector('.header__date--day').textContent = thisDay;
document.querySelector('.header__date--month').textContent = thisMonth;

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
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  addLink(tab.url, tab.title, tab.favIconUrl);
});
