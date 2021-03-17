const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("") //put the letter into an array
    .map(
      //return a new array with each letter
      (letter, idx) =>
        `<span style="transition-delay:${idx * 30}ms">${letter}</span>`
    )
    .join(""); //put the letter array back into a string
});
