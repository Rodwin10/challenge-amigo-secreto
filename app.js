// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombresSorteados = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert ("Por favor ingrese un nombre");
        return;
    }

    let regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nombre)) {
        alert("Solo se permiten nombres con letras, sin números.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);

    actulizarLista();

    input.value = "";
    input.focus();
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
})

function actulizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length % 2 !== 0) {
        alert("Debe haber un número par de amigos para hacer el sorteo");
        return;
    }
    
    if (amigos.length === 0) {
        alert("No hay nombres que sotear");
        return;
    }
   
    amigos.sort(() => Math.random() - 0.5);

   if (nombresSorteados.length === amigos.length) {
        alert("Todos los nombres han sido sorteados. Se reiniciará el sorteo.");
        nombresSorteados = []; 
   }

   let amigoSorteado;
   do {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[amigoAleatorio];
   } while (nombresSorteados.includes(amigoSorteado));

   nombresSorteados.push(amigoSorteado);

   let resultado = document.getElementById("resultado");

   resultado.innerHTML = `Sorteado: ${amigoSorteado}`;
   
   setTimeout(() => {
        resultado.innerHTML = "";
   }, 2000);
    
}

document.querySelector(".button-draw").addEventListener("click", sortearAmigos);
