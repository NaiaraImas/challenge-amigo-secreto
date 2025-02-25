// Variable (Array) para almacenar nombres: 

let amigosAgregados = [];

//Función para agregar amigos

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigosAgregados.push(nombre);

    // Actualizar la lista en el HTML
    let lista = document.getElementById("listaAmigos");
    let listItem = document.createElement("li");
    listItem.textContent = nombre;
    lista.appendChild(listItem);

    // Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let amigo of amigosAgregados) {
        let listItem = document.createElement("li");
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    }
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigosAgregados.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigosAgregados.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigosAgregados[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}