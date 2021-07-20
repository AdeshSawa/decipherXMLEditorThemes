let theme = 0;

const themes =  [
  {name: "monokai", fileName:"monokai.css"},
  {name: "neo", fileName:"neo.css"},
  {name: "nord", fileName:"nord.css"},
  {name: "panda-syntax", fileName:"panda-syntax.css"}                
];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({dt: theme});
    console.log('default theme is: '+ themes[parseInt(theme)].name);
});