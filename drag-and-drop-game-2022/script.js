import {englishData, chineseData} from './data.js'

const draggableList = document.querySelector('.draggable-list')
const draggableListChinese = document.querySelector('.draggable-list-chinese')
const playAgainBtn = document.getElementById('playAgain')

// const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

// Get random item
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item
}

// Insert data from data array
function defaultState() {
  let listHTML = ''
  englishData.forEach(item => {
    listHTML += `
      <li id='${item.id}' draggable='true'>${item.sentence}</li>
    `
  })

  return listHTML
}

function defaultChineseState() {
  let listHTML = ''
  chineseData.forEach(item => {
    listHTML += `
      <li id='${item.id}' draggable='true'>${item.sentence}</li>
    `
  })
  
  return listHTML
}

draggableList.innerHTML = defaultState()
draggableListChinese.innerHTML = defaultChineseState()

// Current phrase being dragged
let selectedId;

// Target phrase
let dropTargetId;

// Counter for correct phrases
let matchingCounter = 0;
let matchingTotalCount = document.querySelectorAll('.draggable-list li').length

// Invoke functions
addEventListeners();
addEventListenersTwo()

function dragStart() {
  selectedId = this.id; // get the id
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;
  console.log(dropTargetId)

  if(checkForMatch(selectedId, dropTargetId)) {    
    document.getElementById(selectedId).classList.add('correct');
    document.getElementById(dropTargetId).classList.add('correct')
    matchingCounter++
  } else if (checkForMatchTwo(selectedId, dropTargetId)) {
    document.getElementById(selectedId).classList.add('correct');
    document.getElementById(dropTargetId).classList.add('correct')
    matchingCounter++
  }

  if (matchingCounter == matchingTotalCount) {
    endMessage.style.display = 'block'
  }

  this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 'c1' ? true : false;

    case 'e2':
      return dropTarget === 'c2' ? true : false;

    case 'e3':
      return dropTarget === 'c3' ? true : false;

    case 'e4':
      return dropTarget === 'c4' ? true : false;

    case 'e5':
      return dropTarget === 'c5' ? true : false;

    default:
      return false;

  }
}

// Check for the other way
function checkForMatchTwo(selected, dropTarget) {
  switch (selected) {
    case 'c1':
      return dropTarget === 'e1' ? true : false;

    case 'c2':
      return dropTarget === 'e2' ? true : false;

    case 'c3':
      return dropTarget === 'e3' ? true : false;

    case 'c4':
      return dropTarget === 'e4' ? true : false;

    case 'c5':
      return dropTarget === 'e5' ? true : false;

    default:
      return false;

  }
}

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = 'none';
  document.querySelectorAll('.draggable-list li').forEach(item => {
    document.getElementById(item.id).classList.remove('correct')
  })

  document.querySelectorAll('.draggable-list-chinese li').forEach(item => {
    document.getElementById(item.id).classList.remove('correct')
  })
}

playAgainBtn.addEventListener('click', playAgain)

function addEventListeners() {
  document.querySelectorAll('.draggable-list li').forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  });
}

function addEventListenersTwo() {
  document.querySelectorAll('.draggable-list-chinese li').forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  });
}

