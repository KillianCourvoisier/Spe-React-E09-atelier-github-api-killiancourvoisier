// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Message } from 'semantic-ui-react';

// == Import
import data from 'src/data/repos';
import Header from '../Header';
import Repos from '../Repos';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header
      inputValue="coucou"
      onInputChange={(textSaisi) => {
        console.log('change with', textSaisi);
      }}
      onFormSubmit={() => {
        console.log('submit');
      }}
    />
    <Message content="je suis un message" />
    <Repos list={data.items} />
  </div>
);

// == Export
export default App;
