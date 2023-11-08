import { renderActionItem } from "./_renderActionItems.js";
import { ActionItem } from "../classes/ActionItem.js";

export const addActionItem = (value) => {
  const data = JSON.parse(localStorage.getItem("uwaga"));
  let newItem = new ActionItem(value);
  data._items.push(newItem);
  const update = JSON.stringify(data);
  localStorage.setItem("uwaga", update);
  renderActionItem(newItem.text, newItem.id)
};
