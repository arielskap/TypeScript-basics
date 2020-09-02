"use strict";
// Tipo explicito
var idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
// Tipo Inferido
var otherId;
otherId = 1;
otherId = '1';
otherId = true;
console.log('idUser', idUser);
var surprise = 'hello typescript';
// surprise.sayHello(); // Error
var res = surprise.subsring(6); // Podría generar error si se cambia el tipo de dato.
console.log('res', res);
