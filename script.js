document.getElementById('create-note').addEventListener('click', (e) => {
  e.preventDefault();
  if (document.getElementById("type-notes").value === "") {
    alert("Please Fill out this Field!");
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
  return document.getElementById("date-time-text-container").appendChild(div).append(date, time, text);
}

function createDivElement() {
  const div = document.createElement("div");
  div.setAttribute("class", "div")
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
  if (hour === 0) {
    return `${hour = 12}:${minute}:${second} AM`;
  }
  if (hour > 12) {
    return `${hour - 12}:${minute}:${second} PM`;
  }
  return `${hour}:${minute}:${second} AM`;
}

function addTextToParaElement() {
  const paraElement = createParagraphElement();
  paraElement.textContent = document.getElementById('type-notes').value;;
  return paraElement;
}

function resetTextBox() {
  const textBox = document.getElementById("type-notes");
  textBox.value = "";
  return textBox;
}













































