function clic() {
  //Numero maximo
  const max = 100;
  //Numero minimo
  const min = 1;

  //Numero aleatorio
  let numero_secreto = Math.random() * (max - min) + min;

  //Elegimos la parte entera del numero
  numero_secreto = parseInt(numero_secreto);

  // Seteamos el numero de intentos
  let intentos = 5;

  //Declaramos una bandera para saber si se gana o se pierde
  let ganaste = false;

  //Mensaje inicial del juego
  let mensaje = `Ingresa un numero para adivinar el numero magico\nTienes ${intentos} intentos.`;

  // Ciclo para hacer los intentos del juego
  while (intentos > 0) {
    let numero_del_usuario = prompt(mensaje, '0');
    numero_del_usuario = parseInt(numero_del_usuario);
    if (numero_del_usuario === numero_secreto) {
      ganaste = true;
      break;
    } else if (numero_del_usuario === 0) {
      break;
    }
    intentos--;
    numero_del_usuario > numero_secreto
      ? (mensaje = `Lo sentimos, el numero que ingresaste es mayor al numero magico\nTe quedan ${intentos} intentos`)
      : null;
    numero_del_usuario < numero_secreto
      ? (mensaje = `Lo sentimos, el numero que ingresaste es menor al numero magico\nTe quedan ${intentos} intentos`)
      : null;
  }

  // Se verifica si gano o perdio
  ganaste
    ? alert('Ganaste!!! Adivinaste el numero secreto')
    : alert('Has superado los intentos permitidos ¡GAME OVER!');
}
