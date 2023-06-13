let press = document.querySelector("#InitButton")

press.addEventListener("click", function(){
        const turnPage = new CSSStyleSheet();
        const offPage = new CSSStyleSheet();
    
    
        offPage.insertRule(`.front {
            display: none;
        }`);
        
        turnPage.insertRule(`.back{
            display: initial;
        }`)
    
    
        document.adoptedStyleSheets = [offPage, turnPage]
})