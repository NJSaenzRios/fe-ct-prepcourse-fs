/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/


function crearUsuario(){
  
   // Crea una Clase de ES6 o una función constructor llamada "Usuario"
   // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
   // En el `contructor`, define el usuario, el nombre, el email y la contraseña
   // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
   // {{nombre}} debe ser el nombre definido en cada instancia
   // Devuelve la clase   
   // Tu código:

  
      class Usuario{

      constructor(nombre, usuario, email, password) {
         this.nombre = "Samuel";
         this.usuario = "jssamuel";
         this.email = "samuel@email.com";
         this.password = "LoveJS";
      }     
   } 

   Usuario.prototype.saludar = function(){
      return 'Hola, mi nombre es ' + this.nombre;
   }
   return Usuario;   
}

   
   

function agregarMetodoPrototype(Usuario) {
   
   Usuario.prototype.saludar=function(){
      return "Hello World!"
     }     
   
   }
   
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:


function agregarStringInvertida() {
   
     String.prototype.reverse=function(){

      var separar = this.split("");
      var revertir = separar.reverse();
      var stringReversa = revertir.join("");
      return stringReversa;     


   }
   
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
