import { changeNoteInput } from "./_changeNoteInput.js";
import { addNoteToDatabase } from "./_addNoteToDatabase.js";

export const addNotes = (targetIcon, targetSibling, targetId) => {
  const taskWrapper = document.querySelector('.task__wrapper');
  console.log(taskWrapper);
  const notesExpandable = targetSibling.parentNode;
  let classList = targetIcon.classList;
  const addNoteModule = `<div class="task__addNote">
    <form class="note__submit">
    <textarea class="task__addNote--textarea" id="addnote" name="note" placeholder="add note or link for later. Press enter to add to action item."></textarea>
    </form>
    </div>`;

  changeNoteInput(targetIcon);

  if (!classList.contains("see-less")) {
    notesExpandable.classList.toggle("hidden");
    targetSibling.insertAdjacentHTML("afterend", addNoteModule);
    addNoteToDatabase(targetId, targetIcon, targetSibling);
    targetIcon.classList.add("see-less");

  } else if (
    classList.contains("add-show") ||
    (classList.contains("has-show") && classList.contains("see-less"))
  ) {
    notesExpandable.classList.toggle("hidden");
    const noteModule = document.querySelector(".task__addNote");
    noteModule.remove();
    targetIcon.classList.remove("see-less");
  }
};
