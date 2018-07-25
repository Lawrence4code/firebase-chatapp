import React from 'react';
import { firebase, fire, googleAuthProvider } from '../fire';




const TestingGoogleLogin = () => {
  const googleSignIn = () => {
    console.log('googleSignIn triggered')
    fire.auth().signInWithPopup(googleAuthProvider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log("Success:" + result);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  return (
    <div>
      <button onClick={googleSignIn}>
        Sign In with Google
    </button>
    </div>
  )
}



export default TestingGoogleLogin