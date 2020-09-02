// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);

// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
otherId = true;
console.log('idUser', idUser);

let surprise: any = 'hello typescript';
// surprise.sayHello(); // Error
const res = surprise.subsring(6); // Podría generar error si se cambia el tipo de dato.
console.log('res', res);