import { ActionItem } from "../classes/ActionItem.js";
import { changeUserName } from "./_changeUsername.js";
export const eventListeners = () => {

  let addItem = document.querySelector(".form__submit");
  addItem.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = addItem.elements.namedItem("taskname").value;
    let newAction = new ActionItem();
    addItem.elements.namedItem("taskname").value = "";
    newAction.add(text);
  });

  const addActionLink = document.querySelector(".action__button");
  addActionLink.addEventListener("click", async (e) => {
    const newAction = new ActionItem();
    let queryOptions = { active: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    newAction.linkFromTab(tab.url, tab.title, tab.favIconUrl);
  });

  const name = document.getElementById("name");
  name.addEventListener("click", (e) => {
    changeUserName();
  });
};
