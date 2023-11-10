import { User } from "../classes/User.js";
import { renderActionItem } from "./_renderActionItems.js";
import { updateProgress } from "./_updateProgress.js";
import { changeUserName } from "./_changeUsername.js";

export const getData = () => {
  const data = JSON.parse(localStorage.getItem("uwaga"));
  const name = document.getElementById('name');
    if (data) {
      name.textContent = data._name;
      const actionList = data._items;
      actionList.map((action) => {
        renderActionItem(action.text, action.id, action.isCompleted, action.notes, action.isWebsite, action.url, action.favicon);
        updateProgress();
      });
    } else {
      changeUserName();
    }
  };