function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
var juan = new Persona("Juan", "Calderon");

juan.saludar();
