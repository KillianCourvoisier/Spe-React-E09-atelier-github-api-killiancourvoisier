// == Import npm
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Message } from 'semantic-ui-react';
import axios from 'axios';

// == Import
import data from 'src/data/repos';
import Header from '../Header';
import Repos from '../Repos';
import './style.scss';

const BASE_URL = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [inputText, setInputText] = useState('');
  const [repos, setRepos] = useState(data.items);

  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };

  const handleFormSubmit = () => {
    axios({
      method: 'get',
      url: `${BASE_URL}${inputText}`,
    })
      .then((response) => {
        console.log(response.data);
        setRepos(response.data.items);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {

      });
  };

  return (
    <div className="app">
      <Header
        inputValue={inputText}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
      />
      <Message content="je suis un message" />
      <Repos list={repos} />
    </div>
  );
};
// == Export
export default App;
