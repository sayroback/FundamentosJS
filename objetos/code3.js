<<<<<<< HEAD
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
=======
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
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
