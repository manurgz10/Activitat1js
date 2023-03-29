/*
1. Anar demanant numeros per prompt
2. Confirmar amb un confirm
3. Emmagatzemar d'un array
4. En acabar sumar tots els numeros
5. Escriure el resultat dins el document
*/

let numeros = [];
let seguir = true;
let suma = 0;

function sumarNumeros() {
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma
}

while (seguir) {
  let numero = prompt("Introdueix un número:");
  numeros.push(parseInt(numero));
  seguir = confirm("Vols continuar introduint números?");
}

function clickSuma() {
  document.write("La suma de los números es: " + sumarNumeros());
};
