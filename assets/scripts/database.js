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

function getShortCutByKeys(keys) {
  return {
          
  };
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
