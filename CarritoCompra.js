//  let carrito = [];
//  let total = 0;

// function agregarAlCarrito(id, precio) {
//      carrito.push({ id, precio });
//      console.log("agregado correctamente");
//      actualizarCarrito();
//  }

// function actualizarCarrito() {
//      console.log("actualizando...");
//      const listaCarrito = document.getElementById('carrito-lista');
//      const totalElement = document.getElementById('total');
//      // listaCarrito.innerHTML = '';
//      total = 0;

//     carrito.forEach(item => {
//          const listItem = document.createElement('li');
//          listItem.textContent = `Item ${item.id}: $${item.precio.toFixed(2)}`;
//          listaCarrito.appendChild(listItem);
//          total += item.precio;
//      });

//     totalElement.textContent = total.toFixed(2);
//  }



 // Agrega esta función para limpiar el carrito
//  function limpiarCarrito() {
//      carrito = [];
//      actualizarCarrito();
//      document.getElementById('dineroRecibido').value = ''; // Limpia el campo de dinero recibido
//      document.getElementById('cambio').textContent = '0.00'; // Reinicia el campo de cambio
//  }

// // Modifica la función calcularCambio para manejar el caso cuando no se ingresa dinero
//  function calcularCambio() {
//      const dineroRecibido = parseFloat(document.getElementById('dineroRecibido').value);

//     if (isNaN(dineroRecibido)) {
//          alert('Por favor, ingresa la cantidad de dinero recibido.');
//          return;
//      }

//     const cambio = dineroRecibido - total;
//      document.getElementById('cambio').textContent = cambio.toFixed(2);
//  }






// *************************************************************************************




/*
// Código JavaScript para gestionar el carrito de compras

// Array para almacenar los elementos del carrito
document.addEventListener('DOMContentLoaded', function () {
    // Código JavaScript para gestionar el carrito de compras

    // Array para almacenar los elementos del carrito
    let carrito = [];
    let botonAgregar = document.getElementById('agregar-hambchica');

    botonAgregar.addEventListener ('click', agregarAlCarrito(1, 'Hamburguesa chica', 20));

    // Función para agregar un elemento al carrito
    function agregarAlCarrito(id, nombre, precio) {
        let producto = {
            id: id,
            nombre: nombre,
            precio: precio
        };

        carrito.push(producto);
        actualizarCarrito();
    }

    // Función para actualizar la visualización del carrito
    function actualizarCarrito() {
        let carritoLista = document.getElementById('carrito-lista');
        let totalPrecio = document.getElementById('total-precio');

        // Limpiar el contenido actual
        carritoLista.innerHTML = '';

        // Calcular el total
        let total = 0;

        // Mostrar cada elemento del carrito
        carrito.forEach(producto => {
            let item = document.createElement('div');
            item.className = 'carrito-item';
            item.innerHTML = `<span>${producto.nombre}</span><span>${producto.precio}</span>`;
            carritoLista.appendChild(item);

            total += producto.precio;
        });

        // Actualizar el total
        totalPrecio.textContent = `$${total.toFixed(2)}`;
    }

    // Inicializar el carrito al cargar la página
    window.onload = function () {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        actualizarCarrito();
    };

    // Guardar el carrito en el almacenamiento local al cerrar la página
    window.onbeforeunload = function () {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };
});
*/

document.addEventListener('DOMContentLoaded', function () {
    let carrito = [];
    let totalPrecio = 0;

    function agregarAlCarrito(id, nombre, precio) {
        let producto = {
            id: id,
            nombre: nombre,
            precio: precio
        };

        carrito.push(producto);
        console.log('Producto agregado al carrito:', producto);
        actualizarCarrito();
    }

    function vaciarCarrito() {
        carrito = [];
        actualizarCarrito();
        localStorage.removeItem('carrito');
    }

    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

    function actualizarCarrito() {
        let carritoLista = document.getElementById('carrito-lista');
        let totalElement = document.getElementById('total-precio');

        carritoLista.innerHTML = '';

        totalPrecio = 0;

        carrito.forEach(producto => {
            let item = document.createElement('div');
            item.className = 'carrito-item';
            item.innerHTML = `<span>${producto.nombre}</span><span>${producto.precio}</span>`;
            carritoLista.appendChild(item);

            totalPrecio += producto.precio;
        });

        totalElement.textContent = `$${totalPrecio.toFixed(2)}`;

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function agregarEventoBotonVolver() {
        let volverMenu = document.getElementById('volver-menu');

        volverMenu.addEventListener('click', function (event) {
            event.preventDefault();
            history.back();
        });
    }

    function agregarEventoBotones() {
        let botonesAgregar = document.querySelectorAll('.card-button');

        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', function () {
                let id = this.getAttribute('data-id');
                let nombre = this.getAttribute('data-nombre');
                let precio = parseFloat(this.getAttribute('data-precio'));

                agregarAlCarrito(id, nombre, precio);
            });
        });
    }

    window.onload = function () {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        actualizarCarrito();
        agregarEventoBotones();
        agregarEventoBotonVolver();
    };

    window.onbeforeunload = function () {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };
});
