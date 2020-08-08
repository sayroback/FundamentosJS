<<<<<<< HEAD
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
var juan = new Persona("Juan", "Calderon");

juan.saludar();
=======
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
var juan = new Persona("Juan", "Calderon");

juan.saludar();
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
