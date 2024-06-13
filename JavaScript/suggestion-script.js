function changeLanguage(lang) {
    let categ = document.getElementById("categ");
    let what = document.getElementById("what");
    let sug = document.getElementById("sug");

    let hello = document.getElementById("explanation");
    let form = document.getElementById("container");
    
    if (lang == "en") {
        categ.innerHTML = "Categories";
        what.innerHTML = "WHAT?";
        sug.innerHTML = "Have a Suggestion?";
        hello.innerHTML = "<h2>Hi!</h2> <h4>At some point in your journey through the internet you may come across an artifact that would be the perfect fit for this site. <br> If you do and want to share it with the world (the lovely folks that visit this website), please copy the link into the form bellow (it doesn't have to be from Amazon, the internet is filled with unnecessary wonders that deserve to be known).</h4>";
        form.innerHTML = "<form action=\"../PHP/suggestions.php\" id=\"form\">  <label for=\"fname\">First name:</label>  <input type=\"text\" id=\"fname\" name=\"fname\" placeholder=\"John\">  <label for=\"lname\">Last name:</label>  <input type=\"text\" id=\"lname\" name=\"lname\" placeholder=\"Smith\"><br>  <label for=\"suggestion\">Paste here the URL of the \"unnecessary\" thing you want to see promoted on this site:</label>  <textarea name=\"suggestion\" id=\"text-box\" cols=\"30\" rows=\"10\"></textarea><br>  <input type=\"submit\" value=\"Submit\" id=\"submit\">  </form>";
    }
    else if (lang == "es") {
        categ.innerHTML = "Categorías";
        what.innerHTML = "¿QUÉ?";
        sug.innerHTML = "¿Tienes Sugerencias?";
        hello.innerHTML = "<h2>¡Hola!</h2> <h4>En algún punto de tu aventura a través del internet, puede que te encuentres con un artefacto que sería ideal para este sitio web. <br>  Si ocurre y quieres compartir tu hallazgo con el mundo (al menos la parte del mundo que conoce este sitio web), por favor pega el enlace hacia el producto en el campo de abajo. No tiene que ser de Amazon (el internet está lleno de maravillas innecesarias que merecen ser conocidas).</h4>";
        form.innerHTML = "<form action=\"../PHP/suggestions.php\" id=\"form\">  <label for=\"fname\">Nombre:</label>  <input type=\"text\" id=\"fname\" name=\"fname\" placeholder=\"Luis\">  <label for=\"lname\">Apellido(s)</label>  <input type=\"text\" id=\"lname\" name=\"lname\" placeholder=\"Lugo\"><br>  <label for=\"suggestion\">Pega aquí el enlace del producto \"innecesario\" que quieras ver publicado en You Don't Need This:</label>  <textarea name=\"suggestion\" id=\"text-box\" cols=\"30\" rows=\"10\"></textarea><br>  <input type=\"submit\" value=\"Enviar\" id=\"submit\">  </form>";
    }
}

function turnToX(x) {
    x.classList.toggle("change");
    document.getElementById("hidden").classList.toggle("show");
}