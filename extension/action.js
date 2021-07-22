// themes datasource
let themes =  []
const dp = document.querySelector("#themes")
const dis = document.querySelector("#disp")

// generates all options shown in the dropdown                
function buildOptions() {
    themes.forEach((itm,index) => {
            let option = document.createElement("option")
            option.text = itm.name
            option.value = index
            dp.appendChild(option)
        }
    )
}

chrome.storage.sync.get(['themes'], function(result) {
    themes = result.themes
    buildOptions()
})

window.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['dt'], function(result) {
        if(result.dt != undefined) {
            dis.innerHTML = themes[parseInt(result.dt)].name
            dp.value = result.dt
        }
    })

    dp.addEventListener('change', () => {
        chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
            let tabid = tabs[0].id
            let currentThemeName = themes[parseInt(dp.value)].name
            dis.innerHTML = currentThemeName
            chrome.tabs.sendMessage(tabid, {
                action: "XMLchangeTheme",
                theme: dp.value
            })
        })// get details of currently active tab
    })
})