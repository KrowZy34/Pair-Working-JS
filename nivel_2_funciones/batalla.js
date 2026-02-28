let Energiaheroe = 100;
let nombreHeroe1 = "Spiderman";
function ataque() {
    let daño = 15;
    Energiaheroe = Energiaheroe - daño;
    console.log(`${nombreHeroe1} ataca con daño de: ${daño} `);
    return Energiaheroe;
}