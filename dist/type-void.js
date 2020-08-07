"use strict";
// Void
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({
    id: 1, username: 'asd', firstName: 'Ari'
});
// Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n    id: " + user.id + "\n    username: " + user.username + "\n    firstName: " + user.firstName + "\n  ");
}
showFormattedInfo({
    id: 1, username: 'asd', firstName: 'Ari'
});
// tipo void, como tipo de dato en variable
var unusable;
// unusable = null; // Si el useString esta activo en el tsconfig esto nos dara error
// unusable = undefined;
// Tipo: Never
var handleError = function (code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
};
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
var sumNumbers = function (limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
};
sumNumbers(10);
// ciclo infinito, programa nunca termina
