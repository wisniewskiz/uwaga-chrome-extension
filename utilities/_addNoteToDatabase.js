export const addNoteToDatabase = (targetId) => {
  const noteForm = document.querySelector(".note__submit");
  const data = JSON.parse(localStorage.getItem("uwaga"));

  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const noteText = noteForm.elements.namedItem("note").value;
    console.log(noteText);
    data._items.map((action) => {
      if (action.id == targetId) {
        action.notes.push(noteText);
        console.log(action);
      }
    });
    const update = JSON.stringify(data);
    localStorage.setItem("uwaga", update);
  });
};
