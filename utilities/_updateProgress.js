const actionList = document.querySelector(".tasks__container");
const progressPercent = document.querySelector(".progress__percent");
const progressFill = document.querySelector(".progress__indicator--fill");

import { setBrowserBadge } from "./_setBrowserBadge.js";

export const updateProgress = () => {
  const observer = new MutationObserver((mutations) => {
    const data = JSON.parse(localStorage.getItem("uwaga"));
    let actionItems = data.items;
    const totalItems = actionItems.length;
    setBrowserBadge(String(totalItems));
    let completedItems = 0;
    actionItems.map((item) => {
      if (item.isCompleted == true) {
        completedItems += 1;
      }
    });
    let percentComplete = Math.floor((completedItems / totalItems) * 100);
    if (totalItems == 0) {
      progressPercent.innerText = "You have no action items";
    } else {
      progressPercent.innerText = `${percentComplete}%`;
      progressFill.style.width = `${percentComplete}%`;
    }
  });

  observer.observe(actionList, {
    childList: true,
    attributes: true,
    subtree: true,
  });
};
