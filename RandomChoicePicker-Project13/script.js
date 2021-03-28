// get the tags div
const tagsEl = document.getElementById("tags");
// get the textarea
const textarea = document.getElementById("textarea");

// focus on the textarea
textarea.focus();

// add event listers for keyup event
textarea.addEventListener("keyup", (e) => {
  // create a function called createTags
  createTags(e.target.value);

  // check if the user click enter
  if (e.key === "Enter") {
    //clear the textarea
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    // call function randomSelect()
    randomSelect();
  }
});

function createTags(input) {
  // assign the textarea input into a tags variable using high level array methods
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  //console.log(tags);
  // make sure the tags div is empty at first
  tagsEl.innerHTML = "";

  // loop through the tags array vaiable
  tags.forEach((tag) => {
    // create a span element for each tag
    const tagEl = document.createElement("span");
    // add a class tag to the newly created span elements
    tagEl.classList.add("tag");
    // set the innerText equals to the tag
    tagEl.innerText = tag;
    // append tegEl to tagsEl to show the array on screen
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  //console.log(123);
  const times = 30;

  // create an interval variable
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  });

  // clear the interval variable and stop the highlight class at a random tag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
