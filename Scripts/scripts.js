let botonesPreordenar = document.querySelectorAll('.btn-Pre-ordenar');
let botonesCarrito = document.querySelectorAll('.btn-añadir-carrito');
let botonesComprarPack = document.querySelectorAll('.btn-comprar-pack');

function procesarPreorden(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    alert("Pre-ordenado: " + titulo + "\nTe avisaremos cuando este disponible.");
}

function procesarCompraPack(evento) {
    let tarjeta = evento.target.closest('.card-content');
    let titulo = tarjeta.querySelector('.title').innerText;
    let precio = tarjeta.querySelector('.subtitle').innerText;
    alert("Felicidades haz comprado el pack: " + titulo + "\nCosto total: " + precio);
}

function procesarCarrito(evento) {
    let tarjeta = evento.target.closest('.card');
    
    let titulo = tarjeta.querySelector('.title').innerText;
    let precio = tarjeta.querySelector('.subtitle').innerText;
    let imagenSrc = tarjeta.querySelector('img').src;

    let producto = {
        nombre: titulo,
        precio: precio,
        imagen: imagenSrc
    };

    let carrito = JSON.parse(localStorage.getItem('carritoValoSpark'));
    if (carrito == null) {
        carrito = [];
    }
    
    carrito.push(producto);
    localStorage.setItem('carritoValoSpark', JSON.stringify(carrito));

    alert("Anadido al carrito: " + titulo + "\nCosto: " + precio);
    window.location.href = '../carrito/carrito.html';
}

botonesPreordenar.forEach(function(boton) {
    boton.addEventListener('click', procesarPreorden);
});

botonesCarrito.forEach(function(boton) {
    boton.addEventListener('click', procesarCarrito);
});

botonesComprarPack.forEach(function(boton) {
    boton.addEventListener('click', procesarCompraPack);
});


let contenedorCarrito = document.getElementById('contenedor-carrito');

if (contenedorCarrito) {
    let carrito = JSON.parse(localStorage.getItem('carritoValoSpark'));
    
    if (carrito == null) {
        carrito = [];
    }

    contenedorCarrito.innerHTML = '';

    if (carrito.length == 0) {
        contenedorCarrito.innerHTML = '<p class="has-text-white is-size-4 mt-5">Tu carrito esta vacio.</p>';
    } else {
        carrito.forEach(function(producto) {
            let carta = '<div class="column is-3"><div class="card h-100" style="background-color: rgba(31, 35, 38, 0.8); border: 1px solid rgba(255, 255, 255, 0.1);"><div class="card-image"><figure class="image is-4by3"><img src="' + producto.imagen + '" style="object-fit: contain;"></figure></div><div class="card-content has-text-centered"><p class="title is-6 has-text-white">' + producto.nombre + '</p><p class="subtitle is-6 has-text-primary has-text-weight-bold">' + producto.precio + '</p></div></div></div>';
            contenedorCarrito.innerHTML += carta;
        });
    }

    let btnVaciar = document.getElementById('btn-vaciar');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', function() {
            localStorage.removeItem('carritoValoSpark');
            location.reload();
        });
    }

    let btnPagar = document.getElementById('btn-pagar');
    if (btnPagar) {
        btnPagar.addEventListener('click', function() {
            let inputRiot = document.getElementById('input-riot');
            let inputCorreo = document.getElementById('input-correo');
            let errorRiot = document.getElementById('error-riot');
            let errorCorreo = document.getElementById('error-correo');

            let todoValido = true;

            if (inputRiot.value == '') {
                errorRiot.classList.remove('is-hidden');
                todoValido = false;
            } else {
                errorRiot.classList.add('is-hidden');
            }

            if (inputCorreo.value == '') {
                errorCorreo.classList.remove('is-hidden');
                todoValido = false;
            } else {
                errorCorreo.classList.add('is-hidden');
            }

            if (todoValido == false) {
                return;
            }

            if (carrito.length == 0) {
                alert("No tienes skins en el carrito para pagar.");
            } else {
                alert("Pago exitoso. Las skins fueron enviadas a " + inputRiot.value);
                localStorage.removeItem('carritoValoSpark');
                location.reload();
            }
        });
    }
}