import { User } from "../classes/User.js";
import { renderActionItem } from "./_renderActionItems.js";
import { updateProgress } from "./_updateProgress.js";

export const getData = () => {
  const data = JSON.parse(localStorage.getItem("uwaga"));
    if (data) {
      const actionList = data._items;
      actionList.map((action) => {
        renderActionItem(action.text, action.id, action.isCompleted);
        updateProgress();
      });
    } else {
      let user = new User();
      user = JSON.stringify(user);
      localStorage.setItem("uwaga", user);
    }
  };