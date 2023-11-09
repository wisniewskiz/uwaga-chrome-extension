export const completeAction = (id) => {
  const data = JSON.parse(localStorage.getItem('uwaga'));
  data._items = data._items.map((action) => {
    if (action.id == id) {
      action.isCompleted = !action.isCompleted;
    }
    const updateData = JSON.stringify(data);
    localStorage.setItem("uwaga", updateData);
  })
};
