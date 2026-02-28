let cliente = {
    nombre: "Juan",
    dinero: 40,
    hambre: 80
}

function mostrarEstado() {
    console.log("Estado actual del cliente");
    console.log(`Nombre del cliente: ${cliente.nombre}`);
    console.log(`Dinero del cliente: ${cliente.dinero}`);
    console.log(`Hambre del cliente: ${cliente.hambre}`);
}

function ordenarComida() {
    valorComida = 60;
    console.log(`El cliente ordena una comida que lo satisface (${valorComida} de hambre recuperada), el hambre del cliente pasa a ser: ${cliente.hambre - valorComida}`)
    cliente.hambre = cliente.hambre - valorComida;
}

function pagar() {
    precioComida = 20;
    console.log(`La comida que compró el cliente, vale ${precioComida}, el cliente pagó con ${cliente.dinero}, ahora el dinero del cliente es: ${cliente.dinero - precioComida}`)
    cliente.dinero = cliente.dinero - precioComida;
}

mostrarEstado();
ordenarComida();
pagar();
mostrarEstado();