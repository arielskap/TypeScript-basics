export {};
// Crear una Fotografía
// const createPicture = (title, date, size) =>{
//   // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'

// // Usamos TS, definimos tipos para parametros
// const createPicture = (title: string, date: string, size: SquareSize) => {
//   // Se crea la Fotografía
//   console.log('create Picture using', title, date, size);
// }

// createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03');

// Parametros Opcionales en funciones

const createPicture = (title?: string, date?: string, size?: SquareSize) => {
  // Se crea la Fotografía
  console.log('create Picture using', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip');
createPicture();

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
  return {
    title,
    date,
    size
  }
}

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture)

// Tipo de retorno con TypeScript

const handleError = (code: number, message: string): never | string => {
  // Procesamiento del codigo, mensage
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has ocurred';
  }
}

try {
  let result = handleError(200, 'OK'); // string
  console.log('result', result)
  result = handleError(400, 'error'); // never
  console.log('result', result)
} catch (error) {

}
