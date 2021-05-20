// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Message } from 'semantic-ui-react';

// == Import
import Header from '../Header';
import Repos from '../Repos';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Repos />
    <Message content="je suis un message" />
  </div>
);

// == Export
export default App;
