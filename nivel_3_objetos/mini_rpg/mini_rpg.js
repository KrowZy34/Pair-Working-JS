let jugador = {
    nombre: "MAX",
    vida: 100,
    fuerza: 20,
    nivel: 3
}

function mostrarEstado() {
    console.log("-------------------------------------------------");
    console.log("Estado actual del jugador");
    console.log(`Nombre del jugador: ${jugador.nombre}`);
    console.log(`Vida del jugador: ${jugador.vida}`);
    console.log(`Fuerza del jugador: ${jugador.fuerza}`);
    console.log(`Nivel del jugador: ${jugador.nivel}`);
    console.log("-------------------------------------------------");
}
function combate() {
    let daño = jugador.fuerza;
    let superA = jugador.fuerza * 2;
    let dañoEnemigo = 20;
    let vidaEnemigo = 80;
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
    console.log(`EL enemigo ataco al jugador ${jugador.nombre} con un daño de ${dañoEnemigo}, la vida actual  del jugador ${jugador.nombre} es : ${jugador.vida - dañoEnemigo} `);
    jugador.vida = jugador.vida - dañoEnemigo;
    console.log(`El jugador ${jugador.nombre} ataco al enemigo con un daño de ${daño}, la vida actual del enemigo es : ${vidaEnemigo - daño}`);
    vidaEnemigo = vidaEnemigo - daño;
    console.log(`El enemigo ataco al jugador ${jugador.nombre} con un daño de ${dañoEnemigo}, ahora la vida actual del jugador es: ${jugador.vida - dañoEnemigo}`);
    jugador.vida = jugador.vida - dañoEnemigo;
    console.log(`El jugador ${jugador.nombre} lanza un super ataque con un daño de ${daño.superA}, la vida actual del enemigo es de : ${vidaEnemigo - daño.superA} `);
    vidaEnemigo = vidaEnemigo - superA;
    console.log(`El jugador ${jugador.nombre} gano el combate y subio de nivel a ${jugador.nivel + 2}`);
    jugador.nivel = jugador.nivel + 2;
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
}

mostrarEstado();
console.log("");
combate();
console.log("");
mostrarEstado();