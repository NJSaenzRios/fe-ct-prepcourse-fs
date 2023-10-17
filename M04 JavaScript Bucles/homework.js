/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   if (x >= y){
      return x;
   }else{
      return y;
   }
     
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
}
obtenerMayor(2,10);

function mayoriaDeEdad(edad) {
   
   if(edad >= 18){
      return ("Allowed");
      }else{
         return(" NOt Allowed");
      }
    // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
}
mayoriaDeEdad(17);

function conection(statu) {
   if(statu == 1){
      return ("Online");
   }else if(statu == 2){
   return ("Away");
   }else{
      return("offline");
   } 
   
   // El argumento "statu" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
}
conection(3);

function saludo(idioma) {

  switch(idioma){
     case "aleman":
        return ("Guten Tag!");
      case "mandarin":
         return("Ni Hao!");
      case "ingles":
         return("Hello!");
      default:
         return ("Hola!");
  }
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
}
saludo("aleman");

function colors(color) {

   switch(color){
      case "blue":
         return("this is blue");
      case "red":
         return("this is blue");  
      case "green":
         return("this is blue");
      case "orange":
         return("this is blue");
      default:
         return("Color not found");
   }
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
}
colors("red");

function esDiezOCinco(num) {
   if(num == 10 || num == 5){
      return true;
   }else{
      return false;
   }
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
}
esDiezOCinco(5);

function estaEnRango(num) {
   if(num < 50 && num > 20){
      return true;
   }else{
      return false;
   }
   
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
}
estaEnRango(25);

function esEntero(num) {
   if(num % 2 == 0){
      return true;
   }else{
      return false;
   }  
   
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
  
}
esEntero(1.65);

function fizzBuzz(num) {
  if (num%3 == 0 ){
     return ("fizz");
  }
  if (num%5 ==0){
     return ("buzz");
  }
  if(num%3 ==0 && num%5 ==0){
     return("fizzbuzz");
  }
 
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
}
fizzBuzz(125);

function operadoresLogicos(num1, num2, num3) {
   
   if(num1 > num2 && num1 > num3 && num1 > 0){
      return ("Numero 1 es mayor y positivo");
   }
   if(num1<0 || num2<0 || num3<0){
      return("Hay negativos")
   }
   if(num3 > num1 && num3 > num2){
      num3 = num3++;
      return num3;      
   }
   if (num1 ==0 && num2==0 && num3==0){
      return ("Error");
   }
   return false;
   
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
}
operadoresLogicos(2,4,6);

function esPrimo(num) {
   if (numero <= 1) {
      return false;
      }
      
      for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
      return false;
      }
      }
   
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
}
esPrimo(8);

function esVerdadero(valor) {
   
   if(valor == true){
      return ("Soy verdadero");

   }else{
      return ("Soy falso");
   }
   
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
}
esVerdadero(true);

function tieneTresDigitos(num) {
   if (num > 99 && num <=999 ){
      return true;
   }else{
      return false;
   }
   
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
}
esVerdadero(126);

function doWhile(num) {
   let i = 0;

   do {
  i = i + 1;
  num = num + 5;
} while (i <= 8);

console.log(num);

}

doWhile(1);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
