document.getElementById('create-note').addEventListener('click', (e) => {
  e.preventDefault();
  addDateToParaElement();
  addTimeToParaElement();
  addTextToParaElement();
});

function createParagraphElement(){
  return document.createElement("p");   
}

function getCurrentDate() {
  const dateObject = new Date();
  return `${(dateObject.getMonth() + 1)}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
}

function addDateToParaElement(){
const para = createParagraphElement();
const date = getCurrentDate();
para.setAttribute("id", "para-date");
let dateNode = document.createTextNode(date);
para.appendChild(dateNode);
return document.getElementById("date-time-text-container").appendChild(para);
}

function getTime() {
  const timeObject = new Date();
  let hour = timeObject.getHours();
  let minute = timeObject.getMinutes();
  let second = timeObject.getSeconds();
  minute = checkMinuteSecond(minute);
  second = checkMinuteSecond(second);
  if (hour === 0) {
    return `${hour = 12}:${minute}:${second} AM`;
  }
  if (hour > 12) {
    return `${hour - 12}:${minute}:${second} PM`;
  }
  return `${hour}:${minute}:${second} AM`;
}

function checkMinuteSecond(time) {
  return (time < 10) ? `0${time}` : `${time}`;
}

function addTimeToParaElement() {
  const paraTag = createParagraphElement();
  paraTag.setAttribute("id", "para-time");
  const time = getTime();
  const timeNode = document.createTextNode(time);
  paraTag.appendChild(timeNode);
  return document.getElementById("date-time-text-container").appendChild(paraTag);
}

function addTextToParaElement() {
  const paraElement = createParagraphElement();
  paraElement.setAttribute("id", "para-text");
  const textNote = document.getElementById('type-notes').value;
  paraElement.textContent = textNote;
  return document.getElementById("date-time-text-container").appendChild(paraElement);
}

































// let textBox = document.getElementById('type-notes');

// document.getElementById('create-note').addEventListener('click', (e) => {
//   e.preventDefault();
//   if(textBox.value === ''){
//     alert('Please Fill out this field');
//     return;
//   }
//   else{
//   addDateToListItem();
//   addTimeToListItem();
//   addListItem();
//   resetTextBox();
//   }
// });

// // function createUnorderList(){
// //   const ul = docuemnt.createElement('ul');
// //   ul.setAttribute('id',)
// //   return ul;
// // }

// function createLi() {
//   const li = document.createElement('li');
//   li.setAttribute('id', 'list');
//   return li;
// }

// function addListItem(){
// const li = createLi();
// const textNote = document.getElementById('type-notes').value;
// li.textContent= textNote;
// document.getElementById('unorder-list').appendChild(li);
// }

// function getCurrentDate() {
//   const date = new Date();
//   let todaysDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
//   return todaysDate;
// }

// function addDateToListItem(){ 
//   let listTag = createLi();
//   let currentDate = getCurrentDate();
//   let dateNode = document.createTextNode(currentDate);
//   listTag.appendChild(dateNode);
//   document.getElementById('unorder-list').appendChild(listTag);
// }

// function time(){
//   const time = new Date();
//   let hour = time.getHours();
//   let minute = time.getMinutes();
//   let second = time.getSeconds();
//   minute = checkMinuteSecond(minute);
//   second = checkMinuteSecond(second);
//   let todaysTime;
//   if (hour === 0) {
//         hour = 12;
//         todaysTime = `${hour}:${minute}:${second} AM`;
//       }
//       else if (hour > 12 ) {
//         hour = hour - 12;
//         todaysTime = `${hour}:${minute}:${second} PM`;
//       }
//       else {
//         hour = hour;
//         todaysTime = `${hour}:${minute}:${second} AM`;
//       }
//     return todaysTime;
// }

// function checkMinuteSecond(time){
//   if(time<10){
//     time = `0${time}`;
//   }
//   return time;
// }

// function addTimeToListItem(){
//   const createList = createLi();
//   const currentTime = time();
//   let timeNode = document.createTextNode(currentTime);
//   createList.appendChild(timeNode);
//   return document.getElementById('unorder-list').appendChild(createList);

// }

// function resetTextBox(){
//   textBox.value = '';
//   // return textBox;
// }

// // function align(){
// //   console.log('align ran');
// //   return `${addDateToListItem()}, ${addTimeToListItem()}`; 
// // }










































// // // let textBox = document.getElementById('type-notes');
// // let ol = document.getElementById('order-list');

// // document.getElementById('create-note').addEventListener('click', (e) => {
// // //   if (textBox.value === '') {
// // //     return;
// // //   }
// // //   else {
// // //     appendDateListItemToOrderList();
// // //     addTimeListToOrderList();
// // //     appendListItemToOrderList();
// // //     // appendTimeToListItem();
// // //     // appendDateToListItem();
// // appendListItemToOrderList();
// // //     resetTextArea();
// // //   }
// // });

// // // function createOrderedList() {
// // //   let ol = document.createElement('ol');
// // //   ol.setAttribute('id', 'order-list');
// // //   let orderList = document.body.appendChild(ol);
// // //   return orderList;
// // // }

// // function createListItem() {
// //   let li = document.createElement('li');
// //   return li;
// // }

// // // function appendListItemToOrderList() {
// // //   let orderList = createOrderedList();
// // //   let list = createListItem();
// // //   let addListToOrderList = orderList.appendChild(list);
// // //   console.log('childList: ');
// // //   return addListToOrderList;
// // // }

// // // let listToOrderList = appendListItemToOrderList();

// // function createTextAreaTextNode() {
// //   let textArea = document.getElementById('type-notes');
// //   let textAreaValue = textArea.value;
// //   let textAreaNode = document.createTextNode(textAreaValue);
// //   return textAreaNode;
// // }

// // function appendTextAreaNodeToListItem() {
// //   let listItem = createListItem();
// //   // let listItem = appendListItemToOrderList();
// //   let textNode = createTextAreaTextNode();
// //   let appendNodeToList = listItem.appendChild(textNode);
// //   // let appendNodeToList = listToOrderList.appendChild(textNode);
// //   // console.log('appendNodeToList: ', appendNodeToList);
// //   return appendNodeToList;
// // }

// // function appendListItemToOrderList() {
// //   // let orderList = createOrderedList();
// //   let nodeListItem = appendTextAreaNodeToListItem();
// //   // let appendListItemToOrderList = listToOrderList.appendChild(nodeListItem);
// //   let appendListItemToOrderList = ol.appendChild(nodeListItem);
// //   console.log('appendListItemToOrderList: ', appendListItemToOrderList);
// //   return appendListItemToOrderList;
// // }

// // function getCurrentDate() {
// //   const d = new Date();
// //   let month = d.getMonth() + 1;
// //   let date = month + '/' + d.getDate() + '/' + d.getFullYear();
// //   // console.log(date);
// //   return date;
// // }

// // function createDateTextNode() {
// //   let dateReference = getCurrentDate();
// //   let dateTextNode = document.createTextNode(dateReference);
// //   // console.log(dateTextNode);
// //   return dateTextNode;
// // }

// // function appendDateToListItem() {
// //   let itemList = createListItem();
// //   // let itemList = appendListItemToOrderList();
// //   let currentDate = createDateTextNode();
// //   let appendDateToItemList = itemList.appendChild(currentDate);
// //   // let appendDateToItemList = listToOrderList.appendChild(currentDate);
// //   // console.log('appendDateToItemList: ', appendDateToItemList);
// //   return appendDateToItemList;
// // }

// // function appendDateListItemToOrderList() {
// //   // let orderedList = createOrderedList();
// //   let dateListItem = appendDateToListItem();
// //   let appendDateListToOrderList = listToOrderList.appendChild(dateListItem);
// //   console.log('appendDateListToOrderList: ', appendDateListToOrderList);
// //   return appendDateListToOrderList;
// // }

// // function getCurrentHour() {
// //   const d = new Date();
// //   let h = d.getHours();
// //   if (h === 0) {
// //     h = 12;
// //   }
// //   else if (h > 12) {
// //     h = h - 12;
// //   }
// //   else {
// //     h = h;
// //   }
// //   // console.log(h);
// //   return h;
// // }

// // function getCurrentMinute() {
// //   const d = new Date();
// //   let min = d.getMinutes();
// //   if (min < 10) {
// //     min = `0${min}`;
// //   }
// //   else {
// //     min = `${min}`;
// //   }
// //   // console.log(min);
// //   return min;
// // }
// // // getCurrentMinute();

// // function getCurrentSecond() {
// //   const d = new Date();
// //   let sec = d.getSeconds();
// //   if (sec < 10) {
// //     sec = `0${sec}`;
// //   }
// //   else {
// //     sec = `${sec}`;
// //   }
// //   // console.log(sec);
// //   return sec;
// // }

// // // getCurrentSecond();

// // function getCurrentTime() {
// //   const d = new Date();
// //   let hour = getCurrentHour();
// //   let minute = getCurrentMinute();
// //   let second = getCurrentSecond();
// //   let currentTime;
// //   if (hour >= 12) {
// //     currentTime = hour + ':' + minute + ':' + second + ' AM';
// //   }
// //   else {
// //     currentTime = hour + ':' + minute + ':' + second + ' PM';
// //   }
// //   // console.log(currentTime);
// //   return currentTime;
// // }

// // // getCurrentTime();

// // function createTimeTextNode() {
// //   let time = getCurrentTime();
// //   let timeTextNode = document.createTextNode(time);
// //   // console.log(timeTextNode);
// //   return timeTextNode;
// // }

// // function appendTimeToListItem() {
// //   let list = createListItem();
// //   // let list = appendListItemToOrderList();
  
// //   let timeNode = createTimeTextNode();
// //   let addTimeToList = list.appendChild(timeNode);
// //   // let addTimeToList = listToOrderList.appendChild(timeNode);
// //   // console.log('addTimeToList: ', addTimeToList);
// //   return addTimeToList;
// // }

// // function addTimeListToOrderList() {
// //   // let listOfOrder = createOrderedList();
// //   let timeList = appendTimeToListItem();
// //   let addListTimeToOrderList = listOfOrder.appendChild(timeList);
// //   console.log('addListTimeToOrderList: ', addListTimeToOrderList);
// //   return addListTimeToOrderList;
// // }

// // function resetTextArea() {
// //   // let textBox = document.getElementById('type-notes');
// //   textBox.value = '';
// //   return textBox;
// // }



