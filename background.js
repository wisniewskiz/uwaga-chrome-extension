import { ActionItem } from "./classes/ActionItem.js";
// import { updateProgress } from "./utilities/_updateProgress.js";

chrome.contextMenus.create({
  id: "linkSiteMenu",
  title: "Link site for later",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const newActionItem = new ActionItem(tab.title);
  console.log(newActionItem);
});
