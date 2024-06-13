function changeLanguage(lang) {
    let categ = document.getElementById("categ");
    let what = document.getElementById("what");
    let sug = document.getElementById("sug");
    let hid = document.getElementById("hidden");
    
    if (lang == "en") {
        categ.innerHTML = "Categories";
        what.innerHTML = "WHAT?";
        sug.innerHTML = "Have a Suggestion?"
        hid.innerHTML = "<a class=\"hidden-link\" href=\"../HTML/categories-index.html\">Categories</a>  <a class=\"hidden-link\" href=\"../HTML/WHAT-index.html\">WHAT?</a>  <a class=\"hidden-link\" href=\"../HTML/suggestion-index.html\">Have a Suggestion?</a>"
    }
    else if (lang == "es") {
        categ.innerHTML = "Categorías";
        what.innerHTML = "¿QUÉ?";
        sug.innerHTML = "¿Tienes Sugerencias?"
        hid.innerHTML = "<a class=\"hidden-link\" href=\"../HTML/categories-index.html\">Categorías</a>  <a class=\"hidden-link\" href=\"../HTML/WHAT-index.html\">¿QUÉ?</a>  <a class=\"hidden-link\" href=\"../HTML/suggestion-index.html\">¿Tienes Sugerencias?</a>"
    }
}

function turnToX(x) {
    x.classList.toggle("change");
    document.getElementById("hidden").classList.toggle("show");
}
