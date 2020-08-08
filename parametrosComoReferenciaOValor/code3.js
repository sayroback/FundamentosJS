var juan = {
  nombre: "Juan",
  apellido: "Calderon",
  edad: 24,
};
var luis = {
  nombre: "Luis",
  apellido: "Calderon",
  edad: 13,
};

function imprimirNombreEnMayusculas(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(juan);
imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas({ nombre: "pepito" });

function cumpleannos(persona) {
  persona.edad += 1;
}
