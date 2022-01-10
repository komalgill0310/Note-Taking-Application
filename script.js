function createOrderedList() {
  let ol = document.createElement('ol');
  ol.setAttribute('id', 'order-list');
  let orderList = document.body.appendChild(ol);
  return orderList;
}

function createListItem() {
  let li = document.createElement('li');
  return li;
}

function createTextAreaTextNode() {
  let textArea = document.getElementById('type-notes');
  let textAreaValue = textArea.value;
  let textAreaNode = document.createTextNode(textAreaValue);
  return textAreaNode;
}

function appendTextAreaNodeToListItem() {
  let listItem = createListItem();
  let textNode = createTextAreaTextNode();
  let appendNodeToList = listItem.appendChild(textNode);
  return appendNodeToList;
}

function appendListItemToOrderList() {
  let orderList = createOrderedList();
  let nodeListItem = appendTextAreaNodeToListItem();
  let appendListItemToOrderList = orderList.appendChild(nodeListItem);
  // console.log(appendListItemToOrderList);
  return appendListItemToOrderList;
}

function getCurrentDate() {
  const d = new Date();
  let month = d.getMonth() + 1;
  let date = month + '/' + d.getDate() + '/' + d.getFullYear();
  // console.log(date);
  return date;
}

function createDateTextNode() {
  let dateReference = getCurrentDate();
  let dateTextNode = document.createTextNode(dateReference);
  // console.log(dateTextNode);
  return dateTextNode;
}

function appendDateToListItem() {
  let itemList = createListItem();
  let currentDate = createDateTextNode();
  let appendDateToItemList = itemList.appendChild(currentDate);
  // console.log(appendDateToItemList);
  return appendDateToItemList;
}

function appendDateListItemToOrderList() {
  let orderedList = createOrderedList();
  let dateListItem = appendDateToListItem();
  let appendDateListToOrderList = orderedList.appendChild(dateListItem);
  // console.log(appendDateListToOrderList);
  return appendDateListToOrderList;
}

function getCurrentHour() {
  const d = new Date();
  let h = d.getHours();
  if (h === 0) {
    h = 12;
  }
  else {
    h = h - 12;
  }
  // console.log(h);
  return h;
}

function getCurrentMinute() {
  const d = new Date();
  let min = d.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  else {
    min = `${min}`;
  }
  // console.log(min);
  return min;
}
// getCurrentMinute();

function getCurrentSecond() {
  const d = new Date();
  let sec = d.getSeconds();
  if (sec < 10) {
    sec = `0${sec}`;
  }
  else {
    sec = `${sec}`;
  }
  // console.log(sec);
  return sec;
}

// getCurrentSecond();

function getCurrentTime() {
  const d = new Date();
  let hour = getCurrentHour();
  let minute = getCurrentMinute();
  let second = getCurrentSecond();
  let currentTime;
  if (hour >= 12) {
    currentTime = hour + ':' + minute + ':' + second + ' AM';
  }
  else {
    currentTime = hour + ':' + minute + ':' + second + ' PM';
  }
  // console.log(currentTime);
  return currentTime;
}

// getCurrentTime();

function createTimeTextNode() {
  let time = getCurrentTime();
  let timeTextNode = document.createTextNode(time);
  // console.log(timeTextNode);
  return timeTextNode;
}

function appendTimeToListItem() {
  let list = createListItem();
  let timeNode = createTimeTextNode();
  let addTimeToList = list.appendChild(timeNode);
  // console.log(addTimeToList);
  return addTimeToList;
}

function addTimeListToOrderList() {
  let listOfOrder = createOrderedList();
  let timeList = appendTimeToListItem();
  let addListTimeToOrderList = listOfOrder.appendChild(timeList);
  // console.log(addListTimeToOrderList);
  return addListTimeToOrderList;
}
let textBox = document.getElementById('type-notes');
function resetTextArea() {
  // let textBox = document.getElementById('type-notes');
  textBox.value = '';
  return textBox;
}

document.getElementById('create-note').addEventListener('click', (e) => {
  if(textBox.value === ''){
   return;
  }
  else{
  appendDateListItemToOrderList();
  addTimeListToOrderList();
  appendListItemToOrderList();
  resetTextArea();
  }
});

