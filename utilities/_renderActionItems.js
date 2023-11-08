import { deleteActionItem } from "./_deleteActionItem.js";
import { completeAction } from "./_completeActionItem.js";

export const renderActionItem = (name, id) => {
  let taskContainer = document.querySelector(".tasks__container");
  let task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("id", id);

  let title = document.createElement("div");
  title.classList.add("task__title");

  let titleCheck = document.createElement("input");
  titleCheck.setAttribute("type", "checkbox");
  // titleCheck.innerHTML = `<img src="/assets/checkmark.svg" class="hidden"/>`;
  titleCheck.classList.add("task__title--check");

  let titleText = document.createElement("div");
  titleText.classList.add("task__title--text");
  titleText.textContent = name;

  let titleAction = document.createElement("div");
  titleAction.classList.add("task__title--action");
  titleAction.innerHTML = `<img
  src="/assets/add.svg"
  alt="icon to add notes or links to task"
  /><img src="/assets/delete.svg" alt="icon to delete task from list" class="deleteIcon"/>`;

  title.appendChild(titleCheck);
  title.appendChild(titleText);
  task.appendChild(title);
  task.appendChild(titleAction);
  taskContainer.appendChild(task);

  const deleteIcon = titleAction.childNodes[1];
  deleteIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    deleteActionItem(target.id);
    target.remove();
  });

  titleCheck.addEventListener("click", (e) => {
    const checked = e.target.checked;
    const target = e.target.parentNode.parentNode;
    // console.log(checked, target.id);
    completeAction(target.id, checked);
    target.classList.toggle("complete");
  });
};
