import { ActionItem } from "../classes/ActionItem.js";
import { updateProgress } from "./_updateProgress.js";
import { changeUserName } from "./_changeUsername.js";

export const getData = () => {
  const actionItem = new(ActionItem)
  const data = JSON.parse(localStorage.getItem("uwaga"));
  const name = document.getElementById('name');
    if (data) {
      name.textContent = data.name;
      const actionList = data.items;
      actionList.map((action) => {
        actionItem.render(action.text, action.id, action.isCompleted, action.notes, action.isWebsite, action.url, action.favicon);
        updateProgress();
      });
    } else {
      changeUserName();
    }
  };