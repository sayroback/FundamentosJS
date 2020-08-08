<<<<<<< HEAD
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, callback).fail(function () {
    console.log(`Error, no se encontro el personaje ${id}`);
  });
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);
  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);
      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);
        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`);
          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);
            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`);
              obtenerPersonaje(8, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`);
                obtenerPersonaje(9, function (personaje) {
                  console.log(`Hola, yo soy ${personaje.name}`);
                });
              });
            });
          });
        });
      });
    });
  });
});
=======
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, callback).fail(function () {
    console.log(`Error, no se encontro el personaje ${id}`);
  });
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);
  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);
      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);
        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`);
          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);
            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`);
              obtenerPersonaje(8, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`);
                obtenerPersonaje(9, function (personaje) {
                  console.log(`Hola, yo soy ${personaje.name}`);
                });
              });
            });
          });
        });
      });
    });
  });
});
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
