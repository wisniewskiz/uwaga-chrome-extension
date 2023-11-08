export const deleteActionItem = (data) => {
  let deleteIcons = document.querySelectorAll(".deleteIcon");
  for (let icon of deleteIcons) {
    icon.addEventListener("click", () => {
      const actionItemId = icon.parentNode.parentNode.id;
      const toRemove = document.getElementById(actionItemId);
      data._items = data._items.filter((action) => action.id !== actionItemId);
      const update = JSON.stringify(data);
      localStorage.setItem("uwaga", update);
      toRemove.remove();
    });
  }
};
