<<<<<<< HEAD
var juan = {
  nombre: "Juan",
  apellido: "Calderon",
  edad: 17,
  peso: 75,
};
console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`);
const CAMBIODEPESO = 0.2;
const DIASDELANNO = 365;

const aumentarDePeso = (persona) => (persona.peso += CAMBIODEPESO);
const disminuirDePeso = (persona) => (persona.peso -= CAMBIODEPESO);
const META = juan.peso - 3;
const comeMucho = () => Math.random() < 0.3;
const realizarDeporte = () => Math.random() < 0.4;
var dias = 0;
while (juan.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(juan);
  }
  if (realizarDeporte()) {
    disminuirDePeso(juan);
  }
  dias += 1;
}
console.log(`Tardo ${dias} dias para adelgazar 3 kg`);
// for (let i = 1; i <= DIASDELANNO; i++) {
//   var random = Math.random();
//   if (random < 0.25) {
//     aumentarDePeso(juan);
//   } else if (random < 0.5) {
//     disminuirDePeso(juan);
//   }
// }

console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)} kg`);
=======
var juan = {
  nombre: "Juan",
  apellido: "Calderon",
  edad: 17,
  peso: 75,
};
console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`);
const CAMBIODEPESO = 0.2;
const DIASDELANNO = 365;

const aumentarDePeso = (persona) => (persona.peso += CAMBIODEPESO);
const disminuirDePeso = (persona) => (persona.peso -= CAMBIODEPESO);
const META = juan.peso - 3;
const comeMucho = () => Math.random() < 0.3;
const realizarDeporte = () => Math.random() < 0.4;
var dias = 0;
while (juan.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(juan);
  }
  if (realizarDeporte()) {
    disminuirDePeso(juan);
  }
  dias += 1;
}
console.log(`Tardo ${dias} dias para adelgazar 3 kg`);
// for (let i = 1; i <= DIASDELANNO; i++) {
//   var random = Math.random();
//   if (random < 0.25) {
//     aumentarDePeso(juan);
//   } else if (random < 0.5) {
//     disminuirDePeso(juan);
//   }
// }

console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)} kg`);
>>>>>>> b0bf1ab1d393ae9e94f26536403fd1463aa2432e
