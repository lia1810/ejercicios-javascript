//ejercicio 27//
let numero1 = 5;
let numero2 = 7;
console.log("El resultado de la suma es ", numero1 + numero2)
console.log("El resultado de la resta es ", numero1 - numero2);
console.log("El producto de la multiplicacion es ", numero1 * numero2);
console.log("La division da como resultado ", numero1 / numero2);
console.log("El resto es igual a ", numero1 % numero2);
//ejercicico 28//
let numero = 9;
console.log("Tabla del 9 ", numero, numero * 2, numero * 3, numero * 4, numero * 5, numero * 6, numero * 7, numero * 8, numero * 9, numero * 10);

//ejercico 29//
let lado = 10
console.log("El perimetro del cuadrado es igual a ", lado * 4);

//ejercicio 30//
let ladoDelCuadrado = 5
console.log("El area del cuadrado es igual a ", ladoDelCuadrado ** 2)

//ejercicio 31//
let lado1 = 10;
let lado2 = 20;
let lado3 = 5;
console.log(`El perímetro del triángulo es ${lado1 + lado2 + lado3} `)
//NO PUEDO CREER QUE ESCRIBI ESO Y SALIO!!!//

//ejercicio 32//
let altura = 10;
let base = 4;
console.log(`El perímetro  es ${ (base + altura) * 2 } `);
console.log(`El área es igual a ${ base * altura}`);

//ejercicio 33//

let cantidadDePersonas = 100
cantidadDePersonas += 5;
console.log("La cantidad es " + cantidadDePersonas + " personas");
cantidadDePersonas -= 3;
console.log("La cantidad es " + cantidadDePersonas + " personas");
cantidadDePersonas = cantidadDePersonas * 2;
console.log("La cantidad es de " + cantidadDePersonas + " personas");

//ejercicio 34//

let ingresos = 1000
let ganancias = 600
let impuestos = 500
console.log("El objetivo del mes:", ingresos > 800);
console.log("Se logró el objetivo impositivo", impuestos < 400);
console.log("Festejen que pagamos el bono!!", ganancias = true);


//ejercicio35//

let numeroDeCliente = 143245;
let numeroDeClienteIngresado = `143245`;
console.log (`El numero ingresado por el cliente es correcto ${numeroDeCliente == numeroDeClienteIngresado }`)
console.log (`El numero ingresado por el cliente es correcto ${numeroDeCliente === numeroDeClienteIngresado }`)

//ejercicio 36//
let numerito1 = 10;
let numerito2 = 20;
console.log ( `Las variables tienen el mismo valor ${ numerito1 == numerito2}` )
console.log ( `Las variables tienen distinto valor ${ numerito1 != numerito2}` )

//ejercicio 37//
let promedioParaAprobar = 6;
let promedioDelAlumno = 4;
console.log ( `El alumno alcanza el promedio requerido ${ promedioDelAlumno >= promedioParaAprobar}`);
console.log ( `El alumno necesita ${ promedioParaAprobar - promedioDelAlumno} puntos para aprobar`);

//ejercicio clase 33//
// const nombre = prompt("Escribí tu nombre");
// const mes = prompt("Escribi tu mes de nacimiento");
// const año = prompt("Escribí tu año de nacimiento");
// console.log("Tu edad es ", 2019 - año);