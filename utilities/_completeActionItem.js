export const completeAction = (id, checked) => {
  const data = JSON.parse(localStorage.getItem('uwaga'));
  data._items = data._items.map((action) => {
    if (action.id == id) {
      action.isCompleted = !action.isCompleted;
      console.log(action.text, action.id, action.isCompleted);
    }
    const updateData = JSON.stringify(data);
    localStorage.setItem("uwaga", updateData);
  })
};
