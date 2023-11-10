export const deleteActionItem = (id, targetWrapper) => {
  const data = JSON.parse(localStorage.getItem("uwaga"));
  data._items = data._items.filter((action) => action.id !== id);
  const updateData = JSON.stringify(data);
  localStorage.setItem("uwaga", updateData);
  targetWrapper.animate(
    [
      { transform: "translateX(0px)", opacity: "1" },
      {
        transform: `translateX(-${targetWrapper.offsetWidth}px)`,
        opacity: "0",
      },
    ],
    {
      duration: 500,
    }
  );
  setTimeout(() => {
    targetWrapper.remove();
  }, 450);
};
