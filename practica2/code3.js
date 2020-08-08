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

function imprimirNombreYEdad(persona) {
  console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años.`);
}

imprimirNombreYEdad(juan);
imprimirNombreYEdad(luis);
