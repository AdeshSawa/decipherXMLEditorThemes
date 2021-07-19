const dp = document.querySelector("#themes");
const dis = document.querySelector("#disp");

// themes datasource
const themes =  [
                    {name: "monokai", fileName:"monokai.css"},
                    {name: "neo", fileName:"neo.css"},
                    {name: "nord", fileName:"nord.css"},
                    {name: "panda-syntax", fileName:"panda-syntax.css"}                
                ];

// generates all options shown in the dropdown                
function buildOptions() {
    themes.forEach((itm,index) => {
            console.log(itm);
            let option = document.createElement("option");
            option.text = itm.name;
            option.value = index;
            dp.appendChild(option);
        }
    );
}

chrome.storage.sync.get("defaultTheme", ({ defaultTheme }) => {
    buildOptions();
    dp.addEventListener('change', (event) => {
        defaultTheme = dp.value;
        let currentThemeName = themes[defaultTheme].name;
        let currentThemeFile = themes[defaultTheme].fileName;
        dis.innerHTML = currentThemeName +" "+currentThemeFile;
    });
});