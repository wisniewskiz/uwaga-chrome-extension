import { Note } from "../classes/Note.js";

export const addNoteToDatabase = (targetId) => {
  const noteForm = document.querySelector(".note__submit");
  const data = JSON.parse(localStorage.getItem("uwaga"));
  const notesWrapper =
    document.getElementById(targetId).parentElement.childNodes[1];
  const textArea = document.getElementById("addnote");
  const notesList = notesWrapper.childNodes;
  let toRender = false;

  noteForm.addEventListener("submit", (e) => {});

  textArea.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      let noteText = noteForm.elements.namedItem("note").value;
      const note = new Note(noteText);
      data._items.map((action) => {
        if (action.id == targetId) {
          action.notes.push(note);
          for (let renderedNote of notesList) {
            const id = renderedNote.attributes.id.value;
            if (id != note.id) {
              toRender = true;
            }
          }
          if (toRender || notesList.length == 0) {
            let noteCard = document.createElement("div");
            noteCard.classList.add("task__note--card");
            noteCard.textContent = note.text;
            noteCard.setAttribute("id", note.id);
            notesWrapper.appendChild(noteCard);
          }
        }
      });
      const update = JSON.stringify(data);
      localStorage.setItem("uwaga", update);
      textArea.value = "";
    }
  });
};
