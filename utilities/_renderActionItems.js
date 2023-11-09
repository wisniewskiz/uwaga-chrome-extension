import { addNotes } from "./_addNotes.js";
import { deleteActionItem } from "./_deleteActionItem.js";
import { completeAction } from "./_completeActionItem.js";

export const renderActionItem = (name, id, isCompleted, notes) => {
  let taskContainer = document.querySelector(".tasks__container");
  let taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task__wrapper");
  let task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("id", id);

  let titleGroup = document.createElement("div");
  titleGroup.classList.add("task__title");

  let titleCheck = document.createElement("input");
  titleCheck.setAttribute("type", "checkbox");
  titleCheck.classList.add("task__title--check");

  let titleText = document.createElement("div");
  titleText.classList.add("task__title--text");
  titleText.textContent = name;

  let titleAction = document.createElement("div");
  titleAction.classList.add("task__title--action");
  let titleNotes = document.createElement("div");
  titleNotes.classList.add("task__title--action", "notes");
  if (!notes || notes.length == 0) {
    titleNotes.innerHTML = `<img
    src="/assets/add.svg"
    alt="icon to add notes or links to task"
    />`;
    titleNotes.classList.add('add-show');
  } else {
    titleNotes.innerHTML = `<img
    src="/assets/see-more.svg"
    alt="icon to add notes or links to task"
    />`;
    titleNotes.classList.add('has-show')
  }
  let titleDelete = document.createElement("div");
  titleDelete.classList.add("task__title--action", "deleteIcon");
  titleDelete.innerHTML = `<img src="/assets/delete.svg" alt="icon to delete task from list" class="deleteIcon"/>`;

  if (isCompleted == true) {
    taskWrapper.classList.add("complete");
    titleCheck.checked = true;
  }

  let noteWrapper = document.createElement("div");
  noteWrapper.classList.add("task__note--wrapper", "hidden");


  titleGroup.appendChild(titleCheck);
  titleGroup.appendChild(titleText);
  task.appendChild(titleGroup);
  task.appendChild(titleAction);
  titleAction.appendChild(titleNotes);
  titleAction.appendChild(titleDelete);
  taskWrapper.appendChild(task);
  taskContainer.appendChild(taskWrapper);
  taskWrapper.appendChild(noteWrapper);
  
  if(notes) {
    for(let note of notes) {
      let noteCard = document.createElement("div");
      noteCard.classList.add("task__note--card");
      noteCard.textContent = note.text;
      noteCard.setAttribute("id", note.id)
      noteWrapper.appendChild(noteCard);
    }
  } 


  titleNotes.addEventListener("click", (e) => {
    const targetIcon = e.target.parentNode;
    const targetSibling = e.target.parentNode.parentNode.parentNode.parentNode;
    const targetId = e.target.parentNode.parentNode.parentNode.id;
    addNotes(targetIcon, targetSibling, targetId);
  });

  titleDelete.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode.parentNode;
    const targetWrapper = target.parentNode;
    deleteActionItem(target.id);
    targetWrapper.remove();
  });

  titleCheck.addEventListener("click", (e) => {
    const checked = e.target.checked;
    const target = e.target.parentNode.parentNode;
    completeAction(target.id, checked);
    target.parentNode.classList.toggle("complete");
  });
};
