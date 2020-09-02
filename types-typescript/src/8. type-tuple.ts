export {}; //Esto se hizo ya que al definir la variable user, typescript entienden todos los archivos en src como un mismo proyecto y en otro archivo ya se había definido la variable user. Colocando esto nos ahorramos que siga apareciendo el problema.

// [1, 'user']
let user: [number, string];
user = [1, 'keloke'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];

console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'asod']); // 0
array.push([2, 'paparazzi']); // 1
array.push([3, 'ariel']); // 2

console.log('array', array);

// Uso de funciones Array
// ariel -> ariel001

array[2][1] = array[2][1].concat('001'); //ariel001
console.log('array', array);
