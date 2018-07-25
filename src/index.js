import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();

/*
            <a href="!#" className="button-collapse" data-activates="mobile-nav">
              <i className="fa fa-bars"> </i>
            </a>
  <ul class="side-nav" id="mobile-nav">
    <h4 className="purle-text text-darken-4 center"> Awesomessage.io </h4>
    <li>
      <div className="divider">
      </div>
    </li>
    <li><a href="index.html"> <i className="fa fa-home grey-text text-darken-4"> Home </i> </a></li>
    <li>
      <div className="divider">
      </div>
    </li>
    <li><a href="index.html" className="btn purple"> <i className="fa fa-users grey-text text-darken-4"> Home </i></a></li>
  </ul>
*/
