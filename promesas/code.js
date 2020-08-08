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

for (let i = 0; i < 8; i++) {
  obtenerPersonaje(i)
    .then((personaje) => {
      console.log(`El personaje es ${i} ${personaje.name}`);
    })
    .catch(onError);
}
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

for (let i = 0; i < 8; i++) {
  obtenerPersonaje(i)
    .then((personaje) => {
      console.log(`El personaje es ${i} ${personaje.name}`);
    })
    .catch(onError);
}
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
