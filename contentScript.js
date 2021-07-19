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

window.addEventListener('load', (event) => {
   setTimeout(()=> {setTheme("monokai"); }, 600);
});