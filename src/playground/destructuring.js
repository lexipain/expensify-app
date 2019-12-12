const items = ["Coffee", "$2.0", "$2.50", "$2.75"];
const [item, , mediumPrice] = items;

console.log(`A medium ${item} costs ${mediumPrice}`);

// const address = ["Garðastræti 45", "101", "Reykjavik"];

// const [street, zip, city = "New York"] = address;
// Hægt að sleppa því að destrúktura item með að kötta það út en halda seperating kommunum.
// console.log(street);

// console.log(`You are in ${street}, ${zip}, ${city}`);

// const person = {
//   name: undefined,
//   age: 30,
//   location: {
//     city: "Reykjavík",
//     temperature: "-5c"
//   }
// };

// const { age, name = "Anonymous" } = person;
// const { city, temperature: temp } = person.location;
// console.log(`${name} is ${age} years old.`);

// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//   title: "House of Suns",
//   author: "Alistair Reynolds",
//   publisher: {
//     name: "Sci-fi"
//   }
// };

// const { name: publisherName = "Self published" } = book.publisher;

// console.log(publisherName);
