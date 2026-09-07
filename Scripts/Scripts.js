let botonesPreordenar = document.querySelectorAll('.btn-Pre-ordenar');
let botonesComprar = document.querySelectorAll('.btn-Comprar');
let botonesComprarPack = document.querySelectorAll('.btn-comprar-pack');

function procesarPreorden(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    
    alert("Pre-ordenado: " + titulo + " \nTe avisaremos cuando este disponible.");
}

function procesarCompra(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    let precio = tarjeta.querySelector('.subtitle').innerText;
    
    alert("Has comprado: " + titulo + " \nCosto: " + precio);
}

function procesarCompraPack(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    let precio = tarjeta.querySelector('.subtitle').innerText;
    
    alert("Felicidades haz comprado el pack: " + titulo + " \nCosto total: " + precio);
}
botonesPreordenar.forEach(function(boton) {
    boton.addEventListener('click', procesarPreorden);
});

botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', procesarCompra);
});

botonesComprarPack.forEach(function(boton) {
    boton.addEventListener('click', procesarCompraPack);
});