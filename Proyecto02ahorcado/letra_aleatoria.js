var min = 97;
var max = 122;
var letra = Math.random() * (max - min) + min;
var contador = 0;

letra = Math.round(letra);
letra = String.fromCharCode(letra);
alert(letra);
var letraUsuario = prompt("Introduzca una letra por favor");

if (letraUsuario != letra) {

  while (contador < 4) {

  prompt("Introduzca una letra por favor");

  contador++;

  }

  alert("Has fallado, pulsa F5 para volver a jugar");

}

if (letraUsuario == letra) {

  alert("Enhorabuena has acertado!");

}
