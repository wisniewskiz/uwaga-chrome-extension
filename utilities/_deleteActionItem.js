export const deleteActionItem = (id) => {
  const data = JSON.parse(localStorage.getItem("uwaga"));
    data._items = data._items.filter((action) => action.id !== id);
    const updateData = JSON.stringify(data);
    localStorage.setItem("uwaga", updateData);
};
