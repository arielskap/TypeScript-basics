// export {};

// // Sino se le pone en tsconfig, target es6 no agarra

// enum PhotoOrientation {
//   Landscape,
//   Portrait,
//   Square,
//   Panorama,
// }

// class Picture {
//   // Propiedades
//   // por default son public, cuando se lo agregas simplemente sos explicito
//   #id: number;
//   #title: string;
//   #orientation: PhotoOrientation;

//   public constructor(id: number, title: string, orientation: PhotoOrientation) {
//     this.#id = id;
//     this.#title = title;
//     this.#orientation = orientation;
//   }

//   //Comportamiento
//   public toString() {
//     return `[id: ${this.#id},
//             title: ${this.#title},
//             orientation: ${this.#orientation}]`;
//   }
// }

// class Album {
//   #id: number;
//   #title: string;
//   // pictures: Picture[] = [];
//   #pictures: Picture[];

//   public constructor(id: number, title: string) {
//     this.#id = id;
//     this.#title = title;
//     this.#pictures = [];
//   }

//   public addPicture(picture: Picture) {
//     this.#pictures.push(picture)
//   }
// }

// const album: Album = new Album(1, 'Personal Pictures');
// const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
// album.addPicture(picture);
// console.log('album', album);

// // Accediento a los miembros publicos
// // picture.id = 100; // private
// // picture.title = 'Another title'; // private
// // album.title = 'Personal Activities'; // private
// console.log('album', album)