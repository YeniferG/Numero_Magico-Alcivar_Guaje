//Numero maximo
const max = 100;
//Numero minimo
const min = 1;

//Numero aleatorio
let numero_secreto = Math.random() * (max - min) + min;
numero_secreto = parseInt(numero_secreto);
console.log(numero_secreto);

let mensaje = "Ingresa un numero para adivinar el numero magico";

let intentos = 3;

while (intentos > 0) {
    let numero_del_usuario = prompt(mensaje, "0");
    numero_del_usuario = parseInt(numero_del_usuario);
    if (numero_del_usuario === numero_secreto) {
        alert("Ganaste!!! Adivinaste el numero secreto");
        break;
    } else if (numero_del_usuario === 0) {
        break;
    }
    (numero_del_usuario > numero_secreto) ? mensaje = "Lo sentimos, el numero que ingresaste es mayor al numero magico": null;
    (numero_del_usuario < numero_secreto) ? mensaje = "Lo sentimos, el numero que ingresaste es menor al numero magico": null;
    intentos--;
}

alert("Has superado los intentos permitidos ¡GAME OVER!");