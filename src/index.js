import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Inicio from "./components/Inicio"
import ProPoke from "./rutas/ProPoke"
import Counter from "./rutas/Counter"

import { 
  HashRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

ReactDOM.render(
  
  <Router>
    <Switch>
      <Route path="/pokemon/:id/:name">
        <Counter />
      </Route>
      <Route path="/pokemon/:id">
        <ProPoke />
      </Route>
      <Route path="/pokemon">
        <App />
      </Route>
      <Route path="/" exact>
        <Inicio />
      </Route>
    </Switch>
  </Router>,
    

  document.getElementById('root')
);

