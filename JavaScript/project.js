function projectButton(buttonName){
    alert(buttonName)
    var page = document.querySelectorAll(".projectText");
    for (let i = 0; i < page.length; i++) {
        document.querySelectorAll(".projectText")[i].style.display = "none"
    }
    
}