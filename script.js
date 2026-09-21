const botonCarta = document.getElementById("botonCarta");
const carta = document.getElementById("carta");


// =====================================================
// ABRIR CARTA
// =====================================================

botonCarta.addEventListener("click", () => {

    carta.classList.add("visible");

    setTimeout(() => {

        carta.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);

});


// =====================================================
// MENSAJES DE LAS FLORES
// =====================================================

const flores = document.querySelectorAll(".flor-svg");

const mensajes = [
    "Una flor para hacerte sonreír. 🌻",

    "Otra porque eres alguien muy especial para mí. 💛",

    "Y esta porque quería darte algo. 🌼",

    "Porque incluso una flor amarilla puede quedarse corta. ❤️",

    "Esta es simplemente porque pensé en ti. 🌻"
];


// Crear caja de mensaje

const mensajeFlor = document.createElement("div");

mensajeFlor.classList.add("mensaje-flor");

document.body.appendChild(mensajeFlor);


// Agregar interacción a cada flor

flores.forEach((flor, indice) => {

    flor.addEventListener("click", () => {

        mensajeFlor.textContent =
            mensajes[indice] ||
            "Esta flor es para ti. 🌻";

        mensajeFlor.classList.add("visible");


        setTimeout(() => {

            mensajeFlor.classList.remove("visible");

        }, 3000);

    });

});


// =====================================================
// PÉTALOS
// =====================================================

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");

    // Usamos pétalos individuales en lugar de flores completas

    petalo.textContent =
        Math.random() > 0.5
            ? "❋"
            : "·";


    petalo.style.left =
        Math.random() * 100 + "vw";


    petalo.style.fontSize =
        (Math.random() * 10 + 8) + "px";


    petalo.style.opacity =
        Math.random() * .5 + .2;


    petalo.style.animationDuration =
        (Math.random() * 6 + 6) + "s";


    document.body.appendChild(petalo);


    setTimeout(() => {

        petalo.remove();

    }, 12000);

}


// Crear pétalos

setInterval(crearPetalo, 900);

// =====================================================
// MÚSICA DE FONDO
// =====================================================

const musica = document.getElementById("musicaFondo");
const botonMusica = document.getElementById("botonMusica");

let musicaActiva = false;

botonMusica.addEventListener("click", () => {

    if (musicaActiva) {

        musica.pause();

        botonMusica.textContent = "🔇";

        botonMusica.setAttribute(
            "aria-label",
            "Activar música"
        );

        musicaActiva = false;

    } else {

        musica.play();

        botonMusica.textContent = "🔊";

        botonMusica.setAttribute(
            "aria-label",
            "Silenciar música"
        );

        musicaActiva = true;
    }

});