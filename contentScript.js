// Decipher set xml editor theme.
// theme list https://codemirror.net/theme/
function setTheme(name) {
    const head = document.querySelector("head");
    let theme = document.createElement("link");
    theme.rel = "stylesheet";
    theme.href = "https://codemirror.net/theme/"+name+".css";
    head.append(theme);
    const editor = document.querySelector(".CodeMirror");
    editor.classList.add("cm-s-"+name);
}

const themes =  [
    {name: "monokai", fileName:"monokai.css"},
    {name: "neo", fileName:"neo.css"},
    {name: "nord", fileName:"nord.css"},
    {name: "panda-syntax", fileName:"panda-syntax.css"}                
];

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.action == "XMLchangeTheme") {
        chrome.storage.local.set({dt: msg.theme});
        let cur  = themes[parseInt(msg.theme)].name;
        setTheme(cur);
    }
});

window.onload = function() {
    chrome.storage.local.get(['dt'], function(result){
        if(result.dt != undefined){
            let cur  = themes[parseInt(result.dt)].name;
            setTimeout(()=> {setTheme(cur);}, 1000);
        }
    })
}