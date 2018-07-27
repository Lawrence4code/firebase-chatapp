import React, { Component } from 'react';
import { fire } from '../fire';
import { history } from '../routers/AppRouter';

// import { user } from './Home';

import moment from 'moment';
// console.log(user);

const database = fire.database();

class Chat extends Component {
  constructor(props) {
    super();
    this.state = {
      messagesItem: [],
      newMessage: {}
    };
  }

  logout = () => {
    console.log('log out from chat');
    fire.auth().signOut();
    history.push('/');
  };

  componentWillMount() {
    console.log('component did mount');
    database.ref('/messages').on('value', snapshot => {
      const data = snapshot.val() || {};
      const messageItemFromFirebase = [];

      for (const id in data) {
        const messageItem = data[id];
        messageItemFromFirebase.push({ messageItem });

        this.setState({
          messagesItem: messageItemFromFirebase
        });
      }
    });
  }

  componentDidMount() {
    console.log('componentDidMount triggered.');
  }

  componentDidUpdate() {
    const chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
    // https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
  }

  onEnterHandler = event => {
    if (event.target.value.trim().length !== 0) {
      // any better way of handling situation???
      console.log('onEnterHandler triggered.');
      database
        .ref('/messages')
        .push()
        .set({
          message: this.state.newMessage.message.trim(),
          timeStamp: moment(this.state.newMessage.time).format('LT')
        });
      this.setState({
        newMessage: {}
      });
      event.target.value = '';
    }

    // console.log('onEnterHandler triggered.')
    // database
    //   .ref('/messages')
    //   .push()
    //   .set({
    //     message: this.state.newMessage.message.trim(),
    //     timeStamp: moment(this.state.newMessage.time).format('LT')
    //   });
    // this.setState({
    //   newMessage: {}
    // });
    // event.target.value = "";
  };

  render() {
    // console.log(this.state.messages);

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
                    <a
                      className="btn purple modal-trigger"
                      onClick={this.logout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section className="section section-chat">
          <div className="container">
            <div className="row">
              <div
                className="chat-box col s12 white purple-text "
                id="chat-box"
              >
                {this.state.messagesItem.length === 0 ? (
                  <div>
                    <p> Just a quick second, Boss. </p>
                    <p> Loading...</p>
                  </div>
                ) : (
                  this.state.messagesItem.map(Item => {
                    return (
                      <p
                        className="messageString"
                        key={Item.messageItem.message}
                      >
                        {' '}
                        {Item.messageItem.message}{' '}
                        <span> {Item.messageItem.timeStamp}</span>
                      </p>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="row chat-input">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12 white-text">
                <textarea
                  id="textarea2"
                  className="materialize-textarea white-text"
                  data-length="120"
                  onChange={event => {
                    this.setState({
                      newMessage: {
                        message: event.target.value,
                        time: Date.now()
                      }
                    });
                  }}
                  onKeyUp={event => {
                    event.which === 13
                      ? (event = this.onEnterHandler(event))
                      : null; //Expected an assignment or function call and instead saw an expression
                  }}
                />
                <label htmlFor="textarea2 white-text"> Your Message...</label>
              </div>
            </div>
          </form>
        </div>

        <footer className="footer-copyright  darken-4 grey-text transparent">
          <div className="container">
            Awesomessage &copy; 2018
            <a className="grey-text darken-4 right" href="#!">
              Terms & Conditions
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
export default Chat;
