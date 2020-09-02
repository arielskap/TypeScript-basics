"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Usamos TS, definimos tipos para parametros
// const createPicture = (title: string, date: string, size: SquareSize) => {
//   // Se crea la Fotografía
//   console.log('create Picture using', title, date, size);
// }
// createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03');
// Parametros Opcionales en funciones
var createPicture = function (title, date, size) {
    // Se crea la Fotografía
    console.log('create Picture using', title, date, size);
};
createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip');
createPicture();
// Flat Array Function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
// Tipo de retorno con TypeScript
var handleError = function (code, message) {
    // Procesamiento del codigo, mensage
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has ocurred';
    }
};
try {
    var result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(400, 'error'); // never
    console.log('result', result);
}
catch (error) {
}
