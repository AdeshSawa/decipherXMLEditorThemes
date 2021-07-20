// themes datasource
const themes =  [
    {name:"monokai",fileName:"monokai.css"},
    {name:"3024-day",fileName:"3024-day.css"},
    {name:"3024-night",fileName:"3024-night.css"},
    {name:"abbott",fileName:"abbott.css"},
    {name:"abcdef",fileName:"abcdef.css"},
    {name:"ambiance-mobile",fileName:"ambiance-mobile.css"},
    {name:"ambiance",fileName:"ambiance.css"},
    {name:"ayu-dark",fileName:"ayu-dark.css"},
    {name:"ayu-mirage",fileName:"ayu-mirage.css"},
    {name:"base16-dark",fileName:"base16-dark.css"},
    {name:"base16-light",fileName:"base16-light.css"},
    {name:"bespin",fileName:"bespin.css"},
    {name:"blackboard",fileName:"blackboard.css"},
    {name:"cobalt",fileName:"cobalt.css"},
    {name:"colorforth",fileName:"colorforth.css"},
    {name:"darcula",fileName:"darcula.css"},
    {name:"dracula",fileName:"dracula.css"},
    {name:"duotone-dark",fileName:"duotone-dark.css"},
    {name:"duotone-light",fileName:"duotone-light.css"},
    {name:"eclipse",fileName:"eclipse.css"},
    {name:"elegant",fileName:"elegant.css"},
    {name:"erlang-dark",fileName:"erlang-dark.css"},
    {name:"gruvbox-dark",fileName:"gruvbox-dark.css"},
    {name:"hopscotch",fileName:"hopscotch.css"},
    {name:"icecoder",fileName:"icecoder.css"},
    {name:"idea",fileName:"idea.css"},
    {name:"isotope",fileName:"isotope.css"},
    {name:"juejin",fileName:"juejin.css"},
    {name:"lesser-dark",fileName:"lesser-dark.css"},
    {name:"liquibyte",fileName:"liquibyte.css"},
    {name:"lucario",fileName:"lucario.css"},
    {name:"material-darker",fileName:"material-darker.css"},
    {name:"material-ocean",fileName:"material-ocean.css"},
    {name:"material-palenight",fileName:"material-palenight.css"},
    {name:"material",fileName:"material.css"},
    {name:"mbo",fileName:"mbo.css"},
    {name:"mdn-like",fileName:"mdn-like.css"},
    {name:"midnight",fileName:"midnight.css"},
    {name:"moxer",fileName:"moxer.css"},
    {name:"neat",fileName:"neat.css"},
    {name:"neo",fileName:"neo.css"},
    {name:"night",fileName:"night.css"},
    {name:"nord",fileName:"nord.css"},
    {name:"oceanic-next",fileName:"oceanic-next.css"},
    {name:"panda-syntax",fileName:"panda-syntax.css"},
    {name:"paraiso-dark",fileName:"paraiso-dark.css"},
    {name:"paraiso-light",fileName:"paraiso-light.css"},
    {name:"pastel-on-dark",fileName:"pastel-on-dark.css"},
    {name:"railscasts",fileName:"railscasts.css"},
    {name:"rubyblue",fileName:"rubyblue.css"},
    {name:"seti",fileName:"seti.css"},
    {name:"shadowfox",fileName:"shadowfox.css"},
    {name:"solarized",fileName:"solarized.css"},
    {name:"ssms",fileName:"ssms.css"},
    {name:"the-matrix",fileName:"the-matrix.css"},
    {name:"tomorrow-night-bright",fileName:"tomorrow-night-bright.css"},
    {name:"tomorrow-night-eighties",fileName:"tomorrow-night-eighties.css"},
    {name:"ttcn",fileName:"ttcn.css"},
    {name:"twilight",fileName:"twilight.css"},
    {name:"vibrant-ink",fileName:"vibrant-ink.css"},
    {name:"xq-dark",fileName:"xq-dark.css"},
    {name:"xq-light",fileName:"xq-light.css"},
    {name:"yeti",fileName:"yeti.css"},
    {name:"yonce",fileName:"yonce.css"},
    {name:"zenburn",fileName:"zenburn.css"}             
  ];

// generates all options shown in the dropdown                
function buildOptions() {
    themes.forEach((itm,index) => {
            let option = document.createElement("option");
            option.text = itm.name;
            option.value = index;
            dp.appendChild(option);
        }
    );
}

const dp = document.querySelector("#themes");
const dis = document.querySelector("#disp");
    
buildOptions();

window.addEventListener('DOMContentLoaded', (event) => {
    chrome.storage.local.get(['dt'], function(result){
        if(result.dt != undefined) {
            dis.innerHTML = themes[parseInt(result.dt)].name +" "+themes[parseInt(result.dt)].fileName;
            dp.value = result.dt;
        }
    })

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
});