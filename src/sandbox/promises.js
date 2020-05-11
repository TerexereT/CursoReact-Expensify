const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            name: 'Armando',
            age: 26
        })
        // reject('Algo salio mal')
    }, 3000)
})

console.log('before')

promise.then((data) =>{
    console.log('1',data)
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Esta es mi otra promesa')
        }, 3000)
    })
}).then((str) => {
    console.log('esto corre?', str)
})
.catch((error) => {
console.log('Error: ', error)
})

console.log('after')