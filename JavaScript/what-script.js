function changeLanguage(lang) {
    let content = document.getElementById("explanation");
    let categ = document.getElementById("categ");
    let what = document.getElementById("what");
    let sug = document.getElementById("sug");
    let hid = document.getElementById("hidden");
    
    if (lang == "en") {
        content.innerHTML = "<h1>So... Why does this site exists?</h1>  <p>Hello!<br>  You (as our friend Zac Efron above) might be wondering \"What's up with this site?\". And to that I say \"fair\".<br>  I (the creator and owner of this site) am the first to admit that this seems like your typical page that just wants to sell you stuff, and that's because it is. <br>  I created this site with two purposes: <br></p>  <ol class=\"list\">  <li>I'm junior software developer and this site is part of my portfolio. It was good practice in creating a page of this kind and now is proof that I'm capable of making one.</li>  <li>I wanted to make some extra money &nbsp;<strong>¯\\_(ツ)_/¯</strong><br>  Having said that. I am not fully comfortable with selling people stuff they don't need. Hence, the name <strong>\"You Don't Need This\"</strong>. More than a cool name, it's sort of a reminder/warning that every item you will ever see in this site is something that you absolutely <strong> don't need</strong>; it is just something you might really want.<br>  The name it's also a way to let people know what kind of stuff is showcased here: <em>very cool</em> stuff you don't need in the end. </li>  </ol>  <h2>So, how does this site make money?</h2>  <p>The short answer is Amazon Affiliate Program.<br>  If that answer does nothing for you, let me explain.  The Amazon Affiliate Program works like this:</p>  <ol class=\"list\">  <li>I become an Affiliate.</li>  <li>With this I can get Affiliate links to products that are sold on Amazon.</li>  <li>I use those links on this site.</li>  <li>By each visitor that goes to Amazon through one of those links and makes a buy, I receive a small compensation.</li>  <li>???</li>  <li><strong>Profit!</strong></li>  </ol>";
        categ.innerHTML = "Categories";
        what.innerHTML = "WHAT?";
        sug.innerHTML = "Have a Suggestion?"
        hid.innerHTML = "<a class=\"hidden-link\" href=\"../HTML/categories-index.html\">Categories</a>  <a class=\"hidden-link\" href=\"../HTML/WHAT-index.html\">WHAT?</a>  <a class=\"hidden-link\" href=\"../HTML/suggestion-index.html\">Have a Suggestion?</a>"
    }
    else if (lang == "es") {
        content.innerHTML = "<h1>Entonces... ¿Por qué existe este sitio?</h1>  <p>¡Hola!<br>  Tú (como nuestro amigo Zac Efron arriba) puedes estar preguntándote \"¿qué pasa con este sitio?\" Y reconozco que es una pregunta válida.<br>  Yo (creador de esta página) soy el primero en admitir que parece el típico sitio de internet que solo busca venderte algo, y sí, lo es. <br>  He creado este sitio con dos propósitos: <br></p>  <ol class=\"list\">  <li>Soy un software developer junior y este sitio es parte de mi portafolio. Ha sido una buena práctica en la creación de páginas web de este tipo y es prueba de que soy capaz de hacer una.</li>  <li>Quería hacer un dinerillo extra &nbsp;<strong>¯\\_(ツ)_/¯</strong><br>  Habiendo dicho eso. No me siento del todo cómodo con venderle a la gente cosas que no necesita. De allí el nombre <strong>\"You Don't Need This\" </strong>(<em>No necesitas esto</em>). Además de ser un nombre guay, es un recordatorio/advertencia de que cada cosa que verás en este sitio siempre será algo que absolutamente <strong>NO necesitas</strong>; es solo algo que realmente te gustaría tener.<br></li>  </ol>  <h2>¿Y cómo hace dinero este sitio?</h2>  <p>La respuesta corta es Programa de Afiliados de Amazon.<br>  Si eso no te dice nada, te lo explico. El Programa de Afiliados de Amazon funciona de esta manera:</p>  <ol class=\"list\">  <li>Una persona se afilia al programa (yo en este caso).</li>  <li>Con esto puedo obtener enlaces de afiliado a productos vendidos en Amazon.</li>  <li>Uso esos enlaces especiales en este sitio web.</li>  <li>Por cada visitante que entre a Amazon a través de uno de esos enlaces y haga una compra, recibo una pequeña compensación.</li>  </ol>";
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