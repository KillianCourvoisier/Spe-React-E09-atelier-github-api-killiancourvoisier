// == Import npm
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Message } from 'semantic-ui-react';
import axios from 'axios';

// == Import
import Header from '../Header';
import Repos from '../Repos';
import './style.scss';

const BASE_URL = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [message, setMessage] = useState('Aucune recherche effectuée');
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };

  const handleFormSubmit = () => {
    setLoading(true);

    axios({
      method: 'get',
      url: `${BASE_URL}${inputText}`,
    })
      .then((response) => {
        console.log(response.data);
        setRepos(response.data.items);
        const newMessage = `La recherche à générer ${response.data.total_count} résultats`;
        setMessage(newMessage);
      })
      .catch((error) => {
        console.trace(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Header
        loading={loading}
        inputValue={inputText}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
      />
      <Message content={message} />
      <Repos list={repos} />
    </div>
  );
};
// == Export
export default App;
