"use strict";
console.log('Hola Platzi keloke');
// Number
// Explicito
var phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Inferido
var phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1; //Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; //Error
// Strings
var username = 'arielVillarreal';
username = "ariel";
// username = true; // Error: tipo string
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n  User Info:\n  username: " + username + "\n  firstName: " + (username + ' Ariel ') + "\n  phone: " + phone + "\n  isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
