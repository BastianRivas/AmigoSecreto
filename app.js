// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const campoTextoAmigo = document.getElementById('amigo');
const campoListaAmigos = document.getElementById('listaAmigos');
const campoResultado = document.getElementById('resultado');

function limpiarCaja(documentoLimpiar) {
    documentoLimpiar.value = '';
}

function agregarAmigo(){
    console.log('Esto es lo que tiene el campo amigo: '+ campoTextoAmigo.value);
    const amigoAgregar = campoTextoAmigo.value;
    if(!amigoAgregar)
    {
        alert('El campo no puede estar vacio. Por favor, inserte un nombre.'); 
        return;
    }    
    amigos.push(amigoAgregar);
    actualizarListaAmigos();
    limpiarCaja(campoTextoAmigo);
}

function actualizarListaAmigos(){
    campoListaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo
        campoListaAmigos.appendChild(nuevoAmigo);        
    });
}

function sortearAmigo(){
    const cantidadAmigos = amigos.length;
    
    if(cantidadAmigos == 0) return;

    let numeroAmigoSorteado = Math.random() * cantidadAmigos + 1;

    let numeroAmigoSorteadoa = Math.floor(numeroAmigoSorteado);
    console.log(numeroAmigoSorteadoa);
    console.log(amigos[numeroAmigoSorteadoa]);
    actualizarCampo(campoResultado, amigos[numeroAmigoSorteadoa]);
}

function actualizarCampo(campo, frase){
    campo.innerHTML = frase;
}