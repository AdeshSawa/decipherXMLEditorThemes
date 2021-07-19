let defaultTheme = 0;

const themes =  [
  {name: "monokai", fileName:"monokai.css"},
  {name: "neo", fileName:"neo.css"},
  {name: "nord", fileName:"nord.css"},
  {name: "panda-syntax", fileName:"panda-syntax.css"}                
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ defaultTheme});
  console.log('Default theme is set to: '+defaultTheme);
});