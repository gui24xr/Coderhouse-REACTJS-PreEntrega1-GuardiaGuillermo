

//--------------------------------------------------------------------------

import axios from 'axios';

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

const funcionAsync = async () => {

    const response = await axios.get(firebaseConfig.databaseURL + firebaseConfig.endpoints[0]);
    console.log(response.data);

}

//-------------------------------------------------------------------------