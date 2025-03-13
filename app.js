// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");
const botonAñadir = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");
let nombres = [];
let juegoTerminado = false;

function agregarAmigo() {
    if (juegoTerminado) {
        reiniciarJuego();
        return;
    }

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Ingresar nombre por favor");
        return;
    }

    nombres.push(nombre);

    const li = document.createElement("li");
    li.textContent = nombre;
    li.setAttribute("data-nombre", nombre);
    listaAmigos.appendChild(li);

    inputNombre.value = "";
    inputNombre.focus();
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay más nombres para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];

    resultadoSorteo.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${nombreSorteado}</strong>! 🎉</li>`;

    nombres.splice(indiceAleatorio, 1);

    const itemsLista = listaAmigos.getElementsByTagName("li");
    for (let i = 0; i < itemsLista.length; i++) {
        if (itemsLista[i].getAttribute("data-nombre") === nombreSorteado) {
            listaAmigos.removeChild(itemsLista[i]);
            break;
        }
    }

    if (nombres.length === 0) {
        botonAñadir.style.backgroundColor = "#555";
        botonAñadir.textContent = "Reiniciar";
        juegoTerminado = true;
    }
}

function reiniciarJuego() {
    nombres = [];
    listaAmigos.innerHTML = "";
    resultadoSorteo.innerHTML = "";
    inputNombre.value = "";
    inputNombre.focus();

    botonAñadir.style.backgroundColor = "";
    botonAñadir.textContent = "Añadir";
    juegoTerminado = false;
}