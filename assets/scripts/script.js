const textContainer = document.getElementById("text-container");

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  event.stopPropagation();
  writeToDocument(event.key);
});

function writeToDocument(text) {
  textContainer.innerHTML = text;
}
