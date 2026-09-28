/* =========================================
   CONFIGURACIÓN
========================================= */

// CAMBIA ESTO POR EL NOMBRE DE LA PERSONA

const nombre = "Sofia Amor de Mi Vida";

// CAMBIA AQUÍ LAS FOTOS

const fotos = [
    "Bellos.jpg",
    "Selfie.jpg",
    "Guapos.jpg",
    "Besito.jpg"
];


/* =========================================
   ELEMENTOS
========================================= */

const pantallas = document.querySelectorAll(".pantalla");

const btnSorpresa =
    document.getElementById("btnSorpresa");

const btnFotos =
    document.getElementById("btnFotos");

const btnFinal =
    document.getElementById("btnFinal");

const galeria =
    document.getElementById("galeria");

const nombreElemento =
    document.getElementById("nombre");

const efectos =
    document.getElementById("efectos");


/* =========================================
   NOMBRE
========================================= */

nombreElemento.textContent = nombre;


/* =========================================
   CAMBIAR PANTALLA
========================================= */

function cambiarPantalla(id) {

    pantallas.forEach(pantalla => {

        pantalla.classList.remove("activa");

    });


    document
        .getElementById(id)
        .classList.add("activa");
}


/* =========================================
   BOTÓN SORPRESA
========================================= */

btnSorpresa.addEventListener("click", () => {

    cambiarPantalla("mensaje");

    lanzarConfeti();

    crearCorazones();

});


/* =========================================
   BOTÓN FOTOS
========================================= */

btnFotos.addEventListener("click", () => {

    cambiarPantalla("fotos");

    cargarFotos();

});


/* =========================================
   BOTÓN FINAL
========================================= */

btnFinal.addEventListener("click", () => {

    cambiarPantalla("final");

    lanzarConfeti();

    crearCorazones();

});


/* =========================================
   CARGAR FOTOS
========================================= */

function cargarFotos() {

    galeria.innerHTML = "";

    fotos.forEach((foto, index) => {

        const imagen =
            document.createElement("img");

        imagen.src = foto;

        imagen.alt =
            `Recuerdo ${index + 1}`;

        imagen.classList.add("foto");

        galeria.appendChild(imagen);

    });

}


/* =========================================
   CREAR CORAZONES
========================================= */

function crearCorazones() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");

            corazon.classList.add(
                "corazon-flotante"
            );

            corazon.textContent =
                Math.random() > 0.5
                    ? "❤️"
                    : "💕";


            corazon.style.left =
                Math.random() * 100 + "vw";


            corazon.style.animationDuration =
                (3 + Math.random() * 3) + "s";


            efectos.appendChild(corazon);


            setTimeout(() => {

                corazon.remove();

            }, 6000);

        }, i * 100);

    }

}


/* =========================================
   CREAR CONFETI
========================================= */

function lanzarConfeti() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            const pieza =
                document.createElement("div");

            pieza.classList.add("confeti");


            pieza.style.left =
                Math.random() * 100 + "vw";


            pieza.style.backgroundColor =
                obtenerColor();


            pieza.style.animationDuration =
                (2 + Math.random() * 3) + "s";


            efectos.appendChild(pieza);


            setTimeout(() => {

                pieza.remove();

            }, 5000);

        }, i * 20);

    }

}


/* =========================================
   COLORES DEL CONFETI
========================================= */

function obtenerColor() {

    const colores = [

        "#ff6b81",
        "#c44569",
        "#f8a5c2",
        "#feca57",
        "#48dbfb",
        "#1dd1a1",
        "#5f27cd"

    ];

    return colores[
        Math.floor(
            Math.random() * colores.length
        )
    ];

}