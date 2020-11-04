import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppEth2New from "./AppEth2New";
import AppNew2Eth from "./AppNew2Eth";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ App }></Route>
        <Route path="/eth2new" component={ AppEth2New }></Route>
        <Route path="/new2eth" component={ AppNew2Eth }></Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
