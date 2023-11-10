import { renderActionItem } from "./_renderActionItems.js";
import { ActionItem } from "../classes/ActionItem.js";

export const addLink = async (url, title, favicon) => {
  const data = JSON.parse(localStorage.getItem("uwaga"));
  let newItem = new ActionItem(title);
  newItem.notes = null
  newItem.url = url;
  newItem.favicon = favicon;
  newItem.isWebsite = true;
  newItem.isCompleted = false;
  console.log(newItem);
  data._items.push(newItem);
  const update = JSON.stringify(data);
  localStorage.setItem("uwaga", update);
  renderActionItem(newItem.text, newItem.id, newItem.isCompleted, newItem.notes, newItem.isWebsite, newItem.url, newItem.favicon);
};
