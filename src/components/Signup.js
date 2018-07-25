import React from 'react';

const SignUp = () => {
  const onSignupHandler = event => {
    event.preventDefault();
    console.log(event);
  };

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
                  <a href="#login-modal" className="btn purple modal-trigger">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="section section-signup">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 white-text">
              <h4>Get a free account</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veniam id nisi? Saepe sint ipsum distinctio molestiae,
                recusandae autem sequi?
              </p>
              <h4>Download the free software</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veniam id nisi? Saepe sint ipsum distinctio molestiae,
                recusandae autem sequi?
              </p>
              <h4>Push to the platform</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veniam id nisi? Saepe sint ipsum distinctio molestiae,
                recusandae autem sequi?
              </p>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
                <form>
                  <div className="input-field">
                    <input type="text" id="first_name" />
                    <label for="first_name">First Name</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="last_name" />
                    <label for="last_name">Last Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="password" id="password" />
                    <label for="password">Password</label>
                  </div>
                  <input
                    type="submit"
                    value="Signup"
                    className="btn btn-large purple btn-extend"
                    onClick={event => {
                      onSignupHandler(event);
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
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
          <h4> Account Login </h4>
          <p> Login in to begin chat </p>
          <form>
            <div className="input-field">
              <input type="email" id="email" />
              <label for="email"> Email </label>
            </div>
            <div className="input-field">
              <input type="password" id="passsword" />
              <label for="password"> Password </label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close btn grey">
            <i className="fa fa-sync" /> Login
          </a>
          <a href="#!" className="modal-action modal-close btn purple">
            <i className="fa fa-lock" /> Reset Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
