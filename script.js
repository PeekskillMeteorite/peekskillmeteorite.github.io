function desplegable() {
    let coll = document.getElementById("treadmill");
    let content = coll.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } 
    else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
}