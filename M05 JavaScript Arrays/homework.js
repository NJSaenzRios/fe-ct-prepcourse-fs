/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return array[array.length-1];
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {
   return array.length;
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
  var Numero = array.map(num =>{
       return num+1;
   });
   return Numero;

   }
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:


function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array;
   
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   
   array.unshift(elemento);
   return array;
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   let palabra = palabras.join(" ");
   return palabra;  
    
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
      var numeros = array.includes(elemento);
      return numeros;
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   const sumWithInitial = arrayOfNums.reduce(
      (accumulator, currentValue) => { return accumulator + currentValue;   
      });
      return sumWithInitial;


}
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:


function promedioResultadosTest(resultadosTest) {
   var prom = 0;
   var suma = 0;
   
   for(i=0; i< resultadosTest.length;i++){
      suma = (resultadosTest[i] + suma);
      
   }
   var prom = (suma/resultadosTest.length);
   return prom;
      
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
  
   return Math.max(...arrayOfNums);
  
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos(){
  
  if (arguments[0] == undefined) return 0;
  let resultado = 1;
  for (let index = 0; index <= arguments.length - 1; index++) {
    resultado = resultado * arguments[index];
  }
  
  return resultado;
   
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   function cantidadElementos(array) {
      var num =0;
      for (i=0; i<array.length;i++){
         if (array[i]>18){
            num = num+1;
         }
      }
      return num;
   }


}

function diaDeLaSemana(numeroDeDia) {
  
   
      if (numeroDeDia== 1 ||numeroDeDia === 7 ){
         return ("Es fin de semana");
      } else{
      return ("Es dia laboral");
      }
   }
      
   
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
diaDeLaSemana(1);


function empiezaConNueve(num) {
 if (num.toString()[0] == 9){
    return true;
 }else{
    return false;
 }
  
  
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}
empiezaConNueve(5862);

function todosIguales(array) {
   
   var nume = array[0];

   const variable = (currentValue) => currentValue == nume;
   return array.every(variable);
   
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
   
   
const result = array.filter(word => word == "Enero" || word == "Marzo" || word == "Noviembre");
return result;   
   
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   
   let array =[];
   for (let i = 0; i < 11; i++){
      array.push(6 * i);
    }
    return array;
   
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   
   var  result = array.filter(word => word > 100);
   return result; 
   
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   
   var array = [];
   var suma = num;

   for (var i = 0; i < 10; i++) {
     suma = suma + 2;
     if (suma === i) break;
     else {
       array.push(suma);
     }
   }
   if (i < 10) {
     return "Se interrumpió la ejecución";
   } else {
     return array;
   }
  
   
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}
breakStatement(2);


   function continueStatement(num) {
     
      var i = 0;
      const array = [];
      
      while(i < 10){
         if(i === 5){
            continue;
              }else{
                  array.push(num += 2);
                  }
                  i++;
      
      }
           return array;
             
         // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
         // Guardar cada nuevo valor en un array y retornarlo.
         // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
         // se continua con la siguiente iteración.
         // [PISTA]: utiliza el statement 'continue'.
         // Tu código:
      }
      continueStatement(2);
    

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
