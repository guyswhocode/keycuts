const textContainer = document.getElementById("text-container");

const appsList = [
  {
    title: "",
    fileName: "vscode.json",
  },
  {
    title: "",
    fileName: "sublime-text.json",
  },
];

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  event.stopPropagation();
  writeToDocument(event.key);
});

function writeToDocument(text) {
  textContainer.innerHTML = text;
}

async function fetchData(path) {
  const response = await fetch(path);
  return await response.json();
}

const promises = appsList.map((app) => {
  return fetchData(`data/${app.fileName}`);
});

(async () => {
  let keymaps = [];
  (await Promise.all(promises)).map((keymap) => {
    keymaps = keymaps.concat(keymap);
  });
})();