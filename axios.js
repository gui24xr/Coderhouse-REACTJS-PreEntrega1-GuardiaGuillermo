
//import axios from 'axios';
import { Axios } from "axios";
const axios = require('axios');


const nuevoUser = {
  id: 31,
  userName: 'KrilinDBZ',
  firstName: 'Gphan',
  lastName: 'Rogahn',
  password: '123456',
  profilePic: 'https://robohash.org/inciduntearumest.png?size=300x300&set=set1',
  cvu: '15-8535-6147-4810',
  paymentMethods: [ 39, 56, 61 ],
  favorites: [],
  operations: []
}

const firebaseConfig = {
  apiKey: "somekey",
  authDomain: "somekey",
  databaseURL: 'https://gcash-404503-default-rtdb.firebaseio.com/',
  endpoints:['/usuariosApp.json','/usuariosApp/1/firstName.json'],
  projectId: "somekey",
  storageBucket: "somekey",
  messagingSenderId: "somekey",
  appId: "appIdKey"
};
/*
axios.post(firebaseConfig.databaseURL + firebaseConfig.endpoints[0],nuevoUser)
.then(response => {
  // Maneja la respuesta exitosa
  console.log('Usuario agregado con éxito:', response.data);
})
.catch(error => {
  // Maneja el error
  console.error('Error al agregar usuario:', error);
});

axios.post(firebaseConfig.databaseURL + firebaseConfig.endpoints[0],nuevoUser)
.then(response => {
  // Maneja la respuesta exitosa
  console.log('Usuario agregado con éxito:', response.data);
})
.catch(error => {
  // Maneja el error
  console.error('Error al agregar usuario:', error);
});
*/
/*
axios.put(firebaseConfig.databaseURL + firebaseConfig.endpoints[1],{firstName:'piedadcitasss'})
.then(response => {
  // Maneja la respuesta exitosa
  console.log('Datos del usuario actualizados con éxito:', response.data);
})
*/


 axios.get(firebaseConfig.databaseURL + firebaseConfig.endpoints[0])
  .then(response => console.log(response.data))

console.log('response.data')