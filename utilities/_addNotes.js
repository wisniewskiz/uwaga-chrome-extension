import { changeNoteInput } from "./_changeNoteInput.js";
import { addNoteToDatabase } from "./_addNoteToDatabase.js";

export const addNotes = (targetIcon, targetSibling, targetId) => {
  const notesWrapper = targetSibling.childNodes[1];
  let classList = targetIcon.classList;
  const addNoteModule = `<div class="task__addNote">
    <form class="note__submit">
    <textarea class="task__addNote--textarea" id="addnote" name="note" placeholder="add note or link for later. Press enter to add to action item."></textarea>
    </form>
    </div>`;

    changeNoteInput(targetIcon);

  if (!classList.contains("see-less")) {
    notesWrapper.classList.toggle("hidden");
    targetSibling.insertAdjacentHTML("beforeend", addNoteModule);
    addNoteToDatabase(targetId, targetIcon);
    targetIcon.classList.add("see-less");
  } else if (
    classList.contains("add-show") ||
    (classList.contains("has-show") && classList.contains("see-less"))
  ) {
    notesWrapper.classList.toggle("hidden");
    const noteModule = document.querySelector(".task__addNote");
    noteModule.remove();
    targetIcon.classList.remove("see-less");
  }
  
};
