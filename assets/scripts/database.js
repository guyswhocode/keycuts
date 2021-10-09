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

let keyMapCollection = {};

function getShortCutByKeys(keys) {
  return keyMapCollection[keys];
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

  keymaps.map(keymap => {
    keyMapCollection[keymap.key] = keymap;
  })
})();
