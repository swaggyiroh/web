function movebutton() {
    let target = document.getElementById("sadje");

    var w = window.innerWidth - 100;
    var h = window.innerHeight - 100;


    let tP = Math.random() * (0 - h) + h;
    let lP = Math.random() * (0 - w) + w;


    target.style.top = tP + "px";
    target.style.left = lP + "px"

}

function yes() {
    let main = document.getElementById("main");
    let yes = document.getElementById("yes");
    
    yes.style.visibility = "visible";
    main.style.visibility = "hidden";
}