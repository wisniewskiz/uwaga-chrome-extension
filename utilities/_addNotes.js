import { changeNoteInput } from "./_changeNoteInput.js";
import { addNoteToDatabase } from "./_addNoteToDatabase.js";



export const addNotes = (targetIcon, targetSibling, targetId) => {
  let classList = targetIcon.classList;
  const addNoteModule = `<div class="task__addNote">
    <form class="note__submit">
    <textarea class="task__addNote--textarea" id="addnote" name="note" placeholder="add note or link for later"></textarea>
    <button type="submit">for dev</button>
    </form>
    </div>`;

  changeNoteInput(targetIcon);

  if (!classList.contains("see-less")) {
    targetSibling.insertAdjacentHTML("afterend", addNoteModule);
    addNoteToDatabase(targetId);
    targetIcon.classList.add("see-less");
  } else if (classList.contains("add-show") && classList.contains("see-less")) {
    const noteModule = document.querySelector(".task__addNote");
    noteModule.remove();
    targetIcon.classList.remove("see-less");
  } else if (classList.contains("has-show") && classList.contains("see-less")) {
    console.log("test 3");
  }

};