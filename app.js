// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const campoTextoAmigo= document.getElementById('amigo');

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
    limpiarCaja(campoTextoAmigo);
}