function createOrderedList(){
let ol = document.createElement('ol');
// console.log(ol);
return ol;
}

// createOrderedList();

function createListItem(){
  let li = document.createElement('li');
  // console.log(li);
  return li;
}

// createListItem();

function appendListItemToOrderedList(){
  let orderList = createOrderedList();
  let listItem = createListItem();
  let appendListItem = orderList.appendChild(listItem);
  console.log(appendListItem);
  // return childListItem;
}

appendListItemToOrderedList();

// let textArea = document.getElementById('type-notes');
// // console.log(textArea);

// function appendTextAreaToListItem(){
//   let listItem = createListItem();
//   let appendTextArea = textArea.appendChild(listItem);
//   // console.log(appendTextArea);
//   return appendTextArea;
// }

// // appendTextAreaToListItem();

// function appendListItemToOrderedList(){
//   let appendTextAreaListItem = appendTextAreaToListItem();
//   let orderedList = createOrderedList();
//   let appendListItemToOrderedList = orderedList.appendChild(appendTextAreaListItem);
//   // console.log(appendListItemToOrderedList);
//   return appendListItemToOrderedList;
// }

// // appendListItemToOrderedList();

// let createNote = document.getElementById('create-note');

// createNote.addEventListener('click', (e) => {
// let x = appendListItemToOrderedList();
// console.log(x);
// });

