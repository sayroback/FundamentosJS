<<<<<<< HEAD
var juan = {
  nombre: "Juan",
  apellido: "Calderon",
  edad: 28,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: false,
};

function imprimirProfeciones(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.ingeniero === true) {
    console.log("ingeniero");
  }
  if (persona.cocinero === true) {
    console.log("cocinero");
  }
  if (persona.cantante === true) {
    console.log("cantante");
  }
  if (persona.dj === true) {
    console.log("dj");
  }
  if (persona.guitarrista === true) {
    console.log("guitarrista");
  }
  if (persona.drone === true) {
    console.log("drone");
  }
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
=======
var juan = {
  nombre: "Juan",
  apellido: "Calderon",
  edad: 28,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: true,
  drone: false,
};

function imprimirProfeciones(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.ingeniero === true) {
    console.log("ingeniero");
  }
  if (persona.cocinero === true) {
    console.log("cocinero");
  }
  if (persona.cantante === true) {
    console.log("cantante");
  }
  if (persona.dj === true) {
    console.log("dj");
  }
  if (persona.guitarrista === true) {
    console.log("guitarrista");
  }
  if (persona.drone === true) {
    console.log("drone");
  }
}

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
