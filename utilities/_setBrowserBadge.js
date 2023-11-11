export const setBrowserBadge = (actionItems) => {
  chrome.action.setBadgeText({ text: actionItems });
  chrome.action.setBadgeBackgroundColor({ color: '#98A4BF'});
};
