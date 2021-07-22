// Decipher set xml editor theme.
// theme list https://codemirror.net/theme/
let themes = []
const cdn = "https://decixmlthemes.netlify.app/themes/"

function setTheme(name) {
    const head = document.querySelector("head")
    const element =  document.getElementById('xml-theme')

    if (typeof(element) != 'undefined' && element != null) {
        element.href = cdn+name+".css"
    }
    else {
        let theme = document.createElement("link");
        theme.rel = "stylesheet"
        theme.id = "xml-theme"
        theme.href = cdn+name+".css"
        head.append(theme)
    }

    const editor = document.querySelector(".CodeMirror");
    editor.classList.add("cm-s-"+name)
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.action == "XMLchangeTheme") {
        chrome.storage.sync.set({dt: msg.theme})
        let cur  = themes[parseInt(msg.theme)].name
        setTheme(cur)
    }
});

window.onload = function() {
    chrome.storage.sync.get(['dt','themes'], function(result){
        if(result.dt != undefined) {
            themes = result.themes
            let cur  = themes[parseInt(result.dt)].name
            setTimeout(()=> {setTheme(cur);}, 1000)
        }
    })
}