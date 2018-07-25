import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCRi33E1cWQf9xvY7B7pW0aqIsqbjBShPA',
  authDomain: 'chat-app-91b06.firebaseapp.com',
  databaseURL: 'https://chat-app-91b06.firebaseio.com',
  projectId: 'chat-app-91b06',
  storageBucket: 'chat-app-91b06.appspot.com',
  messagingSenderId: '36322596627'
};

const fire = firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, fire, googleAuthProvider };
