let botonesPreordenar = document.querySelectorAll('.btn-Pre-ordenar');
let botonesAñadirCarrito = document.querySelectorAll('.btn-añadir-carrito');
let botonesComprarPack = document.querySelectorAll('.btn-comprar-pack');

function procesarPreorden(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    
    alert("Pre-ordenado: " + titulo + " \nTe avisaremos cuando este disponible.");
}

function procesarAñadirCarrito(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    let precio = tarjeta.querySelector('.subtitle').innerText;

    alert("Añadido al carrito: " + titulo + " \nCosto: " + precio);
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

botonesAñadirCarrito.forEach(function(boton) {
    boton.addEventListener('click', procesarAñadirCarrito);
});

botonesComprarPack.forEach(function(boton) {
    boton.addEventListener('click', procesarCompraPack);
});
