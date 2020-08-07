// Void

// Tipo explicito
function showInfo(user: any): any {
  console.log('User Info', user.id, user.username, user.firstName)
  // return 'hola';
}

showInfo({
  id: 1, username: 'asd', firstName: 'Ari'
});

// Tipo Inferido

function showFormattedInfo(user:any) {
  console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
  `);
}

showFormattedInfo({
  id: 1, username: 'asd', firstName: 'Ari'
});

// tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null; // Si el useString esta activo en el tsconfig esto nos dara error
// unusable = undefined;

// Tipo: Never

const handleError = (code: number, message: string): never => {

  // Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (error) {
}

const sumNumbers = (limit: number): never => {
  let sum = 0;
  while(true) {
    sum++;
  }
  // return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina