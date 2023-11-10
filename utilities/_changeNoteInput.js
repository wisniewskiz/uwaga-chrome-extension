export const changeNoteInput = (actionWrapper) => {
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
