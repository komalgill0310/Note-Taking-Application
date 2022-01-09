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

//append textAreaNode to listItem

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
  console.log(appendListItemToOrderList);
  return appendListItemToOrderList;
}

document.getElementById('create-note').addEventListener('click', (e) => {
appendListItemToOrderList();
});
