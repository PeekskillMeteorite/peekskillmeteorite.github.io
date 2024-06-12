function changeLanguage(lang) {
    let categ = document.getElementById("categ");
    let what = document.getElementById("what");
    let sug = document.getElementById("sug");
    
    if (lang == "en") {
        categ.innerHTML = "Categories";
        what.innerHTML = "WHAT?";
        sug.innerHTML = "Have a Suggestion?"
    }
    else if (lang == "es") {
        categ.innerHTML = "Categorías";
        what.innerHTML = "¿QUÉ?";
        sug.innerHTML = "¿Tienes Sugerencias?"
    }
}

function turnToX(x) {
    x.classList.toggle("change");
    document.getElementById("hidden").classList.toggle("show");
}
