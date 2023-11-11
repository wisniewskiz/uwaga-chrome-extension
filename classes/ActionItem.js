import { Note } from "./Note.js";

export class ActionItem {
  constructor(_text) {
    (this.text = _text),
      (this.id = crypto.randomUUID()),
      (this.isCompleted = false),
      (this.added = new Date().toString());
    (this.notes = []),
      (this.isWebsite = null),
      (this.url = null),
      (this.favicon = null);
  }
  add = (text) => {
    const newActionItem = new ActionItem(text);
    const data = JSON.parse(localStorage.getItem("uwaga"));
    data.items.push(newActionItem);
    const dataString = JSON.stringify(data);
    localStorage.setItem("uwaga", dataString);
    this.render(newActionItem);
  };

  delete = (id, targetWrapper) => {
    const data = JSON.parse(localStorage.getItem("uwaga"));

    data.items = data.items.filter((action) => action.id !== id);
    const dataString = JSON.stringify(data);
    localStorage.setItem("uwaga", dataString);
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

  complete = (id) => {;
    const data = JSON.parse(localStorage.getItem("uwaga"));
    data.items = data.items.map((action) => {
      if (action.id == id) {
        action.isCompleted = !action.isCompleted;
      }
      const dataString = JSON.stringify(data);
      localStorage.setItem("uwaga", dataString);
    });
  };

  linkFromTab = async (url, title, favicon) => {
    let newItem = new ActionItem(title);
    newItem.url = url;
    newItem.favicon = favicon;
    newItem.isWebsite = true;
    newItem.isCompleted = false;
    const data = JSON.parse(localStorage.getItem("uwaga"));

    data.items.push(newItem);
    const dataString = JSON.stringify(this.data);
    localStorage.setItem("uwaga", dataString);
    renderActionItem(newItem);
  };

  render = (actionItem) => {
    let taskContainer = document.querySelector(".tasks__container");
    let taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task__wrapper");

    let task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id", actionItem.id);

    let titleGroup = document.createElement("div");
    titleGroup.classList.add("task__title");

    let titleCheck = document.createElement("input");
    titleCheck.setAttribute("type", "checkbox");
    titleCheck.classList.add("task__title--check");

    let titleText = document.createElement("div");
    titleText.classList.add("task__title--text");
    if (actionItem.isWebsite) {
      titleText.innerHTML = `<img src="${actionItem.favicon}" class="task__title--favicon"><a href="${actionItem.url}" target="_blank">${actionItem.text}</a>`;
    } else {
      titleText.innerHTML = `<p class="action__text">${actionItem.text}</p>`;
    }

    let titleAction = document.createElement("div");
    titleAction.classList.add("task__title--action");
    let titleNotes = document.createElement("div");
    titleNotes.classList.add("task__title--action", "notes");
    if (!actionItem.notes || actionItem.notes.length == 0) {
      titleNotes.innerHTML = `<img
      src="/assets/add.svg"
      alt="icon to add notes or links to task"
      />`;
      titleNotes.classList.add("add-show");
    } else {
      titleNotes.innerHTML = `<img
      src="/assets/see-more.svg"
      alt="icon to add notes or links to task"
      />`;
      titleNotes.classList.add("has-show");
    }
    let titleDelete = document.createElement("div");
    titleDelete.classList.add("task__title--action", "deleteIcon");
    titleDelete.innerHTML = `<img src="/assets/delete.svg" alt="icon to delete task from list" class="deleteIcon"/>`;

    if (actionItem.isCompleted == true) {
      taskWrapper.classList.add("complete");
      titleCheck.checked = true;
    }

    let expandableNotes = document.createElement("div");
    expandableNotes.classList.add("expandable", "hidden");
    let noteWrapper = document.createElement("div");
    noteWrapper.classList.add("task__note--wrapper");

    titleGroup.appendChild(titleCheck);
    titleGroup.appendChild(titleText);
    task.appendChild(titleGroup);
    task.appendChild(titleAction);
    titleAction.appendChild(titleNotes);
    titleAction.appendChild(titleDelete);
    taskWrapper.appendChild(task);
    taskContainer.appendChild(taskWrapper);
    taskWrapper.appendChild(expandableNotes);
    expandableNotes.appendChild(noteWrapper);

    if (actionItem.notes) {
      for (let note of actionItem.notes) {
        let noteCard = document.createElement("div");
        noteCard.classList.add("task__note--card");
        noteCard.textContent = note.text;
        noteCard.setAttribute("id", note.id);
        noteWrapper.appendChild(noteCard);
      }
    }

    const animateDropIn = [
      { transform: `translateY(-${taskWrapper.offsetHeight}px)`, opacity: "0" },
      { transform: `translateY(0px)`, opacity: "1" },
    ];
    taskWrapper.animate(animateDropIn, { duration: 250 });

    titleNotes.addEventListener("click", (e) => {
      const note = new Note();
      const targetSibling =
        e.target.parentNode.parentNode.parentNode.nextElementSibling
          .childNodes[0];
      const targetIcon = e.target.parentNode;
      const targetId = e.target.parentNode.parentNode.parentNode.id;
      note.add(targetIcon, targetSibling, targetId);
    });

    titleDelete.addEventListener("click", (e) => {
      const target = e.target.parentNode.parentNode.parentNode;
      const targetWrapper = target.parentNode;
      this.delete(target.id, targetWrapper);
    });

    titleCheck.addEventListener("click", (e) => {
      const checked = e.target.checked;
      const target = e.target.parentNode.parentNode;
      this.complete(target.id, checked);
      target.parentNode.classList.toggle("complete");
    });
  };
}
