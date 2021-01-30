// interface Color {
//   readonly rgb: string;
//   opacity: number;
//   name?: string;
// }

// const turquoise: Color = { rgb: '00afc', opacity: 1 }
// turquoise.name = 'Turquoise Blue'
// turquoise.rgb = '03c1ff'

// interface Status {
//   level: number;
//   maxHP: number;
//   maxMP: number;
//   [attr: string]: number
// }

// const myStatus: Status = {
//   level: 99,
//   maxHP: 999,
//   maxMP: 999,
//   attach: 999,
//   defense: 999,
// };

// enum Pet {
//   Cat = 'Cat',
//   Dog = 'Dog',
//   Rabbit = 'Rabbit',
// }

// let Tom: Pet = Pet.Cat;
// Tom = 'Hamster';
// Tom = 'Dog';
// Tom = Pet.Dog;

// let Marry: 'Cat' | 'Dog' | 'Rabbit' = 'Cat';
// Marry = 'Rabbit';
// Marry = 'Parrot';

// ## tuple
// const userAttrs: [number, string, boolean] = [1, 'patty', true];
// const [id, username, isAdmin] = userAttrs
// console.log(id, username, isAdmin);

const str = `{ "id": 1, "username": "patty" }`;
const user = JSON.parse(str);

console.log(user.id, user.address.zipCode);
