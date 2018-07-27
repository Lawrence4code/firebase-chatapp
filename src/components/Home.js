import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../routers/AppRouter';

import { firebase, fire, googleAuthProvider } from '../fire';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: ''
    };
  }

  googleSignIn = () => {
    console.log('googleSignIn triggered');
    fire
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
        console.log(user);
        this.setState({
          userInfo: result
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(user => {
      console.log(history.location);
      if (user) {
        console.log('Logged In');
        console.log(history.location);
        if (history.location.pathname === '/') {
          history.push('/chat');
        }
      } else {
        console.log('Logged Off');
      }
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="home-page">
        <header className="main-header">
          <nav className="transparent">
            <div className="container">
              <div className="nav-wrapper">
                <a href="!#" className="brand-logo">
                  Awesomessage.io
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="index.html" className="active-link">
                      Home
                    </a>
                  </li>

                  <li>
                    <Link
                      to="/signup"
                      className="btn btn-signup white purple-text"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#login-modal"
                      className="btn btn-login purple modal-trigger"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section className="hero container">
          <div className="row s12 m10 offset-m1 center">
            <h5>Welcome to Awesomessage!</h5>
            <h2>Stay Connected, anywhere, everywhere...</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate impedit iste delectus illum sit asperiores.
            </p>
            <br />
            <br />
            <Link to="/signup" className="btn btn-signup white purple-text">
              SignUp
            </Link>
            <a
              href="#login-modal"
              className="btn btn-medium purple white-text login modal-trigger"
            >
              Login
            </a>
          </div>
        </section>
        <footer className="footer-copyright  darken-4 grey-text transparent">
          <div className="container">
            Awesomessage &copy; 2018
            <a className="grey-text darken-4 right" href="#!">
              Terms & Conditions
            </a>
          </div>
        </footer>

        <div id="login-modal" className="modal">
          <div className="modal-content">
            <h4>Account Login</h4>
            <p>Login in to begin chat</p>
            <form>
              <div className="input-field">
                <input type="email" id="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" id="passsword" />
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <a
                  className="waves-effect waves-light btn"
                  onClick={this.googleSignIn}
                >
                  <i className="material-icons left"> </i>Google Sign in
                </a>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close btn grey">
              <i className="fa fa-sync" />Login
            </a>
            <a href="#!" className="modal-action modal-close btn purple">
              <i className="fa fa-lock" />Reset Password
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
