// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo.length === 0) {
        alert('Por favor, inserte un nombre');
    } else {
        lista.push(amigo);
        limpiarCaja();
    }
    mostrarLista();
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = "";
    lista.forEach((persona) => {
        elementoHTML.innerHTML += `<li>${persona}</li>`;
    });
}

function sortearAmigo() {
    let numeroMaximo = lista.length;
    if (numeroMaximo > 1) {
        let numeroGenerado = Math.floor(Math.random() * numeroMaximo);
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = lista[numeroGenerado];
    } else {
        alert(`Ingrese ${(numeroMaximo === 0) ? 'los nombres a sortear' :
            'otro nombre a sortear'}`);
    }
}