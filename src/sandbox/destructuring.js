// const person = {
//     name: 'Armando',
//     age: 25,
//     location: {
//         city: 'Caracas',
//         temp: 24
//     }
// }

// //const name = person.name
// //const age= person.age
// const {name: firstname = 'Anon', age} = person

// console.log(`${firstname} is ${age}`)

// const {city, temp: tempe}=person.location
// if (city && tempe){
//     console.log(`${tempe} es la temperatura en ${city}`)
// }

// const book = {
//     title: 'La Biblia',
//     author: 'World',
//     publisher: {
//         name: 'Vaticano'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// const address = ['Calle los Medanos', 'Caracas', 'Miranda', '171']

// const [calle, ciudad, estado = 'Dto Capital', zip] = address
// console.log(`Estas en ${calle} ${estado}`)

const item = ['Cafe', '2','2.50','3']

const [,,mediano = 'Gratis'] = item

console.log(`El cafe mediano cuesta: ${mediano}`)