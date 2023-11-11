export class Note {
    constructor(_text) {
        this.text = _text,
        this.id = crypto.randomUUID();
    }

  add = (targetIcon, targetSibling, targetId) => {
    const notesExpandable = targetSibling.parentNode;
    let classList = targetIcon.classList;
    const addNoteModule = `<div class="task__addNote">
          <form class="note__submit">
          <textarea class="task__addNote--textarea" id="addnote" name="note" placeholder="add note or link for later. Press enter to add to action item."></textarea>
          </form>
          </div>`;

    this.change(targetIcon);

    if (!classList.contains("see-less")) {
      notesExpandable.classList.toggle("hidden");
      targetSibling.insertAdjacentHTML("afterend", addNoteModule);
      this.save(targetId, targetIcon, targetSibling);
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
  }

  change = (actionWrapper) => {
    const observer = new MutationObserver(() => {
      if(actionWrapper.classList.contains("add-show") && !actionWrapper.classList.contains("see-less")) {
          actionWrapper.innerHTML=`<img
          src="/assets/add.svg"
          alt="icon to add notes or links to task"
          />`
      } 
       if(actionWrapper.classList.contains("has-show") && !actionWrapper.classList.contains("see-less")) {
          actionWrapper.innerHTML=`<img
          src="/assets/see-more.svg"
          alt="icon to add notes or links to task"
          />`
      } if(actionWrapper.classList.contains("see-less")) {
          actionWrapper.innerHTML=`<img
          src="/assets/see-less.svg"
          alt=""
          />`;
      } 
    });
  
    observer.observe(actionWrapper, {
        attributeOldValue: true,
      attributes: true
    });
  };

  save = (targetId, targetIcon, wrapper) => {
    const noteForm = document.querySelector(".note__submit");
    const data = JSON.parse(localStorage.getItem("uwaga"));
    const notesWrapper = wrapper;
    const textArea = document.getElementById("addnote");
    const notesList = notesWrapper.childNodes;
    let toRender = false;
  
    textArea.addEventListener("keydown", (e) => {
      if (e.key == "Enter" && !e.shiftKey) {
        e.preventDefault();
        let noteText = noteForm.elements.namedItem("note").value;
        const note = new Note(noteText);
        data.items.map((action) => {
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
        targetIcon.classList.remove('add-show');
        targetIcon.classList.add('has-show');
        localStorage.setItem("uwaga", JSON.stringify(data));
        textArea.value = "";
      }
    });
  }
  
}
