import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID
  }

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, database as default, googleAuthProvider}

// //child remove
// // database.ref('expenses').on('child_removed', (snapshot) =>{
// //     console.log(snapshot.key, snapshot.val())
// // })

// //child change
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child added
// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

//subscribe to new expense format
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)    
// })



// Agregando Data tipo arreglo

// database.ref('notes/-M70x3-Fk8sXzhcuOjnM').update({
//     body: 'comprar comida'
// })
// database.ref('notes/-M70x3-Fk8sXzhcuOjnM').remove()
// database.ref('notes').push({
//     title: 'lenguajes usados ultimamente',
//     body: 'c++, opengl'
// })

//Expenses V
// database.ref('expenses').push({
//     description: "maquina medium-end",
//     note: "maquina 1",
//     amount: 2000,
//     createdAt: 9827359836598235915695395712352
// })


//Subscribing V
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error', e)
// })

// setTimeout(()=>{
//     database.ref('age').set(30)
// }, 4000)

// setTimeout(()=>{
//     database.ref().off(onValueChange)
// }, 8000)

// setTimeout(()=>{
//     database.ref('age').set(40)
// }, 12000)

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e)=>{
//         console.log('Error: ', e)
//     })

// database.ref().set({
//     name: 'Armando Rivas',
//     age: 26,
//     job: 'software dev',
//     stressLevel: 5,
//     location:{
//         city: 'Caracas',
//         country: 'Venezuela'
//     },
//     job: {
//         title: 'desarrollador',
//         company: 'Google'
//     }
// }).then(() =>{
//     console.log('Data se guardo')
// }).catch((error) =>{
//     console.log('Error: ', error)
// })


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Higuerote'  
// })
