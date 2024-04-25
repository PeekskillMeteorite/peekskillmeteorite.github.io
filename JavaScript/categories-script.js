function changeLanguage(lang) {
    let categ = document.getElementById("categ");
    let what = document.getElementById("what");
    let sug = document.getElementById("sug");

    let merch = document.getElementById("merch");
    let toys = document.getElementById("toys");
    let board = document.getElementById("board");
    let gaming = document.getElementById("gaming");
    let sound = document.getElementById("sound");
    let compu = document.getElementById("compu");
    let book = document.getElementById("book");
    let home = document.getElementById("home");
    let kitch = document.getElementById("kitch");
    let cloth = document.getElementById("cloth");
    let pet = document.getElementById("pet");
    let sport = document.getElementById("sport");
    
    if (lang == "en") {
        categ.innerHTML = "Categories";
        what.innerHTML = "WHAT?";
        sug.innerHTML = "Have a Suggestion?"

        merch.innerHTML = "Merchandising"
        toys.innerHTML = "Toys"
        board.innerHTML = "Board Games"
        gaming.innerHTML = "Gaming"
        sound.innerHTML = "Sound and Music"
        compu.innerHTML = "Computers"
        book.innerHTML = "Books"
        home.innerHTML = "Home"
        kitch.innerHTML = "Kitchen"
        cloth.innerHTML = "Clothing"
        pet.innerHTML = "Propane and propane accessories"
        sport.innerHTML = "Sports and Outdoors"
    }
    else if (lang == "es") {
        categ.innerHTML = "Categorías";
        what.innerHTML = "¿QUÉ?";
        sug.innerHTML = "¿Tienes Sugerencias?"

        merch.innerHTML = "Merch"
        toys.innerHTML = "Juguetes"
        board.innerHTML = "Juegos de mesa"
        gaming.innerHTML = "Gaming"
        sound.innerHTML = "Música y sonido"
        compu.innerHTML = "Ordenador"
        book.innerHTML = "Libros"
        home.innerHTML = "Hogar"
        kitch.innerHTML = "Cocina"
        cloth.innerHTML = "Ropa y calzado"
        pet.innerHTML = "Mascotas"
        sport.innerHTML = "Deporte y exteriores"
    }
}