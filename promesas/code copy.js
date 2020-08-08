<<<<<<< HEAD
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();

// var promesas = ids.map(function (id) {
//   return obtenerPersonaje(id);
// });
=======
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();

// var promesas = ids.map(function (id) {
//   return obtenerPersonaje(id);
// });
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
