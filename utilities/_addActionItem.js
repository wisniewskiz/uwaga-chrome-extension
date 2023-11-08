import { renderActionItem } from "./_renderActionItems.js";

import { ActionItem } from "../classes/ActionItem.js";

export const addActionItem = (value, data) => {
  let newItem = new ActionItem(value);
  renderActionItem(newItem.text, newItem.id)
  data._items.push(newItem);
  const update = JSON.stringify(data);
  localStorage.setItem("uwaga", update);
  // const toRemove = document.getElementById(newItem.id);
  // console.log(toRemove);
};
