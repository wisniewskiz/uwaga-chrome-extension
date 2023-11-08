import { renderActionItem } from "./_renderActionItems.js";

export const getData = (data) => {

    if (data) {
      const actionList = data._items;
      actionList.map((action) => {
        renderActionItem(action.text, action.id);
      });
    } else {
      let user = new User();
      user = JSON.stringify(user);
      localStorage.setItem("uwaga", user);
    }
  };