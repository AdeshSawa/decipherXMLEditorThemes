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

buildOptions();
dp.addEventListener('change', (event) => {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
        let tabid = tabs[0].id;
        let currentThemeName = themes[parseInt(dp.value)].name;
        let currentThemeFile = themes[parseInt(dp.value)].fileName;
        dis.innerHTML = currentThemeName +" "+currentThemeFile;
        chrome.tabs.sendMessage(tabid,{
            action: "XMLchangeTheme",
            theme: dp.value
        })
    })// get details of currently active tab
});