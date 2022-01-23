document.getElementById("create-note").addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("type-notes").value === "") {
    alert("Please Click on CREATE NOTE Button to enter your note in the text field!");
    return;
  }
  appendDateTimeTextToDivElement();
  resetTextBox();
});

function appendDateTimeTextToDivElement() {
  const div = createDivElement();
  const date = addDateToParaElement();
  const time = addTimeToParaElement();
  const text = addTextToParaElement();
  const deleteDiv =deleteNote();
  return document.getElementById("date-time-text-container").appendChild(div).append(date, time, text, deleteDiv);
}

function createDivElement() {
  const div = document.createElement("div");
  div.setAttribute("class", "child-of-date-time-text-container")
  return div;
}

function createParagraphElement() {
  return document.createElement("p");
}

function addDateToParaElement() {
  const para = createParagraphElement();
  para.setAttribute("class", "date");
  para.textContent = getCurrentDate();
  return para;
}

function getCurrentDate() {
  const dateObject = new Date();
  return `${(dateObject.getMonth() + 1)}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
}

function addTimeToParaElement() {
  const paraTag = createParagraphElement();
  paraTag.setAttribute("class", "time");
  paraTag.textContent = getTime();
  return paraTag;
}

function getTime() {
  const timeObject = new Date();
  let hour = timeObject.getHours();
  let minute = timeObject.getMinutes().toString().padStart(2, 0);
  let second = timeObject.getSeconds().toString().padStart(2, 0);
  let amPm =  hour >= 12? "PM":"AM";
  if (hour === 0) {
    return `${hour = 12}:${minute}:${second} ${amPm}`;
  }
  if (hour > 12) {
    return `${hour - 12}:${minute}:${second} ${amPm}`;
  }
  return `${hour}:${minute}:${second} ${amPm}`;
}

function addTextToParaElement() {
  const paraElement = createParagraphElement();
  paraElement.setAttribute("class", "text");
  paraElement.textContent = document.getElementById('type-notes').value;;
  return paraElement;
}

function resetTextBox() {
  const textBox = document.getElementById("type-notes");
  textBox.value = "";
  return textBox;
}

//could not figure out: How to create seperate function for deleting the parent Div, when clicked on Delete Button?
function deleteNote() {
  const deleteElement = document.createElement("button");
  deleteElement.setAttribute("id", "delete-note");
  deleteElement.innerHTML = "X";
  deleteElement.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("child-of-date-time-text-container")) {
      e.target.parentElement.remove();
    }
  });
  return deleteElement;
}






























