document.getElementById("create-note").addEventListener("click", (e) => {
  e.preventDefault();
  let textBoxValue = document.getElementById("type-notes").value;
  const notes = {
    id: Date.now(),
    date: getCurrentDate(),
    time: getTime(),
    textNote: textBoxValue
  };
  if (isTextBoxEmpty(textBoxValue)) {
    alert("Please enter some notes");
  } else {
    addNote(notes);
    resetTextBox();
  }
});

function isTextBoxEmpty(textBoxValue) {
  return textBoxValue === "" ? true : false;
}

function addNote(notes) {
  displayNote(notes);
  notesArray = getNotesFromLocalStorage();
  notesArray.push(notes);
  addNotesToLocalStorage(notesArray);
}

function displayNote(notes) {
  const div = createDivElement();
  const date = addDateToParaElement(notes);
  const time = addTimeToParaElement(notes);
  const text = addTextToParaElement(notes);
  const deleteDiv = createDeleteButton(notes);
  return document.getElementById("date-time-text-container").appendChild(div).append(date, time, text, deleteDiv);
}

function createDivElement() {
  const div = document.createElement("div");
  div.className = "child-of-date-time-text-container";
  return div;
}

function createParagraphElement() {
  return document.createElement("p");
}

function addDateToParaElement(notes) {
  const para = createParagraphElement();
  para.className = "date";
  para.textContent = notes.date;
  return para;
}

function getCurrentDate() {
  const dateObject = new Date();
  return `${(dateObject.getMonth() + 1)}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
}

function addTimeToParaElement(notes) {
  const paraTag = createParagraphElement();
  paraTag.className = "time";
  paraTag.textContent = notes.time;
  return paraTag;
}

function getTime() {
  const timeObject = new Date();
  let hour = timeObject.getHours();
  let minute = timeObject.getMinutes().toString().padStart(2, 0);
  let second = timeObject.getSeconds().toString().padStart(2, 0);
  let amPm = hour >= 12 ? "PM" : "AM";
  if (hour === 0) {
    return `${hour = 12}:${minute}:${second} ${amPm}`;
  }
  if (hour > 12) {
    return `${hour - 12}:${minute}:${second} ${amPm}`;
  }
  return `${hour}:${minute}:${second} ${amPm}`;
}

function addTextToParaElement(notes) {
  const paraElement = createParagraphElement();
  paraElement.className = "text";
  paraElement.textContent = notes.textNote;
  return paraElement;
}

function resetTextBox() {
  document.getElementById("type-notes").value = "";
}

function createDeleteButton(notes) {
  const deleteElement = document.createElement("button");
  deleteElement.id = "delete-note";
  deleteElement.innerHTML = "X";
  deleteElement.onclick = (e) =>{
    e.preventDefault();
    deleteNote(deleteElement, notes.id);
  }
  return deleteElement;
}

function deleteNote(deleteElement, id) {
  deleteElement.parentElement.remove();
  notesArray = getNotesFromLocalStorage();
  //not deleting the value from the local storage
  notesArray = notesArray.filter((deleteElement) => {
    // console.log(deleteElement.id !== id);
    return deleteElement.id !== id;
  });
}

function addNotesToLocalStorage(notes) {
  localStorage.setItem("note", JSON.stringify(notes));
}

function getNotesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("note")) || [];
}

























