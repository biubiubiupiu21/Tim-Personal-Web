function projectButton(buttonName){
    var page = document.querySelectorAll(".projectText");
    var buttonlist = document.querySelectorAll(".projectButtons li button");
    for (let i = 0; i < page.length; i++) {
        console.log(buttonlist[i].firstChild.nodeValue, buttonName)
        if (buttonlist[i].firstChild.nodeValue === buttonName) {
            document.querySelectorAll(".projectText")[i].style.display = "block"
          }
        else{
            document.querySelectorAll(".projectText")[i].style.display = "none"
        }
    }
}